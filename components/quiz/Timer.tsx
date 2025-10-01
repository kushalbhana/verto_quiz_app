'use client';

import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  duration: number;
  onExpire: () => void;
}

export const Timer: React.FC<TimerProps> = ({ duration, onExpire }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onExpire();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onExpire]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isLowTime = timeLeft < 60;

  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
        isLowTime ? 'bg-red-100 text-red-700' : 'bg-indigo-100 text-indigo-700'
      }`}
    >
      <Clock className="w-5 h-5" />
      <span className="font-mono font-semibold text-lg">
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </span>
    </div>
  );
};