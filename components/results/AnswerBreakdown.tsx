'use client';

import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { QuestionResult } from '@/types/quiz.types';

interface AnswerBreakdownProps {
  breakdown: QuestionResult[];
}

export const AnswerBreakdown: React.FC<AnswerBreakdownProps> = ({ breakdown }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Answer Review</h3>

      <div className="space-y-6">
        {breakdown.map((result, index) => (
          <div
            key={result.questionId}
            className={`p-4 rounded-lg border-2 ${
              result.isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
            }`}
          >
            <div className="flex items-start gap-3 mb-3">
              {result.isCorrect ? (
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              ) : (
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              )}
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Question {index + 1}: {result.questionText}
                </h4>
              </div>
            </div>

            <div className="ml-9 space-y-2">
              {result.options.map((option, optionIndex) => {
                const isUserAnswer = optionIndex === result.userAnswer;
                const isCorrectAnswer = optionIndex === result.correctAnswer;

                return (
                  <div
                    key={optionIndex}
                    className={`p-2 rounded ${
                      isCorrectAnswer
                        ? 'bg-green-100 font-semibold'
                        : isUserAnswer
                        ? 'bg-red-100'
                        : ''
                    }`}
                  >
                    {option}
                    {isCorrectAnswer && (
                      <span className="ml-2 text-green-600 text-sm">(Correct Answer)</span>
                    )}
                    {isUserAnswer && !isCorrectAnswer && (
                      <span className="ml-2 text-red-600 text-sm">(Your Answer)</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};