'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, Clock, ListChecks } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Quiz } from '@/types/quiz.types';

export default function HomePage() {
  const router = useRouter();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    try {
      // Replace with actual quiz ID from your database
      const response = await fetch('/api/quiz/cmg897ujj00000pm107uls2hu');
      const data = await response.json();
      console.log(data)
      setQuiz(data);
    } catch (error) {
      console.error('Error fetching quiz:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStartQuiz = () => {
    if (quiz) {
      router.push(`/quiz/${quiz.id}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
        <div className="text-white text-xl">Quiz not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mx-auto flex items-center justify-center mb-4">
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
              <span>{quiz.questions.length} multiple choice questions</span>
            </div>
            <div className="flex items-center gap-2 text-indigo-700">
              <Clock className="w-5 h-5" />
              <span>{Math.floor(quiz.duration / 60)} minutes to complete</span>
            </div>
          </div>
        </div>

        <Button
          size="lg"
          onClick={handleStartQuiz}
          className="w-full"
        >
          Start Quiz
        </Button>
      </div>
    </div>
  );
}