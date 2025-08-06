import React from 'react';
import { Challenge, ExecutionResult, AIReviewResult } from '../types';
import { LoadingSpinner, XCircleIcon, LightbulbIcon, TerminalIcon, SparklesIcon, CheckCircleIcon, InfoIcon } from './icons';

interface ChallengeDetailProps {
  challenge: Challenge;
  userCode: string;
  onCodeChange: (code: string) => void;
  onRun: () => void;
  onGetAIReview: () => void;
  isLoading: boolean;
  isAIReviewLoading: boolean;
  isRunnerReady: boolean;
  runnerStatusMessage: string;
  executionResult: ExecutionResult | null;
  aiReviewResult: AIReviewResult | null;
  error: string | null;
}

const OutputPanel: React.FC<{ result: ExecutionResult | null }> = ({ result }) => {
    if (!result) return null;

    return (
        <div className="mt-4">
            <h3 className="text-lg font-bold text-slate-200 mb-2 flex items-center">
                <TerminalIcon className="w-5 h-5 mr-2" />
                Console Output
            </h3>
            <div className="bg-slate-900 border border-slate-700 p-4 rounded-lg font-mono text-sm min-h-[5rem]">
                {result.output && (
                    <pre className="whitespace-pre-wrap text-slate-300">{result.output}</pre>
                )}
                {result.error && (
                    <pre className="whitespace-pre-wrap text-red-400 mt-2">
                        <span className="font-bold">[Error]</span>
                        {'\n'}
                        {result.error}
                    </pre>
                )}
                {!result.output && !result.error && (
                    <p className="text-slate-500 italic">No output was produced.</p>
                )}
            </div>
        </div>
    );
};

