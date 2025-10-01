'use client';

import React from 'react';
import { ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuizNavigationProps {
  currentIndex: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  canSubmit: boolean;
}

export const QuizNavigation: React.FC<QuizNavigationProps> = ({
  currentIndex,
  totalQuestions,
  onPrevious,
  onNext,
  onSubmit,
  canSubmit,
}) => {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalQuestions - 1;

  return (
    <div className="flex justify-between items-center gap-4">
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={isFirst}
        className="flex items-center gap-2"
      >
        <ChevronLeft className="w-4 h-4" />
        Previous
      </Button>

      <div className="text-sm text-gray-600">
        {currentIndex + 1} / {totalQuestions}
      </div>

      {isLast ? (
        <Button
          onClick={onSubmit}
          disabled={!canSubmit}
          className="bg-primary flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          Submit Quiz
        </Button>
      ) : (
        <Button
          onClick={onNext}
          className="bg-primary flex items-center gap-2"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};