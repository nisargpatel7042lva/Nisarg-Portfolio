
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Twitter, MessageCircle, Heart, Repeat2, Settings, Key } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface Tweet {
  id: string;
  text: string;
  created_at: string;
  public_metrics: {
    like_count: number;
    retweet_count: number;
    reply_count: number;
  };
  author_id: string;
}

const TwitterThreads = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [bearerToken, setBearerToken] = useState(localStorage.getItem('twitter_bearer_token') || '');
  const [username, setUsername] = useState(localStorage.getItem('twitter_username') || 'NisargPatel5563');
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  // Sample tweets as fallback
  const sampleTweets = [
    {
      id: "1",
      text: "🧵 THREAD: Solana's RWA revolution is just getting started. Here's why institutions are choosing Solana over Ethereum for real-world assets...",
      created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      public_metrics: { like_count: 45, retweet_count: 12, reply_count: 8 },
      author_id: "user123"
    },
    {
      id: "2", 
      text: "The stablecoin surge on Solana has reached $12B+ and shows no signs of slowing down. This is what the new internet of money looks like 💰",
      created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      public_metrics: { like_count: 67, retweet_count: 23, reply_count: 15 },
      author_id: "user123"
    },
    {
      id: "3",
      text: "🚀 Web3 is evolving beyond DeFi summer. The next wave? Real-world utility and mainstream adoption. Here are the key trends I'm watching...",
      created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      public_metrics: { like_count: 89, retweet_count: 34, reply_count: 22 },
      author_id: "user123"
    }
  ];

  const fetchTweets = async () => {
    if (!bearerToken) {
      setTweets(sampleTweets);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // First get user ID from username
      const userResponse = await fetch(`https://api.twitter.com/2/users/by/username/${username}`, {
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
        },
      });

      if (!userResponse.ok) {
        throw new Error('Failed to fetch user data. Please check your credentials.');
      }

      const userData = await userResponse.json();
      const userId = userData.data.id;

      // Then get user's tweets
      const tweetsResponse = await fetch(
        `https://api.twitter.com/2/users/${userId}/tweets?max_results=10&tweet.fields=created_at,public_metrics&expansions=author_id`,
        {
          headers: {
            'Authorization': `Bearer ${bearerToken}`,
          },
        }
      );

      if (!tweetsResponse.ok) {
        throw new Error('Failed to fetch tweets. Please check your API access.');
      }

      const tweetsData = await tweetsResponse.json();
      setTweets(tweetsData.data || sampleTweets);
    } catch (err) {
      console.error('Error fetching tweets:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch tweets');
      setTweets(sampleTweets); // Fallback to sample data
    } finally {
      setLoading(false);
    }
  };

  const saveConfig = () => {
    localStorage.setItem('twitter_bearer_token', bearerToken);
    localStorage.setItem('twitter_username', username);
    setIsConfigOpen(false);
    fetchTweets();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 14) return '1 week ago';
    return `${Math.ceil(diffDays / 7)} weeks ago`;
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-github-accent flex items-center gap-2">
          <Twitter className="h-5 w-5" />
          Recent Threads
        </h2>
        <div className="flex gap-2">
          <Dialog open={isConfigOpen} onOpenChange={setIsConfigOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="border-github-accent text-github-accent hover:bg-github-accent hover:text-white">
                <Settings size={16} className="mr-2" />
                API Config
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-github-secondary border-github-border">
              <DialogHeader>
                <DialogTitle className="text-github-accent">Twitter API Configuration</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-github-text mb-2 block">Twitter Username</label>
                  <Input
                    placeholder="NisargPatel5563"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-github-dark border-github-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-github-text mb-2 block">Bearer Token</label>
                  <Input
                    type="password"
                    placeholder="Your Twitter API Bearer Token"
                    value={bearerToken}
                    onChange={(e) => setBearerToken(e.target.value)}
                    className="bg-github-dark border-github-border"
                  />
                  <p className="text-xs text-github-text/70 mt-1">
                    Get your Bearer Token from the Twitter Developer Portal
                  </p>
                </div>
                <Button onClick={saveConfig} className="w-full bg-github-accent hover:bg-github-accent/80">
                  Save Configuration
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          
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
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <p className="text-red-400 text-sm">{error}</p>
          <p className="text-github-text/70 text-xs mt-1">Showing sample data instead.</p>
        </div>
      )}

      {!bearerToken && (
        <div className="bg-github-accent/10 border border-github-accent/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Key size={16} className="text-github-accent" />
            <p className="text-github-accent font-medium">Twitter API Setup Required</p>
          </div>
          <p className="text-github-text/80 text-sm">
            To display real-time tweets, configure your Twitter API credentials. Currently showing sample data.
          </p>
        </div>
      )}
      
      <div className="space-y-4">
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-github-accent mx-auto"></div>
            <p className="text-github-text/70 mt-2">Loading tweets...</p>
          </div>
        ) : (
          tweets.map((tweet) => (
            <Card key={tweet.id} className="bg-github-secondary border-github-border hover:border-github-accent transition-all duration-300 glass">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Twitter className="h-4 w-4 text-github-accent" />
                    <span className="text-sm text-github-text/70">@{username}</span>
                  </div>
                  <span className="text-xs text-github-text/60">{formatDate(tweet.created_at)}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-github-text/90 mb-4 leading-relaxed">
                  {tweet.text}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-github-text/60">
                    <div className="flex items-center gap-1">
                      <MessageCircle size={16} />
                      <span>{tweet.public_metrics.reply_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Repeat2 size={16} />
                      <span>{tweet.public_metrics.retweet_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart size={16} />
                      <span>{tweet.public_metrics.like_count}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => window.open(`https://x.com/${username}/status/${tweet.id}`, '_blank')}
                    className="text-github-accent hover:bg-github-accent/10"
                  >
                    View Tweet
                    <ExternalLink size={14} className="ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
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
