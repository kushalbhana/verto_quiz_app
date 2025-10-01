export interface Question {
  id: string;
  text: string;
  options: string[];
  order: number;
}

export interface QuestionWithAnswer extends Question {
  correctOptionIndex: number;
}

export interface Quiz {
  id: string;
  title: string;
  description?: string;
  duration: number;
  questions: Question[];
}

export interface QuizSubmission {
  answers: Record<string, number>;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  breakdown: QuestionResult[];
}

export interface QuestionResult {
  questionId: string;
  questionText: string;
  options: string[];
  userAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
}
