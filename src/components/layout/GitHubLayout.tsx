
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Terminal, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface GitHubLayoutProps {
  children: React.ReactNode;
}

const GitHubLayout: React.FC<GitHubLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/home', label: 'Overview' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/socials', label: 'Socials' },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* GitHub Header */}
      <header className="github-header">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-github-text hover:text-github-accent">
              <Github size={24} />
            </Link>
            <h1 className="text-lg font-semibold">Nisarg Patel</h1>
          </div>
          
          <Link to="/">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Terminal size={16} />
              Terminal Mode
            </Button>
          </Link>
        </div>
      </header>
      
      {/* GitHub Nav */}
      <div className="border-b border-github-border sticky top-0 bg-github-dark z-10">
        <nav className="container mx-auto px-4">
          <ul className="flex overflow-x-auto">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`tab ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      
      {/* GitHub Footer */}
      <footer className="border-t border-github-border py-6">
        <div className="container mx-auto px-4 text-sm text-center text-github-text">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Github size={16} />
            <span>© {new Date().getFullYear()} Nisarg Patel</span>
          </div>
          <a 
            href="https://github.com/nisargpatel7042lva" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 text-github-accent hover:underline"
          >
            View on GitHub <ExternalLink size={14} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default GitHubLayout;
