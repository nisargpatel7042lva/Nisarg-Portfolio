
import React from 'react';
import GitHubLayout from '@/components/layout/GitHubLayout';
import MemoryGame from '@/components/MemoryGame';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Sparkle, Gamepad } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Fun = () => {
  return (
    <GitHubLayout>
      <div className="space-y-8">
        <div className="bg-github-secondary border border-github-border rounded-md p-6 mb-8 animated-border">
          <h1 className="text-3xl font-bold mb-3 text-github-accent flex items-center gap-2">
            <Sparkle className="text-github-accent" />
            Fun & Games
          </h1>
          <p className="text-github-text mb-4">
            Take a break and have some fun with these interactive games and activities.
            Challenge yourself or just relax and enjoy!
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <HoverCard>
              <HoverCardTrigger>
                <span className="skill-tag">Memory Game</span>
              </HoverCardTrigger>
              <HoverCardContent className="bg-github-dark border-github-border w-80">
                <p className="text-sm">
                  Test and improve your memory by matching pairs of cards.
                  Try to complete the game in as few moves as possible!
                </p>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard>
              <HoverCardTrigger>
                <span className="skill-tag">Brain Training</span>
              </HoverCardTrigger>
              <HoverCardContent className="bg-github-dark border-github-border w-80">
                <p className="text-sm">
                  Memory games help improve concentration, train visual memory,
                  and provide a fun mental workout.
                </p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger>
                <span className="skill-tag">Quick Break</span>
              </HoverCardTrigger>
              <HoverCardContent className="bg-github-dark border-github-border w-80">
                <p className="text-sm">
                  Need a quick mental reset during your workday? 
                  Games like this provide the perfect short distraction.
                </p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        
        <Tabs defaultValue="memory" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="memory" className="flex items-center gap-2">
              <Sparkle size={16} />
              Memory Game
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex items-center gap-2">
              <Gamepad size={16} />
              How To Play
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="memory" className="space-y-6">
            <MemoryGame />
          </TabsContent>
          
          <TabsContent value="leaderboard" className="space-y-6">
            <div className="github-card p-6">
              <h3 className="text-xl font-semibold mb-3 text-github-accent">How To Play</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Click the Start Game button to begin</li>
                <li>Click on any card to flip it and reveal its symbol</li>
                <li>Try to find matching pairs of symbols</li>
                <li>If two cards match, they stay flipped</li>
                <li>If they don't match, they flip back over</li>
                <li>The game is complete when all pairs are matched</li>
                <li>Try to complete the game in as few moves as possible</li>
              </ul>
              <p className="mt-4 text-github-text italic">
                Tip: You can also access this via the terminal by typing "fun"
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </GitHubLayout>
  );
};

export default Fun;
