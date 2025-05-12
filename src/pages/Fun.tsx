
import React, { useState } from 'react';
import GitHubLayout from '@/components/layout/GitHubLayout';
import InteractiveGrid from '@/components/InteractiveGrid';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Sparkle, Download, Share2, PenTool, Layout } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Fun = () => {
  const [activeGrid, setActiveGrid] = useState<HTMLCanvasElement | null>(null);

  const handleGridReference = (canvas: HTMLCanvasElement | null) => {
    setActiveGrid(canvas);
  };

  const downloadPattern = () => {
    if (!activeGrid) {
      toast.error("Create a pattern first!");
      return;
    }
    
    try {
      const link = document.createElement('a');
      link.download = 'my-contribution-pattern.png';
      link.href = activeGrid.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success("Pattern downloaded successfully!", {
        description: "You can use this as a design resource.",
        icon: <Download className="text-github-accent" />
      });
    } catch (error) {
      toast.error("Could not download pattern. Try again later.");
      console.error("Download error:", error);
    }
  };

  const copyPattern = () => {
    if (!activeGrid) {
      toast.error("Create a pattern first!");
      return;
    }
    
    // Convert canvas to Blob
    activeGrid.toBlob((blob) => {
      if (!blob) {
        toast.error("Could not prepare image for sharing");
        return;
      }
      
      try {
        // Use clipboard API if available
        if (navigator.clipboard && navigator.clipboard.write) {
          const item = new ClipboardItem({
            [blob.type]: blob
          });
          navigator.clipboard.write([item]).then(() => {
            toast.success("Pattern copied to clipboard!", {
              description: "Paste it into your design tool or document.",
              icon: <Share2 className="text-github-accent" />
            });
          }).catch(err => {
            toast.error("Could not copy pattern to clipboard. Try download instead.");
            console.error("Clipboard error:", err);
          });
        } else {
          toast("Clipboard access not available", {
            description: "Try using the download button instead."
          });
        }
      } catch (error) {
        toast.error("Could not copy pattern. Try download instead.");
        console.error("Copy error:", error);
      }
    });
  };

  return (
    <GitHubLayout>
      <div className="space-y-8">
        <div className="bg-github-secondary border border-github-border rounded-md p-6 mb-8 animated-border">
          <h1 className="text-3xl font-bold mb-3 text-github-accent flex items-center gap-2">
            <Sparkle className="text-github-accent" />
            Fun & Useful Design Tools
          </h1>
          <p className="text-github-text mb-4">
            These interactive tools let you create custom patterns and graphics that you can download and use in your own projects.
            Perfect for backgrounds, icons, or design inspiration!
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <HoverCard>
              <HoverCardTrigger>
                <span className="skill-tag">Design Resources</span>
              </HoverCardTrigger>
              <HoverCardContent className="bg-github-dark border-github-border w-80">
                <p className="text-sm">
                  Create and export custom patterns for your website backgrounds, presentations, 
                  social media graphics, or any design project.
                </p>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard>
              <HoverCardTrigger>
                <span className="skill-tag">Creative Inspiration</span>
              </HoverCardTrigger>
              <HoverCardContent className="bg-github-dark border-github-border w-80">
                <p className="text-sm">
                  Experiment with different patterns to spark creative ideas for your next project.
                  Download or copy your favorite designs for later use.
                </p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger>
                <span className="skill-tag">Design Tips</span>
              </HoverCardTrigger>
              <HoverCardContent className="bg-github-dark border-github-border w-80">
                <p className="text-sm">
                  Creating symmetrical patterns can help establish balance in your designs.
                  Try alternating colors for visual interest.
                </p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        
        <Tabs defaultValue="grid" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="grid" className="flex items-center gap-2">
              <Layout size={16} />
              Contribution Grid
            </TabsTrigger>
            <TabsTrigger value="patterns" className="flex items-center gap-2">
              <PenTool size={16} />
              Pattern Examples
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="grid" className="space-y-6">
            <InteractiveGrid onCanvasRef={handleGridReference} />
            
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <Button 
                variant="default" 
                className="bg-github-accent hover:bg-github-accent/80 flex items-center gap-2"
                onClick={downloadPattern}
              >
                <Download size={16} />
                Download Pattern
              </Button>
              <Button 
                variant="outline" 
                className="border-github-accent text-github-accent hover:bg-github-accent hover:text-white flex items-center gap-2"
                onClick={copyPattern}
              >
                <Share2 size={16} />
                Copy Pattern
              </Button>
            </div>
            
            <div className="github-card p-6">
              <h3 className="text-xl font-semibold mb-3 text-github-accent">How to Use</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Click on any square to cycle through intensity levels</li>
                <li>Try "Rainbow Mode" for colorful patterns</li>
                <li>Use "Random Pattern" for instant art</li>
                <li>Challenge yourself to create symmetrical designs</li>
                <li>Download or copy your pattern to use in your projects</li>
              </ul>
              <p className="mt-4 text-github-text italic">
                Tip: You can also access this via the terminal by typing "fun"
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="patterns" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="github-card p-4">
                  <div className="aspect-square bg-github-dark rounded-md flex items-center justify-center mb-3 border border-github-border">
                    <div className="text-github-accent text-lg">Pattern Example {item}</div>
                    {/* Pattern examples will render here */}
                  </div>
                  <p className="text-sm text-github-text">
                    Example pattern that you can create and download. 
                    Use it for website backgrounds, presentations, or social media graphics.
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </GitHubLayout>
  );
};

export default Fun;
