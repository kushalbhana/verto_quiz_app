'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ScoreCard } from '@/components/results/ScoreCard';
import { AnswerBreakdown } from '@/components/results/AnswerBreakdown';
import { Button } from '@/components/ui/button';
import { Home, RotateCcw } from 'lucide-react';
import { QuizResult } from '@/types/quiz.types';

export default function ResultsPage() {
  const router = useRouter();
  const params = useParams();
  const quizId = params.id as string;

  const [result, setResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    // Get result from sessionStorage
    const storedResult = sessionStorage.getItem('quizResult');
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    } else {
      // If no result found, redirect back to quiz
      router.push(`/quiz/${quizId}`);
    }
  }, [quizId, router]);

  const handleRetakeQuiz = () => {
    sessionStorage.removeItem('quizResult');
    router.push(`/quiz/${quizId}`);
  };

  const handleGoHome = () => {
    sessionStorage.removeItem('quizResult');
    router.push('/');
  };

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading results...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto py-8">
        {/* Score Card */}
        <div className="mb-6">
          <ScoreCard
            score={result.score}
            totalQuestions={result.totalQuestions}
            percentage={result.percentage}
          />
        </div>

        {/* Answer Breakdown */}
        <div className="mb-6">
          <AnswerBreakdown breakdown={result.breakdown} />
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={handleRetakeQuiz}
            className="flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Retake Quiz
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleGoHome}
            className="flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}