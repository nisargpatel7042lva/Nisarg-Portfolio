
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Twitter, MessageCircle, Heart, Repeat2 } from 'lucide-react';

const TwitterThreads = () => {
  // Sample tweets/threads data - in a real app, you'd fetch this from Twitter API
  const tweets = [
    {
      id: 1,
      content: "🧵 THREAD: Solana's RWA revolution is just getting started. Here's why institutions are choosing Solana over Ethereum for real-world assets...",
      timestamp: "2 days ago",
      likes: 45,
      retweets: 12,
      replies: 8,
      url: "https://x.com/NisargPatel5563/status/example1"
    },
    {
      id: 2,
      content: "The stablecoin surge on Solana has reached $12B+ and shows no signs of slowing down. This is what the new internet of money looks like 💰",
      timestamp: "5 days ago",
      likes: 67,
      retweets: 23,
      replies: 15,
      url: "https://x.com/NisargPatel5563/status/example2"
    },
    {
      id: 3,
      content: "🚀 Web3 is evolving beyond DeFi summer. The next wave? Real-world utility and mainstream adoption. Here are the key trends I'm watching...",
      timestamp: "1 week ago",
      likes: 89,
      retweets: 34,
      replies: 22,
      url: "https://x.com/NisargPatel5563/status/example3"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-github-accent flex items-center gap-2">
          <Twitter className="h-5 w-5" />
          Recent Threads
        </h2>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => window.open('https://x.com/NisargPatel5563', '_blank')}
          className="border-github-accent text-github-accent hover:bg-github-accent hover:text-white"
        >
          <ExternalLink size={16} className="mr-2" />
          Follow on X
        </Button>
      </div>
      
      <div className="space-y-4">
        {tweets.map((tweet) => (
          <Card key={tweet.id} className="bg-github-secondary border-github-border hover:border-github-accent transition-all duration-300 glass">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Twitter className="h-4 w-4 text-github-accent" />
                  <span className="text-sm text-github-text/70">@NisargPatel5563</span>
                </div>
                <span className="text-xs text-github-text/60">{tweet.timestamp}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-github-text/90 mb-4 leading-relaxed">
                {tweet.content}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-github-text/60">
                  <div className="flex items-center gap-1">
                    <MessageCircle size={16} />
                    <span>{tweet.replies}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Repeat2 size={16} />
                    <span>{tweet.retweets}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart size={16} />
                    <span>{tweet.likes}</span>
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => window.open(tweet.url, '_blank')}
                  className="text-github-accent hover:bg-github-accent/10"
                >
                  View Thread
                  <ExternalLink size={14} className="ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center">
        <Button 
          onClick={() => window.open('https://x.com/NisargPatel5563', '_blank')}
          className="bg-github-accent hover:bg-github-accent/80"
        >
          View All Threads on X
        </Button>
      </div>
    </div>
  );
};

export default TwitterThreads;