const AIReviewPanel: React.FC<{ result: AIReviewResult | null, isLoading: boolean }> = ({ result, isLoading }) => {
    if (isLoading) {
        return (
            <div className="flex items-center justify-center p-8 rounded-lg mt-4 bg-slate-800/50 border border-slate-700">
                <LoadingSpinner />
                <span className="ml-3 text-slate-400">AI is reviewing your code...</span>
            </div>
        );
    }
    if (!result) return null;

    const CorrectnessBadge = () => (
        result.is_correct ? (
            <div className="flex items-center gap-2 text-green-400">
                <CheckCircleIcon className="w-6 h-6" />
                <span className="font-bold text-lg">Correct</span>
            </div>
        ) : (
            <div className="flex items-center gap-2 text-yellow-400">
                <InfoIcon className="w-6 h-6" />
                <span className="font-bold text-lg">Needs Improvement</span>
            </div>
        )
    );

    return (
         <div className="mt-6">
            <h3 className="text-lg font-bold text-slate-200 mb-3 flex items-center">
                <SparklesIcon className="w-5 h-5 mr-2 text-purple-400" />
                Submit for Review
            </h3>
            <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-lg space-y-6">
                <div>
                   <CorrectnessBadge />
                </div>
                 <div>
                    <h4 className="font-bold text-slate-300 mb-2">Feedback:</h4>
                    <p className="text-slate-300 whitespace-pre-wrap">{result.feedback}</p>
                </div>
                <div>
                    <h4 className="font-bold text-slate-300 mb-2">Suggested Code:</h4>
                    <div className="bg-slate-900 p-4 rounded-md overflow-x-auto">
                        <pre className="font-mono text-sm text-slate-200"><code>{result.corrected_code}</code></pre>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ChallengeDetail: React.FC<ChallengeDetailProps> = ({ 
    challenge, 
    userCode, 
    onCodeChange, 
    onRun,
    onGetAIReview,
    isLoading,
    isAIReviewLoading,
    isRunnerReady,
    runnerStatusMessage,
    executionResult, 
    aiReviewResult,
    error 
}) => {
  const handleTab = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const { selectionStart, selectionEnd, value } = e.currentTarget;
      const newValue = value.substring(0, selectionStart) + '    ' + value.substring(selectionEnd);
      onCodeChange(newValue);

      // This timeout is needed to correctly set the cursor position after the state update
      setTimeout(() => {
        e.currentTarget.selectionStart = e.currentTarget.selectionEnd = selectionStart + 4;
      }, 0);
    }
  };

  return (
    <div className="p-6 md:p-8">
      <h2 className="text-3xl font-extrabold text-slate-100 mb-2">{challenge.title}</h2>
      <p className="text-slate-400 mb-6">{challenge.description}</p>
      
      <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-cyan-400 mb-3">Mission Briefing</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            {challenge.tasks.map((task, i) => <li key={i}>{task}</li>)}
        </ul>
        {challenge.bonus && (
             <div className="mt-4">
                <h4 className="font-bold text-yellow-400">🛡️ Bonus Tasks:</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                    {challenge.bonus.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
            </div>
        )}
        {challenge.exampleOutput && (
             <div className="mt-4">
                <h4 className="font-bold text-slate-300">Example Output:</h4>
                <pre className="bg-slate-900 p-3 rounded-md text-sm mt-1"><code>{challenge.exampleOutput}</code></pre>
            </div>
        )}
      </div>

      {challenge.breakdown && challenge.breakdown.length > 0 && (
        <div className="mt-6 bg-slate-800/50 border border-slate-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">Problem Breakdown</h3>
            <ul className="list-decimal list-inside space-y-2 text-slate-300">
                {challenge.breakdown.map((step, i) => <li key={i}>{step}</li>)}
            </ul>
        </div>
      )}

      {challenge.hints && challenge.hints.length > 0 && (
        <details className="mt-4">
            <summary className="inline-flex items-center gap-2 cursor-pointer text-sm text-yellow-400 hover:text-yellow-300">
                <LightbulbIcon className="w-5 h-5" />
                <span>Need a hint? ({challenge.hints.length} available)</span>
            </summary>
            <div className="mt-2 p-4 bg-slate-800 rounded-lg border border-slate-700 text-sm space-y-3">
                {challenge.hints.map((h, i) => (
                    <div key={i} className="border-l-4 border-yellow-500/50 pl-4">
                        <p className="font-semibold text-yellow-300">Hint {i+1}</p>
                        <p className="text-slate-300">{h}</p>
                    </div>
                ))}
            </div>
        </details>
      )}

      <div className="mt-8">
        <h3 className="text-xl font-bold text-slate-100 mb-3">Your Code</h3>
        <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 focus-within:ring-2 focus-within:ring-cyan-500">
          <textarea
            className="w-full h-64 bg-slate-800 text-slate-100 p-4 font-mono text-sm resize-y outline-none"
            value={userCode}
            onChange={(e) => onCodeChange(e.target.value)}
            onKeyDown={handleTab}
            placeholder="Enter your Python code here..."
            spellCheck="false"
            aria-label="Python code editor"
          />
        </div>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-4">
        <button
          onClick={onRun}
          disabled={isLoading || isAIReviewLoading || !isRunnerReady}
          className="flex items-center justify-center px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-500 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? <LoadingSpinner /> : 'Run Code'}
        </button>
        <button
          onClick={onGetAIReview}
          disabled={isLoading || isAIReviewLoading || !isRunnerReady}
          className="flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-500 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
        >
          {isAIReviewLoading ? <LoadingSpinner /> : <><SparklesIcon className="w-5 h-5 mr-2" /> Submit for Review</>}
        </button>
      </div>
       {!isRunnerReady && !error && (
            <p className="text-xs text-slate-500 mt-2">{runnerStatusMessage}</p>
        )}


      {error && (
          <div className="bg-red-900/50 border border-red-700 text-red-300 p-4 rounded-lg mt-4 flex items-center">
              <XCircleIcon className="w-6 h-6 mr-3 flex-shrink-0" />
              <div>
                  <h4 className="font-bold">Error</h4>
                  <p>{error}</p>
              </div>
          </div>
      )}
      
      <OutputPanel result={executionResult} />
      <AIReviewPanel result={aiReviewResult} isLoading={isAIReviewLoading} />

    </div>
  );
};

export default ChallengeDetail;