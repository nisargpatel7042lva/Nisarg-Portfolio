
import GitHubLayout from '@/components/layout/GitHubLayout';
import RepoCarousel from '@/components/RepoCarousel';
import HomeMemoryGame from '@/components/HomeMemoryGame';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import meImage from '@/assets/me3.jpg'; // Use alias if set, else use relative path

const Home = () => {
  return (
    <GitHubLayout>
      <div className="space-y-12">
        {/* Hero */}
        <div className="github-card animated-border">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="rounded-full overflow-hidden border-4 border-github-accent w-48 h-48 mx-auto shadow-xl hover:shadow-2xl hover:shadow-github-accent/20 transition-all duration-500">
                <img src={meImage} alt="Nisarg Patel" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-3 text-github-accent">Nisarg Patel</h1>
              <p className="text-xl text-github-text mb-6 opacity-90">
                Tech Enthusiast | Open Source Contributor | Web 3 Explorer | UI/UX Designer  
              </p>
              <p className="mb-6 text-github-text/80 leading-relaxed">
                Welcome to my terminal-inspired portfolio. Explore my projects, experience, and more
                using GitHub-style navigation or terminal commands.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link to="/about">
                  <Button variant="default" className="bg-github-accent hover:bg-github-accent/80 shadow-md hover:shadow-xl transition-all">About Me</Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline" className="border-github-accent text-github-accent hover:bg-github-accent hover:text-white shadow-md hover:shadow-xl transition-all">View Projects</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-github-accent text-github-accent hover:bg-github-accent hover:text-white shadow-md hover:shadow-xl transition-all">Get In Touch</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Memory Game Component */}
        <div className="glass p-2 rounded-xl">
          <HomeMemoryGame />
        </div>
        
        {/* Recent Repositories */}
        <div className="glass p-4 rounded-xl">
          <RepoCarousel />
        </div>
        
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-github-secondary border-github-border hover:border-github-accent transition-all duration-300 glass shadow-lg hover:shadow-xl hover:-translate-y-1">
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
          
          <Card className="p-6 bg-github-secondary border-github-border hover:border-github-accent transition-all duration-300 glass shadow-lg hover:shadow-xl hover:-translate-y-1">
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
          
          <Card className="p-6 bg-github-secondary border-github-border hover:border-github-accent transition-all duration-300 glass shadow-lg hover:shadow-xl hover:-translate-y-1">
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
        </div>
      </div>
    </GitHubLayout>
  );
};

export default Home;
