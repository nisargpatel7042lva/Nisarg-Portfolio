import GitHubLayout from '@/components/layout/GitHubLayout';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import GlassCard from '@/components/GlassCard';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 5,
    title: 'Unlocking Web3 Payments: How PayRam\'s Crypto Onramp and MCP Payments Bring Blockchain to Everyone',
    date: '2025',
    readTime: '10 min',
    imageUrl: '/lovable-uploads/payrams-blog.webp',
    substackUrl: 'https://nisargxplores.substack.com/p/unlocking-web3-payments-how-payrams',
    description: 'How PayRam solves the crypto payment problem with fiat onramps, stablecoin settlements, and AI-powered MCP payments.',
    tags: ['Web3', 'Payments', 'Stablecoins', 'AI'],
  },
  {
    id: 1,
    title: 'From Overwhelmed to On-Chain: How Solana Became the Ultimate Developer Playground',
    date: '2025',
    readTime: '12 min',
    imageUrl: '/lovable-uploads/40184645-4361-4e55-a44f-953a3b1573e1.png',
    substackUrl: 'https://nisargxplores.substack.com/p/from-overwhelmed-to-on-chain-how',
    description: 'Essential tools and resources that transform Solana development into an accessible and exciting journey.',
    tags: ['Solana', 'Development', 'Web3'],
  },
  {
    id: 2,
    title: 'The Day I Realized My Phone Was Smarter Than My Computer',
    date: '2025',
    readTime: '8 min',
    imageUrl: '/lovable-uploads/b309292a-72f5-4551-8304-6a4f9f5b79f9.png',
    substackUrl: 'https://nisargxplores.substack.com/p/the-day-i-realized-my-phone-was-smarter',
    description: 'How the Solana Seeker phone is redefining mobile Web3 with built-in crypto capabilities.',
    tags: ['Solana', 'Mobile', 'Web3'],
  },
  {
    id: 3,
    title: 'Solana\'s RWA Revolution: From Memecoin Playground to Wall Street\'s New Frontier',
    date: '2025',
    readTime: '10 min',
    imageUrl: '/lovable-uploads/e77cb161-f473-4b69-82c3-3a3180c3c38c.png',
    substackUrl: 'https://nisargxplores.substack.com/publish/posts/detail/167367574',
    description: 'How Solana evolved from being a perceived casino to serious infrastructure for real-world assets and institutional finance.',
    tags: ['Solana', 'RWA', 'DeFi', 'Institutional'],
  },
  {
    id: 4,
    title: 'The New Internet of Money — Solana\'s $12B Stablecoin Surge',
    date: '2025',
    readTime: '10 min',
    imageUrl: '/lovable-uploads/a85fc74e-e25a-4878-a59d-f938219046aa.png',
    substackUrl: 'https://nisargxplores.substack.com/publish/posts/detail/167083055',
    description: 'A deep dive into Solana\'s massive stablecoin growth and what it means for the future of digital payments.',
    tags: ['Solana', 'Stablecoins', 'Payments'],
  },
];

const Blog = () => {
  return (
    <GitHubLayout>
      <div className="space-y-10">

        {/* Header */}
        <ScrollReveal>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-github-accent">Blog</h1>
            <p className="text-github-text/60 text-sm max-w-xl">
              Thoughts on blockchain, Web3, and the future of decentralized technology — originally published on{' '}
              <a
                href="https://nisargxplores.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-github-accent hover:underline"
              >
                Substack
              </a>.
            </p>
          </div>
        </ScrollReveal>

        {/* Articles */}
        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-github-accent via-github-accent/40 to-transparent" />

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.08} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className="relative">
                  <motion.div
                    className="absolute left-2 sm:left-6 top-6 sm:top-8 w-3 h-3 sm:w-4 sm:h-4 bg-github-accent rounded-full border-2 sm:border-4 border-github-dark shadow-md z-10"
                    whileInView={{ scale: [0.5, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.35 }}
                  />

                  <div className="ml-10 sm:ml-16">
                    <GlassCard className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <div className="w-full md:w-2/5 flex-shrink-0 overflow-hidden bg-github-dark/40">
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-44 sm:h-52 md:h-full object-contain bg-github-dark/50"
                          />
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-3/5 flex flex-col">
                          <CardHeader className="p-5 pb-2">
                            <div className="flex items-center gap-2 text-xs text-github-text/50 mb-2">
                              <Calendar size={11} />
                              <span>{post.date}</span>
                              <span>·</span>
                              <span>{post.readTime} read</span>
                            </div>
                            <CardTitle className="text-github-accent text-sm sm:text-base leading-snug">
                              {post.title}
                            </CardTitle>
                          </CardHeader>

                          <CardContent className="p-5 pt-2 flex flex-col flex-1">
                            <p className="text-github-text/65 text-xs sm:text-sm leading-relaxed mb-4 flex-1">
                              {post.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {post.tags.map((tag) => (
                                <motion.span
                                  key={tag}
                                  className="px-2 py-0.5 bg-github-dark rounded-full text-xs border border-github-accent/25 text-github-accent"
                                  whileHover={{ scale: 1.06 }}
                                >
                                  {tag}
                                </motion.span>
                              ))}
                            </div>

                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(post.substackUrl, '_blank')}
                              className="self-start flex items-center gap-2 border-github-accent/50 text-github-accent hover:bg-github-accent hover:text-white text-xs"
                            >
                              <ExternalLink size={12} />
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

        {/* Newsletter CTA */}
        <ScrollReveal direction="none">
          <GlassCard className="p-8 text-center" glow>
            <h3 className="text-lg font-semibold mb-2 text-github-accent">Stay in the Loop</h3>
            <p className="mb-6 text-github-text/60 text-sm max-w-md mx-auto">
              Subscribe to my Substack for the latest on blockchain, Web3, and emerging technology.
            </p>
            <Button
              className="bg-github-accent hover:bg-github-accent/80 transition-all"
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
