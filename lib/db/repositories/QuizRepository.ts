import { prisma } from '../prisma';
import { IQuizRepository } from './IQuizRepository';
import { Quiz, QuestionWithAnswer } from '@/types/quiz.types';

export class QuizRepository implements IQuizRepository {
  async findQuizById(id: string): Promise<Quiz | null> {
    const quiz = await prisma.quiz.findUnique({
      where: { id },
      include: {
        questions: {
          orderBy: { order: 'asc' },
          select: {
            id: true,
            text: true,
            options: true,
            order: true,
          },
        },
      },
    });

    if (!quiz) return null;

    return {
      id: quiz.id,
      title: quiz.title,
      description: quiz.description ?? undefined,
      duration: quiz.duration,
      questions: quiz.questions,
    };
  }

  async findQuestionsWithAnswers(quizId: string): Promise<QuestionWithAnswer[]> {
    const questions = await prisma.question.findMany({
      where: { quizId },
      orderBy: { order: 'asc' },
    });

    return questions.map((q: any) => ({
      id: q.id,
      text: q.text,
      options: q.options,
      order: q.order,
      correctOptionIndex: q.correctOptionIndex,
    }));
  }

  async createSubmission(
    quizId: string,
    answers: Record<string, number>,
    score: number,
    totalQuestions: number
  ): Promise<void> {
    await prisma.submission.create({
      data: {
        quizId,
        answers,
        score,
        totalQuestions,
      },
    });
  }
}