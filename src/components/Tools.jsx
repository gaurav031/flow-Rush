'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const tools = [
  { src: '/Recognize.png' },
  { src: '/location.png' },
  { src: '/backendTool.png' },
  { src: '/DatabaseTool.png' },
  { src: '/DesignTool.png' },
  { src: '/AiTool.png' },
];

const Tools = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tools.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + tools.length) % tools.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tools.length);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {tools.map((tool, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={tool.src}
            alt=""
            fill
            className="object-contain"
            quality={100}
            priority={index === currentIndex || index === 0}
          />
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all"
        aria-label="Previous image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all"
        aria-label="Next image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Subtle navigation indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {tools.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white' : 'bg-white/30'
            }`}
            aria-label={`View tool ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Tools;