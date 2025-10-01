import { NextRequest, NextResponse } from 'next/server';
import { QuizRepository } from '@/lib/db/repositories/QuizRepository';
import { QuizService } from '@/lib/services/QuizService';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { answers } = body;

    if (!answers || typeof answers !== 'object') {
      return NextResponse.json(
        { error: 'Invalid answers format' },
        { status: 400 }
      );
    }

    const repository = new QuizRepository();
    const service = new QuizService(repository);

    const result = await service.submitQuiz(params.id, answers);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error submitting quiz:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}