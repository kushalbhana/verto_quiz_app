'use client';

import React from 'react';
import { Question } from '@/types/quiz.types';

interface QuestionCardProps {
  question: Question;
  selectedOption?: number;
  onSelect: (optionIndex: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOption,
  onSelect,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="mb-4">
        <span className="text-sm font-medium text-indigo-600">
          Question {questionNumber} of {totalQuestions}
        </span>
      </div>

      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
        {question.text}
      </h2>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              selectedOption === index
                ? 'border-indigo-600 bg-indigo-50 shadow-md'
                : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  selectedOption === index
                    ? 'border-indigo-600 bg-indigo-600'
                    : 'border-gray-300'
                }`}
              >
                {selectedOption === index && (
                  <div className="w-3 h-3 bg-white rounded-full" />
                )}
              </div>
              <span className="text-gray-700">{option}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};