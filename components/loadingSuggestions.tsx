

import React, { useEffect, useState } from 'react';

interface LoadingSuggestionsProps {
  isLoading: boolean;
}

const LoadingSuggestions: React.FC<LoadingSuggestionsProps> = ({ isLoading }) => {
  const [randomQuote, setRandomQuote] = useState<string>('');

  // Fun static quote (you can change it or expand it)
  const quotes = [
    "Almost done, please be patient! ⏳😊",
    "Hang tight! Your activities are on their way! 🕒✨",
    "Patience is a virtue... especially with cool recommendations! 😎🔄",
    "Don't worry, good things take time... and cool suggestions! 😉👌",
    "Loading... the fun is about to begin! 🎉⚡"
  ];

  // Set random quote after component mounts (client-side only)
  useEffect(() => {
    if (isLoading) {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setRandomQuote(randomQuote);
    }
  }, [isLoading]);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {isLoading ? (
        <>
          <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full border-t-transparent border-primary" />
          <p className="text-xl font-semibold">{randomQuote}</p>
        </>
      ) : (
        <p className="text-xl font-semibold">All set! Ready to explore! 🚀</p>
      )}
    </div>
  );
};

export default LoadingSuggestions;
