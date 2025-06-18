
import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const LoadingScreen: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>('');
  const [currentPhase, setCurrentPhase] = useState<'loading' | 'motivation'>('loading');
  const [motivationIndex, setMotivationIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  
  const motivationalThoughts = [
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Innovation distinguishes between a leader and a follower.",
    "Your limitation—it's only your imagination.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn't just find you. You have to go out and get it.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Don't stop when you're tired. Stop when you're done.",
    "Wake up with determination. Go to bed with satisfaction."
  ];
  
  useEffect(() => {
    const typingSpeed = currentPhase === 'loading' ? 150 : 50;
    const pauseBetweenThoughts = 2000;
    
    const timeout = setTimeout(() => {
      if (currentPhase === 'loading') {
        const loadingText = 'Loading...';
        if (displayText.length < loadingText.length) {
          setDisplayText(loadingText.substring(0, displayText.length + 1));
        } else {
          // Finished typing "Loading...", move to motivational thoughts
          setTimeout(() => {
            setCurrentPhase('motivation');
            setDisplayText('');
          }, 1000);
        }
      } else {
        // Motivation phase
        const currentThought = motivationalThoughts[motivationIndex];
        if (isTyping) {
          if (displayText.length < currentThought.length) {
            setDisplayText(currentThought.substring(0, displayText.length + 1));
          } else {
            // Finished typing current thought, pause then move to next
            setTimeout(() => {
              setIsTyping(false);
            }, pauseBetweenThoughts);
          }
        } else {
          // Clear text and move to next thought
          if (displayText.length > 0) {
            setDisplayText(displayText.substring(0, displayText.length - 1));
          } else {
            setMotivationIndex((motivationIndex + 1) % motivationalThoughts.length);
            setIsTyping(true);
          }
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentPhase, motivationIndex, isTyping, motivationalThoughts]);

  return (
    <div className="fixed inset-0 bg-github-dark z-50 flex flex-col items-center justify-center">
      {/* Loader Animation */}
      <div className="mb-8">
        <Loader />
      </div>
      
      {/* Loading Text with Cursor */}
      <div className="text-center max-w-2xl px-4">
        <div className="text-xl md:text-2xl text-github-text font-mono mb-4">
          {currentPhase === 'loading' ? (
            <span className="text-github-accent">{displayText}<span className="cursor"></span></span>
          ) : (
            <span className="text-github-text">{displayText}<span className="cursor"></span></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
