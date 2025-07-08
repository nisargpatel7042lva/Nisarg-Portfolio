
import GitHubLayout from '@/components/layout/GitHubLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, BookOpen } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Solana's RWA Revolution: From Memecoin Playground to Wall Street's New Frontier",
      subtitle: "How the blockchain everyone dismissed as a 'casino' became institutional money's favorite settlement layer",
      date: "2025",
      readTime: "10 min read",
      imageUrl: "/lovable-uploads/e77cb161-f473-4b69-82c3-3a3180c3c38c.png",
      substackUrl: "https://nisargxplores.substack.com/publish/posts/detail/167367574",
      description: "Exploring how Solana has evolved from being perceived as a memecoin casino to becoming a serious infrastructure for real-world assets and institutional finance.",
      tags: ["Blockchain", "Solana", "RWA", "DeFi", "Institutional Finance"]
    },
    {
      id: 2,
      title: "The New Internet of Money",
      subtitle: "Solana's $12B Stablecoin Surge",
      date: "2025",
      readTime: "10 min read",
      imageUrl: "/lovable-uploads/a85fc74e-e25a-4878-a59d-f938219046aa.png",
      substackUrl: "https://nisargxplores.substack.com/publish/posts/detail/167083055",
      description: "Deep dive into Solana's massive stablecoin growth and what it means for the future of digital payments and the internet of money.",
      tags: ["Solana", "Stablecoins", "Payments", "Web3", "Financial Innovation"]
    }
  ];

  return (
    <GitHubLayout>
      <div className="space-y-12">
        <div>
          <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="text-github-accent" />
            Blog & Articles
          </h1>
          <p className="mb-8 text-github-text/90">
            My thoughts and insights on blockchain technology, Web3 innovations, and the future of decentralized finance.
          </p>
        </div>
        
        {/* Blog Posts Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-github-accent">Substack Articles</h2>
          <p className="text-github-text/80 mb-6">
            These articles are originally published on my{' '}
            <a 
              href="https://nisargxplores.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-github-accent hover:underline"
            >
              Substack newsletter
            </a>.
          </p>
          
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden bg-github-secondary border-github-border hover:border-github-accent transition-all duration-300 glass shadow-lg hover:shadow-xl hover:-translate-y-1">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="h-full w-full object-cover min-h-[200px]"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-github-text/70 mb-2">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <CardTitle className="text-github-accent text-xl mb-2">
                        {post.title}
                      </CardTitle>
                      <p className="text-github-text/80 font-medium">
                        {post.subtitle}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-github-text/90 leading-relaxed">
                        {post.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-2 py-1 bg-github-dark rounded-full text-xs border border-github-accent/30 text-github-accent"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(post.substackUrl, '_blank')}
                        className="flex items-center gap-2 border-github-accent text-github-accent hover:bg-github-accent hover:text-white"
                      >
                        <ExternalLink size={16} />
                        Read on Substack
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Newsletter CTA */}
        <div className="text-center py-8">
          <Card className="bg-github-secondary border-github-accent glass p-8">
            <h3 className="text-xl font-semibold mb-4 text-github-accent">
              Stay Updated
            </h3>
            <p className="mb-6 text-github-text/90">
              Subscribe to my Substack newsletter for the latest insights on blockchain, Web3, and emerging technologies.
            </p>
            <Button 
              className="bg-github-accent hover:bg-github-accent/80"
              onClick={() => window.open('https://nisargxplores.substack.com', '_blank')}
            >
              Subscribe to Newsletter
            </Button>
          </Card>
        </div>
      </div>
    </GitHubLayout>
  );
};

export default Blog;
