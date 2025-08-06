export interface Challenge {
  id: string;
  title: string;
  type: 'challenge' | 'project';
  description: string;
  tasks: string[];
  bonus?: string[];
  breakdown?: string[];
  hints?: string[];
  starterCode?: string;
  exampleOutput?: string;
}

export interface Week {
  week: number;
  title: string;
  description: string;
  challenges: Challenge[];
}

export interface ExecutionResult {
  output: string;
  error: string | null;
}

export interface AIReviewResult {
  is_correct: boolean;
  feedback: string;
  corrected_code: string;
}

export type OnUserInput = (prompt: string) => Promise<string>;