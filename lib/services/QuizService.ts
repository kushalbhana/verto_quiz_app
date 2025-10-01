import { IQuizService } from './IQuizService';
import { IQuizRepository } from '../db/repositories/IQuizRepository';
import { Quiz, QuizResult } from '@/types/quiz.types';

export class QuizService implements IQuizService {
  constructor(private repository: IQuizRepository) {}

  async getQuiz(id: string): Promise<Quiz | null> {
    return this.repository.findQuizById(id);
  }

  async submitQuiz(id: string, answers: Record<string, number>): Promise<QuizResult> {
    const questions = await this.repository.findQuestionsWithAnswers(id);

    if (questions.length === 0) {
      throw new Error('Quiz not found');
    }

    let score = 0;
    const breakdown = questions.map((question) => {
      const userAnswer = answers[question.id] ?? -1;
      const isCorrect = userAnswer === question.correctOptionIndex;

      if (isCorrect) score++;

      return {
        questionId: question.id,
        questionText: question.text,
        options: question.options,
        userAnswer,
        correctAnswer: question.correctOptionIndex,
        isCorrect,
      };
    });

    const totalQuestions = questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);

    // Save submission
    await this.repository.createSubmission(id, answers, score, totalQuestions);

    return {
      score,
      totalQuestions,
      percentage,
      breakdown,
    };
  }
}