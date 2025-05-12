
import React from 'react';
import GitHubLayout from '@/components/layout/GitHubLayout';
import InteractiveGrid from '@/components/InteractiveGrid';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Sparkle } from 'lucide-react';

const Fun = () => {
  return (
    <GitHubLayout>
      <div className="space-y-8">
        <div className="bg-github-secondary border border-github-border rounded-md p-6 mb-8">
          <h1 className="text-3xl font-bold mb-3 text-github-accent flex items-center gap-2">
            <Sparkle className="text-github-accent" />
            Fun Interactive Elements
          </h1>
          <p className="text-github-text mb-4">
            Welcome to the fun zone! I've created some interactive elements to showcase my creativity
            and make my portfolio more engaging. Feel free to play with them and get inspired for your own projects.
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <HoverCard>
              <HoverCardTrigger>
                <span className="skill-tag">Why Interactive Elements?</span>
              </HoverCardTrigger>
              <HoverCardContent className="bg-github-dark border-github-border w-80">
                <p className="text-sm">
                  Interactive elements make websites more engaging and memorable. They create a connection 
                  with visitors and showcase technical skills in a fun way!
                </p>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard>
              <HoverCardTrigger>
                <span className="skill-tag">Design Inspiration</span>
              </HoverCardTrigger>
              <HoverCardContent className="bg-github-dark border-github-border w-80">
                <p className="text-sm">
                  This interactive grid is inspired by GitHub's contribution graph, but with a playful twist
                  that allows visitors to create their own patterns.
                </p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        
        <InteractiveGrid />
        
        <div className="github-card p-6">
          <h3 className="text-xl font-semibold mb-3 text-github-accent">How to Use</h3>
          <ul className="space-y-2 list-disc pl-5">
            <li>Click on any square to cycle through intensity levels</li>
            <li>Try "Rainbow Mode" for colorful patterns</li>
            <li>Use "Random Pattern" for instant art</li>
            <li>Challenge yourself to create symmetrical designs</li>
          </ul>
          <p className="mt-4 text-github-text italic">
            Tip: You can also access this via the terminal by typing "fun"
          </p>
        </div>
      </div>
    </GitHubLayout>
  );
};

export default Fun;
