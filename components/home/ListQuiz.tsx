// app/components/ListQuiz.tsx
import { prisma } from '@/lib/db/prisma';
import { CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { ListChecks } from 'lucide-react';
import { Clock } from 'lucide-react';

export const revalidate = 3600; // ⏳ Revalidate cached data every 1 hour

export default async function ListQuiz() {

    // cached by default
    const quizzes = await prisma.quiz.findMany({
        orderBy: { createdAt: 'desc' },
    });

    const handleStartQuiz = (quiz: any) => {
        if (quiz) {
        // router.push(`/quiz/${quiz.id}`);
        }
    };

  return (
    <div className="h-96 w-full grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {quizzes.map((quiz, index) => (
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full" key={quiz.id}>
            <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-sidebar-foreground to-sidebar-foreground rounded-full mx-auto flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{quiz.title}</h1>
            {quiz.description && (
                <p className="text-gray-600">{quiz.description}</p>
            )}
            </div>

            <div className="bg-indigo-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-indigo-900 mb-3">Quiz Details:</h3>
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-indigo-700">
                <ListChecks className="w-5 h-5" />
                {/* @ts-ignore */}
                <span>{quiz?.questions?.length || 5} multiple choice questions</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-700">
                    {/* @ts-ignore */}
                <Clock className="w-5 h-5" />
                <span>{Math.floor(quiz.duration / 60)} minutes to complete</span>
                </div>
            </div>
            </div>

            <Button
            size="lg"
            //   onClick={(quiz) => handleStartQuiz(quiz)}
            className="w-full bg-sidebar-foreground hover:-translate-y-1 hover:cursor-pointer"
            >
            Start Quiz
            </Button>
        </div>
      ))}
    </div>
  );
}
