import GitHubLayout from '@/components/layout/GitHubLayout';
import RepoCarousel from '@/components/RepoCarousel';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ParallaxSection } from '@/components/ParallaxSection';
import { ScrollReveal } from '@/components/ScrollReveal';
import meImage from '@/assets/me3.jpg';

const Home = () => {
  return (
    <GitHubLayout>
      <div className="space-y-12">
        {/* Hero */}
        <motion.div 
          className="github-card animated-border"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <ParallaxSection speed={0.3} className="md:w-1/3">
              <div className="relative flex items-center justify-center">
                {/* Enhanced Radar Effect - Smaller on mobile */}
                <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-github-accent/50 animate-radar-ring-1"></div>
                <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-github-accent/40 animate-radar-ring-2"></div>
                <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-github-accent/30 animate-radar-ring-3"></div>
                
                {/* Glowing background circles */}
                <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-radial from-github-accent/30 via-github-accent/20 to-transparent"></div>
                
                {/* Rotating radar effect */}
                <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-conic-gradient animate-radar-rotate"></div>
                </div>
                
                {/* Profile picture container - Smaller on mobile */}
                <motion.div 
                  className="rounded-full overflow-hidden border-4 border-github-accent w-32 h-32 md:w-48 md:h-48 shadow-xl shadow-github-accent/30 hover:shadow-2xl hover:shadow-github-accent/40 transition-all duration-500 relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={meImage} alt="Nisarg Patel" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </ParallaxSection>
            
            <motion.div 
              className="md:w-2/3 text-center md:text-left"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-3 text-github-accent">Nisarg Patel</h1>
              <p className="text-lg md:text-xl text-github-text mb-4 md:mb-6 opacity-90">
                Web 3 Developer | UI/UX Designer | Content Writer | Share Market Trader  
              </p>
              <p className="mb-4 md:mb-6 text-sm md:text-base text-github-text/80 leading-relaxed">
                Welcome to my terminal-inspired portfolio. Explore my projects, experience, and more
                using GitHub-style navigation or terminal commands.
              </p>
              <motion.div 
                className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link to="/about">
                  <Button variant="default" size="sm" className="bg-github-accent hover:bg-github-accent/80 shadow-md hover:shadow-xl transition-all">About Me</Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline" size="sm" className="border-github-accent text-github-accent hover:bg-github-accent hover:text-white shadow-md hover:shadow-xl transition-all">View Projects</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="sm" className="border-github-accent text-github-accent hover:bg-github-accent hover:text-white shadow-md hover:shadow-xl transition-all">Get In Touch</Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Recent Repositories */}
        <ScrollReveal>
          <div className="glass p-4 rounded-xl">
            <RepoCarousel />
          </div>
        </ScrollReveal>
        
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal delay={0.1}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 bg-github-secondary border-github-border hover:border-github-accent transition-all duration-300 glass shadow-lg hover:shadow-xl h-full">
                <h3 className="text-xl font-semibold mb-3 text-github-accent">Experience</h3>
                <p className="text-github-text/90 mb-6 leading-relaxed">
                  Explore my professional journey and work experience in development, design, and open source contributions.
                </p>
                <Link to="/experience" className="block mt-auto">
                  <Button variant="outline" size="sm" className="w-full flex items-center justify-center border-github-accent text-github-accent hover:bg-github-accent hover:text-white group">
                    <span>View Experience</span>
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 bg-github-secondary border-github-border hover:border-github-accent transition-all duration-300 glass shadow-lg hover:shadow-xl h-full">
                <h3 className="text-xl font-semibold mb-3 text-github-accent">Projects</h3>
                <p className="text-github-text/90 mb-6 leading-relaxed">
                  Check out my latest projects and contributions, showcasing my technical skills and creative problem-solving.
                </p>
                <Link to="/projects" className="block mt-auto">
                  <Button variant="outline" size="sm" className="w-full flex items-center justify-center border-github-accent text-github-accent hover:bg-github-accent hover:text-white group">
                    <span>View Projects</span>
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 bg-github-secondary border-github-border hover:border-github-accent transition-all duration-300 glass shadow-lg hover:shadow-xl h-full">
                <h3 className="text-xl font-semibold mb-3 text-github-accent">Contact</h3>
                <p className="text-github-text/90 mb-6 leading-relaxed">
                  Have a project in mind or want to collaborate? Let's discuss how we can work together to create something amazing.
                </p>
                <Link to="/contact" className="block mt-auto">
                  <Button variant="outline" size="sm" className="w-full flex items-center justify-center border-github-accent text-github-accent hover:bg-github-accent hover:text-white group">
                    <span>Get in Touch</span>
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </GitHubLayout>
  );
};

export default Home;
