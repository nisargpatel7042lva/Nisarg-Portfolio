
import React from 'react';
import { cn } from '@/lib/utils';
import { Sparkle, Gamepad, Puzzle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

// Simple preview of fun games for the home page
const HomeMemoryGame = () => {
  return (
    <div className="github-card p-6 animated-border">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-github-accent flex items-center gap-2">
          <Gamepad size={20} className="text-github-accent" />
          Fun Interactive Games
        </h2>
      </div>
      
      <p className="mb-4 text-github-text">
        Take a break and enjoy some fun interactive elements on my portfolio.
        Explore different games and activities designed to entertain and engage.
      </p>
      
      <div className="flex flex-col items-center gap-4 py-4">
        {/* Simple visualization preview */}
        <div className="bg-github-dark/20 border border-dashed border-github-border rounded-md p-4 w-full max-w-xs mx-auto">
          <svg width="100%" height="120">
            {/* Simple puzzle pieces visualization */}
            <rect x="40" y="20" width="40" height="40" rx="5" fill="#2d333b" stroke="#2da44e" strokeWidth="2" />
            <rect x="90" y="20" width="40" height="40" rx="5" fill="#2d333b" stroke="#8250df" strokeWidth="2" />
            <rect x="140" y="20" width="40" height="40" rx="5" fill="#2d333b" stroke="#0969da" strokeWidth="2" />
            <rect x="40" y="70" width="40" height="40" rx="5" fill="#2d333b" stroke="#bf3989" strokeWidth="2" />
            <rect x="90" y="70" width="40" height="40" rx="5" fill="#2d333b" stroke="#d4a72c" strokeWidth="2" />
            <rect x="140" y="70" width="40" height="40" rx="5" fill="#2d333b" stroke="#cf222e" strokeWidth="2" />
            
            {/* Connect some pieces with lines */}
            <line x1="60" y1="60" x2="60" y2="70" stroke="#2da44e" strokeWidth="2" />
            <line x1="110" y1="60" x2="110" y2="70" stroke="#8250df" strokeWidth="2" />
            <line x1="160" y1="60" x2="160" y2="70" stroke="#0969da" strokeWidth="2" />
          </svg>
        </div>
        
        <Link to="/fun">
          <Button 
            variant="default" 
            className="bg-github-accent hover:bg-github-accent/80 mt-2"
          >
            <Puzzle size={16} className="mr-1" />
            Explore Fun Activities
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeMemoryGame;
