
import React from 'react';
import GitHubLayout from '@/components/layout/GitHubLayout';
import GitCommitGame from '@/components/GitCommitGame';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Sparkle, GitBranch, GitCommitHorizontal } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Fun = () => {
  return (
    <GitHubLayout>
      <div className="space-y-8">
        <div className="bg-github-secondary border border-github-border rounded-md p-6 mb-8 animated-border">
          <h1 className="text-3xl font-bold mb-3 text-github-accent flex items-center gap-2">
            <Sparkle className="text-github-accent" />
            Git Commit Game
          </h1>
          <p className="text-github-text mb-4">
            Experience the git workflow through an interactive visualization game. Create commits,
            branch your code, and merge changes to advance through the levels.
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <HoverCard>
              <HoverCardTrigger>
                <span className="skill-tag">Git Learning</span>
              </HoverCardTrigger>
              <HoverCardContent className="bg-github-dark border-github-border w-80">
                <p className="text-sm">
                  Learn git concepts like committing, branching, and merging through interactive play.
                </p>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard>
              <HoverCardTrigger>
                <span className="skill-tag">Visualization</span>
              </HoverCardTrigger>
              <HoverCardContent className="bg-github-dark border-github-border w-80">
                <p className="text-sm">
                  See how git workflows can be visualized and understand the underlying concepts better.
                </p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger>
                <span className="skill-tag">Dev Fun</span>
              </HoverCardTrigger>
              <HoverCardContent className="bg-github-dark border-github-border w-80">
                <p className="text-sm">
                  A fun way to practice git concepts for both beginners and experienced developers.
                </p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        
        <Tabs defaultValue="gameplay" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="gameplay" className="flex items-center gap-2">
              <GitCommitHorizontal size={16} />
              Git Game
            </TabsTrigger>
            <TabsTrigger value="instructions" className="flex items-center gap-2">
              <GitBranch size={16} />
              How To Play
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="gameplay" className="space-y-6">
            <GitCommitGame />
          </TabsContent>
          
          <TabsContent value="instructions" className="space-y-6">
            <div className="github-card p-6">
              <h3 className="text-xl font-semibold mb-3 text-github-accent">How To Play</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Start by creating commits on the main branch by clicking "Commit"</li>
                <li>Use "Create Branch" to make a new feature branch from any commit</li>
                <li>Add commits to different branches to see how they diverge</li>
                <li>Use "Merge" to combine changes from one branch to another</li>
                <li>Complete challenges by creating specific git structures</li>
                <li>Learn about git workflow as you play!</li>
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
