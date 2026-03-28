import GitHubLayout from '@/components/layout/GitHubLayout';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, BookOpen } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import GlassCard from '@/components/GlassCard';
import { motion } from 'framer-motion';

const Blog = () => {
  const blogPosts = [
    {
      id: 5,
      title: "Unlocking Web3 Payments: How PayRam's Crypto Onramp and MCP Payments Bring Blockchain to Everyone",
      subtitle: "From card payments to stablecoins and AI agents that can transact on their own, PayRam is building the rails for the next era of Web3 commerce",
      date: "2025",
      readTime: "10 min read",
      imageUrl: "/lovable-uploads/payrams-blog.webp",
      substackUrl: "https://nisargxplores.substack.com/p/unlocking-web3-payments-how-payrams",
      description: "Exploring how PayRam is solving the crypto payment problem with fiat onramps, stablecoin settlements, and AI-powered MCP payments that bring blockchain commerce to everyone.",
      tags: ["Web3", "Payments", "Crypto", "Stablecoins", "AI", "PayRam"]
    },
    {
      id: 1,
      title: "From Overwhelmed to On-Chain: How Solana Became the Ultimate Developer Playground",
      subtitle: "A comprehensive guide to the best tools that make Solana development accessible and enjoyable",
      date: "2025",
      readTime: "12 min read",
      imageUrl: "/lovable-uploads/40184645-4361-4e55-a44f-953a3b1573e1.png",
      substackUrl: "https://nisargxplores.substack.com/p/from-overwhelmed-to-on-chain-how",
      description: "Discover the essential tools and resources that transform the complex world of Solana development into an accessible and exciting journey for developers of all levels.",
      tags: ["Solana", "Development", "Tools", "Web3", "Programming", "Blockchain"]
    },
    {
      id: 2,
      title: "The Day I Realized My Phone Was Smarter Than My Computer",
      subtitle: "How Solana Seeker is redefining what a smartphone can be in the Web3 era",
      date: "2025",
      readTime: "8 min read",
      imageUrl: "/lovable-uploads/b309292a-72f5-4551-8304-6a4f9f5b79f9.png",
      substackUrl: "https://nisargxplores.substack.com/p/the-day-i-realized-my-phone-was-smarter",
      description: "Exploring the revolutionary Solana Seeker phone and how it's transforming the mobile Web3 experience with built-in crypto capabilities.",
      tags: ["Solana", "Mobile", "Web3", "Cryptocurrency", "Hardware", "Innovation"]
    },
    {
      id: 3,
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
      id: 4,
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
        <ScrollReveal>
          <div>
            <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="text-github-accent" />
              Blog & Articles
            </h1>
            <p className="mb-8 text-github-text/80">
              My thoughts and insights on blockchain technology, Web3 innovations, and the future of decentralized finance.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="space-y-6">
          <ScrollReveal>
            <h2 className="text-xl font-semibold text-github-accent">Substack Articles</h2>
            <p className="text-github-text/80 mb-6">
              These articles are originally published on my{' '}
              <a href="https://nisargxplores.substack.com" target="_blank" rel="noopener noreferrer" className="text-github-accent hover:underline">
                Substack newsletter
              </a>.
            </p>
          </ScrollReveal>
          
          <div className="relative">
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-github-accent via-github-accent/50 to-transparent"></div>
            
            <div className="space-y-8 sm:space-y-12">
              {blogPosts.map((post, index) => (
                <ScrollReveal key={post.id} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
                  <div className="relative">
                    <motion.div 
                      className="absolute left-2 sm:left-6 top-6 sm:top-8 w-3 h-3 sm:w-4 sm:h-4 bg-github-accent rounded-full border-2 sm:border-4 border-github-dark shadow-lg z-10"
                      whileInView={{ scale: [0.5, 1.3, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    />
                    
                    <div className="ml-10 sm:ml-16">
                      <GlassCard className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="w-full md:w-2/5 flex-shrink-0 overflow-hidden">
                            <motion.img 
                              src={post.imageUrl} 
                              alt={post.title} 
                              className="w-full h-48 sm:h-56 md:h-full object-contain md:object-cover bg-github-dark/50"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.4 }}
                            />
                          </div>
                          <div className="w-full md:w-3/5">
                            <CardHeader className="p-4 sm:p-6">
                              <div className="flex items-center gap-2 text-xs sm:text-sm text-github-text/70 mb-1 sm:mb-2">
                                <Calendar size={12} />
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                              </div>
                              <CardTitle className="text-github-accent text-base sm:text-lg md:text-xl mb-1 sm:mb-2 leading-tight">{post.title}</CardTitle>
                              <p className="text-github-text/80 font-medium text-xs sm:text-sm">{post.subtitle}</p>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                              <p className="mb-3 sm:mb-4 text-github-text/90 leading-relaxed text-xs sm:text-sm line-clamp-3">{post.description}</p>
                              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                {post.tags.map((tag) => (
                                  <motion.span 
                                    key={tag}
                                    className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-github-dark rounded-full text-[10px] sm:text-xs border border-github-accent/30 text-github-accent"
                                    whileHover={{ scale: 1.08 }}
                                  >
                                    {tag}
                                  </motion.span>
                                ))}
                              </div>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => window.open(post.substackUrl, '_blank')}
                                className="flex items-center gap-2 border-github-accent text-github-accent hover:bg-github-accent hover:text-white text-xs sm:text-sm"
                              >
                                <ExternalLink size={14} />
                                Read on Substack
                              </Button>
                            </CardContent>
                          </div>
                        </div>
                      </GlassCard>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
        
        {/* Newsletter CTA */}
        <ScrollReveal direction="none">
          <GlassCard className="p-8 text-center" glow>
            <h3 className="text-xl font-semibold mb-4 text-github-accent">Stay Updated</h3>
            <p className="mb-6 text-github-text/90">
              Subscribe to my Substack newsletter for the latest insights on blockchain, Web3, and emerging technologies.
            </p>
            <Button 
              className="bg-github-accent hover:bg-github-accent/80"
              onClick={() => window.open('https://nisargxplores.substack.com', '_blank')}
            >
              Subscribe to Newsletter
            </Button>
          </GlassCard>
        </ScrollReveal>
      </div>
    </GitHubLayout>
  );
};

export default Blog;
