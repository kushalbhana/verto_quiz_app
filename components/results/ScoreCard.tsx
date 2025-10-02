'use client';

import React from 'react';
import { Trophy, Target } from 'lucide-react';

interface ScoreCardProps {
  score: number;
  totalQuestions: number;
  percentage: number;
}

export const ScoreCard: React.FC<ScoreCardProps> = ({
  score,
  totalQuestions,
  percentage,
}) => {
  const getGrade = () => {
    if (percentage >= 90) return { grade: 'A+', color: 'text-green-600', bg: 'bg-green-50' };
    if (percentage >= 80) return { grade: 'A', color: 'text-green-500', bg: 'bg-green-50' };
    if (percentage >= 70) return { grade: 'B', color: 'text-blue-500', bg: 'bg-blue-50' };
    if (percentage >= 60) return { grade: 'C', color: 'text-yellow-500', bg: 'bg-yellow-50' };
    return { grade: 'D', color: 'text-red-500', bg: 'bg-red-50' };
  };

  const { grade, color, bg } = getGrade();

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
      <div className={`w-24 h-24 ${bg} rounded-full mx-auto flex items-center justify-center mb-4`}>
        <Trophy className={`w-12 h-12 ${color}`} />
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
      
      <div className="my-6">
        <div className="text-6xl font-bold text-indigo-600 mb-2">
          {percentage}%
        </div>
        <div className="text-gray-600">
          {score} out of {totalQuestions} correct
        </div>
      </div>

      <div className={`inline-block px-6 py-3 ${bg} rounded-lg`}>
        <span className={`text-2xl font-bold ${color}`}>Grade: {grade}</span>
      </div>
    </div>
  );
};