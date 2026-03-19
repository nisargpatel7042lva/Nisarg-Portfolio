import GitHubLayout from '@/components/layout/GitHubLayout';
import RepoCarousel from '@/components/RepoCarousel';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import meImage from '@/assets/me3.jpg';
import ScrollReveal from '@/components/ScrollReveal';
import GlassCard from '@/components/GlassCard';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <GitHubLayout>
      <div className="space-y-12">
        {/* Hero */}
        <ScrollReveal direction="up" duration={0.7}>
          <GlassCard className="p-6 md:p-8" glow>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="md:w-1/3">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-github-accent/50 animate-radar-ring-1"></div>
                  <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-github-accent/40 animate-radar-ring-2"></div>
                  <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-github-accent/30 animate-radar-ring-3"></div>
                  <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-radial from-github-accent/30 via-github-accent/20 to-transparent"></div>
                  <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-conic-gradient animate-radar-rotate"></div>
                  </div>
                  <motion.div 
                    className="rounded-full overflow-hidden border-4 border-github-accent w-32 h-32 md:w-48 md:h-48 shadow-xl shadow-github-accent/30 relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <img src={meImage} alt="Nisarg Patel" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </div>
              
              <div className="md:w-2/3 text-center md:text-left">
                <motion.h1 
                  className="text-3xl md:text-4xl font-bold mb-2 md:mb-3 text-github-accent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Nisarg Patel
                </motion.h1>
                <motion.p 
                  className="text-lg md:text-xl text-github-text mb-4 md:mb-6 opacity-90"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Web 3 Developer | UI/UX Designer | Content Writer | Share Market Trader  
                </motion.p>
                <motion.p 
                  className="mb-4 md:mb-6 text-sm md:text-base text-github-text/80 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Welcome to my terminal-inspired portfolio. Explore my projects, experience, and more
                  using GitHub-style navigation or terminal commands.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Link to="/about">
                    <Button variant="default" size="sm" className="bg-github-accent hover:bg-github-accent/80 shadow-md hover:shadow-xl hover:shadow-github-accent/20 transition-all">About Me</Button>
                  </Link>
                  <Link to="/projects">
                    <Button variant="outline" size="sm" className="border-github-accent text-github-accent hover:bg-github-accent hover:text-white shadow-md hover:shadow-xl transition-all">View Projects</Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="sm" className="border-github-accent text-github-accent hover:bg-github-accent hover:text-white shadow-md hover:shadow-xl transition-all">Get In Touch</Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
        
        {/* Recent Repositories */}
        <ScrollReveal delay={0.1}>
          <GlassCard className="p-4">
            <RepoCarousel />
          </GlassCard>
        </ScrollReveal>
        
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Experience', desc: 'Explore my professional journey and work experience in development, design, and open source contributions.', link: '/experience', label: 'View Experience' },
            { title: 'Projects', desc: 'Check out my latest projects and contributions, showcasing my technical skills and creative problem-solving.', link: '/projects', label: 'View Projects' },
            { title: 'Contact', desc: "Have a project in mind or want to collaborate? Let's discuss how we can work together to create something amazing.", link: '/contact', label: 'Get in Touch' },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={0.1 + i * 0.1} direction="up">
              <GlassCard className="p-6 h-full flex flex-col" glow>
                <h3 className="text-xl font-semibold mb-3 text-github-accent">{item.title}</h3>
                <p className="text-github-text/90 mb-6 leading-relaxed flex-1">{item.desc}</p>
                <Link to={item.link} className="block mt-auto">
                  <Button variant="outline" size="sm" className="w-full flex items-center justify-center border-github-accent text-github-accent hover:bg-github-accent hover:text-white group">
                    <span>{item.label}</span>
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </GitHubLayout>
  );
};

export default Home;
