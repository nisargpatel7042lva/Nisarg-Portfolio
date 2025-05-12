
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Sparkle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

// Simpler version of the memory game for the home page
const HomeMemoryGame = () => {
  const [isStarted, setIsStarted] = useState(false);
  
  return (
    <div className="github-card p-6 animated-border">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-github-accent flex items-center gap-2">
          <Sparkle size={20} className="text-github-accent" />
          Memory Match Challenge
        </h2>
      </div>
      
      <p className="mb-4 text-github-text">
        Test your memory with this fun card matching game. Find all pairs with the fewest moves possible!
      </p>
      
      {!isStarted ? (
        <div className="flex flex-col items-center gap-4 py-8">
          <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
            {Array(8).fill(0).map((_, index) => (
              <div 
                key={index}
                className="aspect-square bg-github-secondary hover:bg-github-border rounded-md flex items-center justify-center text-2xl transition-all" 
              >
                ?
              </div>
            ))}
          </div>
          <Link to="/fun">
            <Button 
              variant="default" 
              className="bg-github-accent hover:bg-github-accent/80 mt-4"
            >
              Play Full Game
            </Button>
          </Link>
        </div>
      ) : (
        // This would normally have game content, but we're just linking to the full game page
        <div className="flex justify-center my-4">
          <Link to="/fun">
            <Button variant="default" className="bg-github-accent hover:bg-github-accent/80">
              Play Full Game
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomeMemoryGame;
