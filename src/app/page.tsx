


'use client';

import { useState, useEffect } from 'react';

interface Quote {
  text: string;
  author: string;
}

export default function Home() {
  const quotes: Quote[] = [
    {
      text: "Love itself, the subversive gift, is an important public good, and loving is a significant political act.",
      author: "- Richard Iton",
    },
    {
      text: "...respect black noise—the shrieks, the moans, the nonsense, and the opacity, which are always in excess of legibility and of the law.",
      author: "- Saidiya Hartman",
    },
    {
      text: "I'm like Carrie Bradshaw with a back brace on.",
      author: "- Doechii",
    },
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [quotes.length]);

  return (
    <div className="quote-background">
      <div className="quote-container">
        <p className="quote">{quotes[currentQuoteIndex].text}</p>
        <p className="quote-author">{quotes[currentQuoteIndex].author}</p>
      </div>
    </div>
  );
}







