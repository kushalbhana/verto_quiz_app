import { Quiz, QuestionWithAnswer } from "@/types/quiz.types";

export interface IQuizRepository {
  findQuizById(id: string): Promise<Quiz | null>;
  findQuestionsWithAnswers(quizId: string): Promise<QuestionWithAnswer[]>;
  createSubmission(
    quizId: string,
    answers: Record<string, number>,
    score: number,
    totalQuestions: number
  ): Promise<void>;
}