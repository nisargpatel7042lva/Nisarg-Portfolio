
import React from 'react';
import GitHubLayout from '@/components/layout/GitHubLayout';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Sparkle, Puzzle, MessageSquare } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import MemoryGame from '@/components/MemoryGame';
import CodeQuiz from '@/components/CodeQuiz';

const Fun = () => {
  const notifyComingSoon = () => {
    toast.info("Coming Soon!", {
      description: "This fun activity will be available in the next update!",
      icon: <Puzzle className="text-github-accent" />
    });
  };

  return (
    <GitHubLayout>
      <div className="space-y-8">
        <div className="bg-github-secondary border border-github-border rounded-md p-6 mb-8 animated-border">
          <h1 className="text-3xl font-bold mb-3 text-github-accent flex items-center gap-2">
            <Sparkle className="text-github-accent" />
            Fun Interactive Activities
          </h1>
          <p className="text-github-text mb-4">
            Take a break from the serious stuff and enjoy these fun interactive elements.
            More activities will be added regularly to keep things fresh and entertaining!
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <HoverCard>
              <HoverCardTrigger>
                <span className="skill-tag">Interactive</span>
              </HoverCardTrigger>
              <HoverCardContent className="bg-github-dark border-github-border w-80">
                <p className="text-sm">
                  Engage with various interactive elements designed to be both fun and educational.
                </p>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard>
              <HoverCardTrigger>
                <span className="skill-tag">Games</span>
              </HoverCardTrigger>
              <HoverCardContent className="bg-github-dark border-github-border w-80">
                <p className="text-sm">
                  Play simple browser games to take a break and have some fun.
                </p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger>
                <span className="skill-tag">Creative</span>
              </HoverCardTrigger>
              <HoverCardContent className="bg-github-dark border-github-border w-80">
                <p className="text-sm">
                  Express your creativity with various tools and activities.
                </p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        
        <Tabs defaultValue="games" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="games" className="flex items-center gap-2">
              <Puzzle size={16} />
              Games
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <Sparkle size={16} />
              Code Quiz
            </TabsTrigger>
            <TabsTrigger value="suggestions" className="flex items-center gap-2">
              <MessageSquare size={16} />
              Suggestions
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="games" className="space-y-8">
            {/* Memory Game Component */}
            <MemoryGame />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-github-secondary border-github-border hover:border-github-accent transition-colors">
                <h3 className="text-lg font-semibold mb-2 text-github-accent flex items-center gap-2">
                  <Puzzle className="text-github-accent" size={18} />
                  Puzzle Game
                </h3>
                <p className="text-github-text mb-4">
                  A fun puzzle game where you can arrange pieces to complete an image. Test your spatial thinking!
                </p>
                <Button onClick={notifyComingSoon} variant="default" className="bg-github-accent hover:bg-github-accent/80">
                  Coming Soon
                </Button>
              </Card>
              
              <Card className="p-6 bg-github-secondary border-github-border hover:border-github-accent transition-colors">
                <h3 className="text-lg font-semibold mb-2 text-github-accent flex items-center gap-2">
                  <Sparkle className="text-github-accent" size={18} />
                  Creative Canvas
                </h3>
                <p className="text-github-text mb-4">
                  Draw and create digital artwork with this simple but fun drawing canvas.
                </p>
                <Button onClick={notifyComingSoon} variant="default" className="bg-github-accent hover:bg-github-accent/80">
                  Coming Soon
                </Button>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="quiz" className="space-y-6">
            <CodeQuiz />
          </TabsContent>
          
          <TabsContent value="suggestions" className="space-y-6">
            <Card className="p-6 bg-github-secondary border-github-border">
              <h3 className="text-xl font-semibold mb-3 text-github-accent">Suggest an Activity</h3>
              <p className="mb-4 text-github-text">
                Have an idea for a fun interactive element that would be great for this page? 
                I'm always looking for creative new additions to make my portfolio more engaging.
              </p>
              <div className="bg-github-dark/20 border border-dashed border-github-border rounded-md p-4 mb-4">
                <p className="text-github-text mb-2">Some ideas you might suggest:</p>
                <ul className="list-disc pl-5 text-github-text">
                  <li>Small browser games</li>
                  <li>Interactive visualizations</li>
                  <li>Creative tools</li>
                  <li>Coding challenges</li>
                  <li>Educational activities</li>
                </ul>
              </div>
              <p className="text-github-text italic">
                Use the contact form to send your suggestions!
              </p>
              <Button 
                variant="default" 
                className="bg-github-accent hover:bg-github-accent/80 mt-4"
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                Go to Contact Page
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </GitHubLayout>
  );
};

export default Fun;
