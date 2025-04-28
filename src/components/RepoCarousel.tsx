
import React, { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

interface LanguageColor {
  [key: string]: string;
}

const languageColors: LanguageColor = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  Java: "#b07219",
  "C#": "#178600",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Go: "#00ADD8",
  Swift: "#ffac45",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  "C++": "#f34b7d",
  C: "#555555",
  Other: "#ededed",
};

const RepoCarousel: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/nisargpatel7042lva/repos?per_page=10&sort=updated');
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data: Repository[] = await response.json();
        setRepositories(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching repositories:', err);
        setError('Could not load repositories. Using sample data instead.');
        
        // Sample data if the API request fails
        setRepositories([
          {
            id: 1,
            name: "Project1",
            description: "A sample project description",
            html_url: "https://github.com/nisargpatel7042lva",
            language: "JavaScript",
            stargazers_count: 5,
            forks_count: 2
          },
          {
            id: 2,
            name: "Project2",
            description: "Another sample project",
            html_url: "https://github.com/nisargpatel7042lva",
            language: "TypeScript",
            stargazers_count: 3,
            forks_count: 1
          },
          {
            id: 3,
            name: "Project3",
            description: "Third sample project",
            html_url: "https://github.com/nisargpatel7042lva",
            language: "Python",
            stargazers_count: 7,
            forks_count: 3
          }
        ]);
        setLoading(false);
      }
    };
    
    fetchRepositories();
  }, []);
  
  if (loading) {
    return (
      <div className="w-full p-8 text-center">
        <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-github-accent border-t-transparent"></div>
        <p className="mt-2">Loading repositories...</p>
      </div>
    );
  }
  
  // Double the repositories to create the seamless carousel
  const duplicatedRepos = [...repositories, ...repositories];
  
  return (
    <div className="my-8">
      <h3 className="text-xl font-semibold mb-4">My Repositories</h3>
      
      {error && <p className="text-github-danger mb-2">{error}</p>}
      
      <div className="carousel-container">
        <div className="carousel-track animate-carousel">
          {duplicatedRepos.map((repo, index) => (
            <div key={`${repo.id}-${index}`} className="repository-card">
              <h4 className="font-medium text-lg mb-2">{repo.name}</h4>
              <p className="text-sm text-github-text mb-4 h-16 overflow-hidden">
                {repo.description || "No description available"}
              </p>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  {repo.language && (
                    <div className="flex items-center mr-4">
                      <span 
                        className="repository-language-dot" 
                        style={{ backgroundColor: languageColors[repo.language] || languageColors.Other }}
                      ></span>
                      <span className="text-xs">{repo.language}</span>
                    </div>
                  )}
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="text-xs"
                  onClick={() => window.open(repo.html_url, '_blank')}
                >
                  View <ExternalLink size={12} className="ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <Button 
          variant="default"
          onClick={() => window.open('https://github.com/nisargpatel7042lva', '_blank')}
          className="flex items-center gap-2"
        >
          <Github size={18} />
          View All Repositories
        </Button>
      </div>
    </div>
  );
};

export default RepoCarousel;
