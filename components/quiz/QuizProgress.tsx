'use client';

import React from 'react';

interface QuizProgressProps {
  answeredCount: number;
  totalQuestions: number;
}

export const QuizProgress: React.FC<QuizProgressProps> = ({
  answeredCount,
  totalQuestions,
}) => {
  const percentage = (answeredCount / totalQuestions) * 100;

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>Progress</span>
        <span>
          {answeredCount} / {totalQuestions} answered
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};