
import React from 'react';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import HomeTerminalCard from './HomeTerminalCard';

// Simple preview of fun games for the home page
const HomeMemoryGame = () => {
  return (
    <>
      <HomeTerminalCard />
      
      <div className="github-card p-6 animated-border bg-[#0D1117]">
        <div className="mb-4">
          <h2 className="text-xl font-mono text-github-accent flex items-center gap-2">
            Fun Interactive Games
          </h2>
        </div>
        
        <p className="mb-6 text-github-text">
          Take a break and enjoy some fun interactive elements on my portfolio.
          Explore different games and activities designed to entertain and engage.
        </p>
        
        <div className="flex flex-col items-center gap-4 py-4">
          {/* Memory game preview visualization */}
          <div className="border border-dashed border-github-border rounded-md p-6 w-full max-w-xs mx-auto">
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square rounded-md border-2 border-[#2ea043]"></div>
              <div className="aspect-square rounded-md border-2 border-[#8250df]"></div>
              <div className="aspect-square rounded-md border-2 border-[#0969da]"></div>
              <div className="aspect-square rounded-md border-2 border-[#bf3989]"></div>
              <div className="aspect-square rounded-md border-2 border-[#d4a72c]"></div>
              <div className="aspect-square rounded-md border-2 border-[#cf222e]"></div>
            </div>
          </div>
          
          <Link to="/fun" className="w-full max-w-xs">
            <Button 
              variant="default" 
              className="bg-github-accent hover:bg-github-accent/80 w-full"
            >
              Explore Fun Activities
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeMemoryGame;
