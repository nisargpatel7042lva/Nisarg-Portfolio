
import React from 'react';
import GitHubLayout from '@/components/layout/GitHubLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Socials = () => {
  const socialLinks = [
    {
      name: "GitHub",
      username: "@nisargpatel7042lva",
      url: "https://github.com/nisargpatel7042lva",
      icon: Github,
      bgColor: "bg-[#24292e]"
    },
    {
      name: "LinkedIn",
      username: "@nisargpatel",
      url: "#",
      icon: ExternalLink,
      bgColor: "bg-[#0077b5]"
    },
    {
      name: "Twitter",
      username: "@nisargpatel",
      url: "#",
      icon: ExternalLink,
      bgColor: "bg-[#1da1f2]"
    },
    {
      name: "Medium",
      username: "@nisargpatel",
      url: "#",
      icon: ExternalLink,
      bgColor: "bg-[#12100e]"
    },
    {
      name: "Dev.to",
      username: "@nisargpatel",
      url: "#",
      icon: ExternalLink,
      bgColor: "bg-[#0a0a0a]"
    },
    {
      name: "Stack Overflow",
      username: "user:nisargpatel",
      url: "#",
      icon: ExternalLink,
      bgColor: "bg-[#f48024]"
    }
  ];

  return (
    <GitHubLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold mb-6">Social Media & Profiles</h1>
          <p className="mb-8">
            Connect with me on various platforms to stay updated with my latest projects, articles, and activities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block transition-transform hover:-translate-y-1"
            >
              <Card className="overflow-hidden bg-github-secondary border-github-border h-full">
                <div className={`${social.bgColor} h-3`}></div>
                <CardHeader className="pt-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{social.name}</h2>
                    <social.icon size={20} className="text-github-accent" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-github-text mb-4">{social.username}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Visit Profile
                  </Button>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
        
        {/* GitHub Activity */}
        <Card className="p-6 bg-github-secondary border-github-border">
          <h2 className="text-xl font-semibold mb-4">GitHub Activity</h2>
          <p className="mb-4">
            Check out my contributions and activity on GitHub:
          </p>
          <div className="flex justify-center">
            <img 
              src={`https://ghchart.rshah.org/58a6ff/nisargpatel7042lva`} 
              alt="Nisarg Patel's GitHub Contribution Chart"
              className="w-full max-w-3xl"
            />
          </div>
          <div className="mt-4 text-center">
            <Button 
              onClick={() => window.open('https://github.com/nisargpatel7042lva', '_blank')}
              className="flex items-center gap-2"
            >
              <Github size={18} />
              Visit GitHub Profile
            </Button>
          </div>
        </Card>
      </div>
    </GitHubLayout>
  );
};

export default Socials;
