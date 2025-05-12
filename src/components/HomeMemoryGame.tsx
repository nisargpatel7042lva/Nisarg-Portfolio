
import React from 'react';
import { cn } from '@/lib/utils';
import { Sparkle, GitBranch, GitCommitHorizontal } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

// Simple preview of the git commit game for the home page
const HomeMemoryGame = () => {
  return (
    <div className="github-card p-6 animated-border">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-github-accent flex items-center gap-2">
          <GitCommitHorizontal size={20} className="text-github-accent" />
          Git Commit Game
        </h2>
      </div>
      
      <p className="mb-4 text-github-text">
        Learn git workflows with this interactive visualization game. Create commits, 
        branch your code, and merge changes.
      </p>
      
      <div className="flex flex-col items-center gap-4 py-4">
        {/* Simple visualization preview */}
        <div className="bg-github-dark/20 border border-dashed border-github-border rounded-md p-4 w-full max-w-xs mx-auto">
          <svg width="100%" height="120">
            {/* Draw simple sample commits */}
            <line x1="40" y1="60" x2="100" y2="60" stroke="#2da44e" strokeWidth="2" />
            <line x1="100" y1="60" x2="160" y2="30" stroke="#8250df" strokeWidth="2" />
            <line x1="100" y1="60" x2="160" y2="90" stroke="#2da44e" strokeWidth="2" />
            <line x1="160" y1="30" x2="220" y2="30" stroke="#8250df" strokeWidth="2" />
            <line x1="160" y1="90" x2="220" y2="60" stroke="#2da44e" strokeWidth="2" />
            <line x1="220" y1="30" x2="220" y2="60" stroke="#0969da" strokeWidth="2" dashed="true" />
            
            {/* Sample commits */}
            <circle cx="40" cy="60" r="10" fill="#2d333b" stroke="#2da44e" strokeWidth="2" />
            <circle cx="100" cy="60" r="10" fill="#2d333b" stroke="#2da44e" strokeWidth="2" />
            <circle cx="160" cy="30" r="10" fill="#2d333b" stroke="#8250df" strokeWidth="2" />
            <circle cx="160" cy="90" r="10" fill="#2d333b" stroke="#2da44e" strokeWidth="2" />
            <circle cx="220" cy="30" r="10" fill="#2d333b" stroke="#8250df" strokeWidth="2" />
            <circle cx="220" cy="60" r="10" fill="#2d333b" stroke="#2da44e" strokeWidth="2" />
            
            {/* Branch labels */}
            <g transform="translate(40, 30)">
              <rect x="-30" y="-10" width="60" height="16" rx="8" fill="transparent" stroke="#2da44e" strokeWidth="2" />
              <text fill="#2da44e" fontSize="9" textAnchor="middle" dominantBaseline="middle">main</text>
            </g>
            <g transform="translate(160, 10)">
              <rect x="-30" y="-10" width="60" height="16" rx="8" fill="transparent" stroke="#8250df" strokeWidth="2" />
              <text fill="#8250df" fontSize="9" textAnchor="middle" dominantBaseline="middle">feature</text>
            </g>
          </svg>
        </div>
        
        <Link to="/fun">
          <Button 
            variant="default" 
            className="bg-github-accent hover:bg-github-accent/80 mt-2"
          >
            <GitBranch size={16} className="mr-1" />
            Play Git Game
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeMemoryGame;
