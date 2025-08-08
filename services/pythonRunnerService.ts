import { ExecutionResult, OnUserInput } from '../types';

declare const loadPyodide: (config: { indexURL: string }) => Promise<any>;

let pyodide: any = null;
let pyodideReadyPromise: Promise<void> | null = null;

const PACKAGES = [
    "scikit-learn",
    "pandas",
    "numpy",
    "matplotlib",
    "requests",
    "scipy",
    "torch",
    "jupyter",
    "isort"
];

const initPyodide = (
    onProgress: (message: string) => void,
    onUserInput: OnUserInput
): Promise<void> => {
    if (pyodideReadyPromise) {
        return pyodideReadyPromise;
    }

    pyodideReadyPromise = (async () => {
        onProgress("Loading Python interpreter...");
        pyodide = await loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/"
        });
        
        onProgress("Loading required packages...");
        await pyodide.loadPackage(PACKAGES);
        
        pyodide.setStdin({
            stdin: (promptText: string) => {
                // The promptText is what Python's input() function sends.
                // We'll pass it to our React component to display.
                return onUserInput(promptText);
            }
        });

        onProgress("Python environment is ready!");
    })();

    return pyodideReadyPromise;
};

const runPythonCode = async (code: string): Promise<ExecutionResult> => {
    if (!pyodide) {
        throw new Error("Pyodide is not initialized yet.");
    }

    const redirectScript = `
import sys
import io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
    `;

    try {
        await pyodide.runPythonAsync(redirectScript);
        await pyodide.runPythonAsync(code);
        
        const output = pyodide.globals.get('sys').stdout.getvalue();
        const error = pyodide.globals.get('sys').stderr.getvalue();
        
        return { 
            output: output.trim(), 
            error: error ? error.trim() : null 
        };

    } catch (e: any) {
        // In case of a fatal error in the user's code, capture stderr too.
        const errorOutput = pyodide.globals.get('sys').stderr.getvalue();
        const fullError = (errorOutput ? errorOutput + '\n' : '') + e.message;
        
        return {
            output: pyodide.globals.get('sys').stdout.getvalue().trim(),
            error: fullError.trim()
        };
    }
};

export { initPyodide, runPythonCode };
