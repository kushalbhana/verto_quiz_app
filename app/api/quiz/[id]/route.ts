import { NextRequest, NextResponse } from 'next/server';
import { QuizRepository } from '@/lib/db/repositories/QuizRepository';
import { QuizService } from '@/lib/services/QuizService';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const repository = new QuizRepository();
    const service = new QuizService(repository);

    const quiz = await service.getQuiz(id);

    if (!quiz) {
      return NextResponse.json(
        { error: 'Quiz not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(quiz);
  } catch (error) {
    console.error('Error fetching quiz:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}