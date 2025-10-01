'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface QuizContextType {
  answers: Map<string, number>;
  setAnswer: (questionId: string, optionIndex: number) => void;
  clearAnswers: () => void;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [answers, setAnswers] = useState<Map<string, number>>(new Map());
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const setAnswer = (questionId: string, optionIndex: number) => {
    setAnswers((prev) => new Map(prev).set(questionId, optionIndex));
  };

  const clearAnswers = () => {
    setAnswers(new Map());
    setCurrentQuestionIndex(0);
  };

  return (
    <QuizContext.Provider
      value={{
        answers,
        setAnswer,
        clearAnswers,
        currentQuestionIndex,
        setCurrentQuestionIndex,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuizContext must be used within QuizProvider');
  }
  return context;
};