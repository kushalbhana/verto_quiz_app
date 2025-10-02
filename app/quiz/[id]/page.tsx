'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { QuizProvider, useQuizContext } from '@/context/QuizContext';
import { QuestionCard } from '@/components/quiz/QuestionCard';
import { Timer } from '@/components/quiz/Timer';
import { QuizNavigation } from '@/components/quiz/QuizNavigation';
import { QuizProgress } from '@/components/quiz/QuizProgress';
import { Quiz } from '@/types/quiz.types';

interface QuizPageProps {
  params: Promise<{ id: string }>;
}

function QuizPageContent({ quizId }: { quizId: string }) {
  const router = useRouter();

  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const {
    answers,
    setAnswer,
    currentQuestionIndex,
    setCurrentQuestionIndex,
  } = useQuizContext();

  useEffect(() => {
    fetchQuiz();
  }, [quizId]);

  const fetchQuiz = async () => {
    try {
      const response = await fetch(`/api/quiz/${quizId}`);
      if (!response.ok) throw new Error('Failed to fetch quiz');
      const data = await response.json();
      setQuiz(data);
    } catch (error) {
      console.error('Error fetching quiz:', error);
      router.push('/');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!quiz) return;

    // Check if all questions are answered
    if (answers.size !== quiz.questions.length) {
      const confirmed = confirm(
        `You have only answered ${answers.size} out of ${quiz.questions.length} questions. Submit anyway?`
      );
      if (!confirmed) return;
    }

    setSubmitting(true);

    try {
      const answersObject = Object.fromEntries(answers);
      const response = await fetch(`/api/quiz/${quizId}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: answersObject }),
      });

      if (!response.ok) throw new Error('Failed to submit quiz');

      const result = await response.json();
      
      // Store result in sessionStorage to pass to results page
      sessionStorage.setItem('quizResult', JSON.stringify(result));
      
      router.push(`/quiz/${quizId}/results`);
    } catch (error) {
      console.error('Error submitting quiz:', error);
      alert('Failed to submit quiz. Please try again.');
      setSubmitting(false);
    }
  };

  const handleTimeExpire = () => {
    alert('Time is up! Submitting your answers...');
    handleSubmit();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading quiz...</div>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Quiz not found</div>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{quiz.title}</h1>
            <p className="text-sm text-gray-600">
              Question {currentQuestionIndex + 1} of {quiz.questions.length}
            </p>
          </div>
          <Timer duration={quiz.duration} onExpire={handleTimeExpire} />
        </div>

        {/* Progress */}
        <div className="mb-6">
          <QuizProgress
            answeredCount={answers.size}
            totalQuestions={quiz.questions.length}
          />
        </div>

        {/* Question */}
        <div className="mb-6">
          <QuestionCard
            question={currentQuestion}
            selectedOption={answers.get(currentQuestion.id)}
            onSelect={(optionIndex) => setAnswer(currentQuestion.id, optionIndex)}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={quiz.questions.length}
          />
        </div>

        {/* Navigation */}
        <QuizNavigation
          currentIndex={currentQuestionIndex}
          totalQuestions={quiz.questions.length}
          onPrevious={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
          onNext={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
          onSubmit={handleSubmit}
          canSubmit={!submitting}
        />
      </div>
    </div>
  );
}

export default function QuizPage({ params }: QuizPageProps) {
  const [quizId, setQuizId] = useState<string | null>(null);

  useEffect(() => {
    params.then(({ id }) => setQuizId(id));
  }, [params]);

  if (!quizId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <QuizProvider>
      <QuizPageContent quizId={quizId} />
    </QuizProvider>
  );
}