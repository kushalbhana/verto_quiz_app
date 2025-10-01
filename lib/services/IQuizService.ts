import { Quiz, QuizResult } from "@/types/quiz.types"

export interface IQuizService {
  getQuiz(id: string): Promise<Quiz | null>;
  submitQuiz(id: string, answers: Record<string, number>): Promise<QuizResult>;
}