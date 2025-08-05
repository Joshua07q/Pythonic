import React, { useState, useCallback, useEffect } from 'react';
import { Challenge, ExecutionResult, AIReviewResult } from './types';
import { WEEKS_DATA } from './constants/challenges';
import ChallengeList from './components/ChallengeList';
import ChallengeDetail from './components/ChallengeDetail';
import { initPyodide, runPythonCode } from './services/pythonRunnerService';
import { getAIReview } from './services/geminiService';
import { RocketIcon } from './components/icons';

const IDE: React.FC = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge>(WEEKS_DATA[0].challenges[0]);
  const [userCode, setUserCode] = useState<{ [key: string]: string }>({
    [WEEKS_DATA[0].challenges[0].id]: WEEKS_DATA[0].challenges[0].starterCode || ''
  });
  const [executionResult, setExecutionResult] = useState<{ [key: string]: ExecutionResult | null }>({});
  const [aiReviewResult, setAIReviewResult] = useState<{ [key: string]: AIReviewResult | null }>({});
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAIReviewLoading, setIsAIReviewLoading] = useState<boolean>(false);
  const [isRunnerReady, setIsRunnerReady] = useState<boolean>(false);
  const [runnerStatusMessage, setRunnerStatusMessage] = useState<string>("Initializing Python environment...");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initialize = async () => {
      try {
        setError(null);
        await initPyodide((message: string) => {
          setRunnerStatusMessage(message);
        });
        setIsRunnerReady(true);
      } catch (err) {
        console.error("Failed to load Pyodide:", err);
        setError("Could not load Python environment. Please refresh the page.");
        setIsRunnerReady(false);
      }
    };
    initialize();
  }, []);

  const handleSelectChallenge = useCallback((challenge: Challenge) => {
    setSelectedChallenge(challenge);
    if (userCode[challenge.id] === undefined) {
      setUserCode(prev => ({ ...prev, [challenge.id]: challenge.starterCode || '' }));
    }
  }, [userCode]);

  const handleCodeChange = useCallback((code: string) => {
    setUserCode(prev => ({ ...prev, [selectedChallenge.id]: code }));
  }, [selectedChallenge]);

  const handleRunCode = async () => {
    if (!selectedChallenge) return;
    setIsLoading(true);
    setError(null);
    setExecutionResult(prev => ({ ...prev, [selectedChallenge.id]: null }));
    setAIReviewResult(prev => ({ ...prev, [selectedChallenge.id]: null })); // Clear previous review

    try {
      const codeToRun = userCode[selectedChallenge.id] || '';
      const result = await runPythonCode(codeToRun);
      setExecutionResult(prev => ({ ...prev, [selectedChallenge.id]: result }));
    } catch (err) {
      console.error("Execution Error:", err);
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred.";
      setError(`Failed to run code. ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetAIReview = async () => {
    if (!selectedChallenge) return;
    setIsAIReviewLoading(true);
    setError(null);
    setAIReviewResult(prev => ({ ...prev, [selectedChallenge.id]: null }));

    try {
        const codeToReview = userCode[selectedChallenge.id] || '';
        const result = await getAIReview(selectedChallenge, codeToReview);
        setAIReviewResult(prev => ({ ...prev, [selectedChallenge.id]: result }));
    } catch (err) {
        console.error("AI Review Error:", err);
        const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred.";
        setError(`Failed to get AI review. ${errorMessage}`);
    } finally {
        setIsAIReviewLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-900 font-sans text-slate-300 animate-fade-in">
       <style>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-in-out;
          }
        `}</style>
      <header className="bg-slate-900/70 backdrop-blur-lg border-b border-slate-700/50 sticky top-0 z-20 flex-shrink-0">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <RocketIcon className="w-8 h-8 text-cyan-400" />
              <h1 className="text-xl md:text-2xl font-bold text-slate-100">The Pythonic Journey</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-grow grid md:grid-cols-12 overflow-hidden">
        <aside className="md:col-span-4 lg:col-span-3 xl:col-span-3 bg-slate-800/50 border-r border-slate-700/50 overflow-y-auto">
          <ChallengeList
            weeks={WEEKS_DATA}
            selectedChallengeId={selectedChallenge.id}
            onSelectChallenge={handleSelectChallenge}
          />
        </aside>
        <main className="md:col-span-8 lg:col-span-9 xl:col-span-9 overflow-y-auto">
          {selectedChallenge && (
            <ChallengeDetail
              challenge={selectedChallenge}
              userCode={userCode[selectedChallenge.id] || ''}
              onCodeChange={handleCodeChange}
              onRun={handleRunCode}
              onGetAIReview={handleGetAIReview}
              isLoading={isLoading}
              isAIReviewLoading={isAIReviewLoading}
              isRunnerReady={isRunnerReady}
              runnerStatusMessage={runnerStatusMessage}
              executionResult={executionResult[selectedChallenge.id] || null}
              aiReviewResult={aiReviewResult[selectedChallenge.id] || null}
              error={error}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default IDE;