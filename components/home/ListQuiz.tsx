// app/components/ListQuiz.tsx
import { prisma } from '@/lib/db/prisma';
import { RenderQuizCard } from './RenderList';

export const revalidate = 3600;

export default async function ListQuiz() {

    // cached by default
    const quizzes = await prisma.quiz.findMany({
        orderBy: { createdAt: 'desc' },
    });

  return (
    <div className="w-full ">
        <RenderQuizCard quizzes={quizzes}/>
    </div>
  );
}
