
import React from 'react';
import GitHubLayout from '@/components/layout/GitHubLayout';
import RepoCarousel from '@/components/RepoCarousel';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <GitHubLayout>
      <div className="space-y-8">
        {/* Hero */}
        <div className="github-card">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="rounded-full overflow-hidden border-4 border-github-border w-48 h-48 mx-auto">
                <img
                  src="https://avatars.githubusercontent.com/u/nisargpatel7042lva"
                  alt="Nisarg Patel"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://github.identicons.com/nisargpatel7042lva.png";
                  }}
                />
              </div>
            </div>
            
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-3">Nisarg Patel</h1>
              <p className="text-xl text-github-text mb-6">
                Software Developer & GitHub Enthusiast
              </p>
              <p className="mb-6">
                Welcome to my terminal-inspired portfolio. Explore my projects, experience, and more
                using GitHub-style navigation or terminal commands.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link to="/about">
                  <Button variant="default">About Me</Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline">View Projects</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline">Get In Touch</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recent Repositories */}
        <RepoCarousel />
        
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6 bg-github-secondary border-github-border">
            <h3 className="text-lg font-semibold mb-3">Experience</h3>
            <p className="text-github-text mb-4">
              Explore my professional journey and work experience.
            </p>
            <Link to="/experience">
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                <span>View Experience</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </Card>
          
          <Card className="p-6 bg-github-secondary border-github-border">
            <h3 className="text-lg font-semibold mb-3">Projects</h3>
            <p className="text-github-text mb-4">
              Check out my latest projects and contributions.
            </p>
            <Link to="/projects">
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                <span>View Projects</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </Card>
          
          <Card className="p-6 bg-github-secondary border-github-border">
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-github-text mb-4">
              Have a project in mind? Let's discuss how we can work together.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                <span>Get in Touch</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </GitHubLayout>
  );
};

export default Home;
