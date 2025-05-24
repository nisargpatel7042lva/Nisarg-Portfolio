
import GitHubLayout from '@/components/layout/GitHubLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Github, ExternalLink, Twitter, Linkedin, Instagram, MessageSquare, Mail, MessagesSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import meImage from '../assets/me3.jpg';

const Socials = () => {
  const socialLinks = [
    {
      name: "GitHub",
      username: "@nisargpatel7042lva",
      url: "https://github.com/nisargpatel7042lva",
      icon: Github,
      bgColor: "bg-[#24292e]",
      hoverColor: "hover:text-[#24292e]"
    },
    {
      name: "LinkedIn",
      username: "@nisargpatel",
      url: "https://www.linkedin.com/in/nisarg-patel-7b799a277",
      icon: Linkedin,
      bgColor: "bg-[#0077b5]",
      hoverColor: "hover:text-[#0077b5]"
    },
    {
      name: "Twitter",
      username: "@nisargpatel5563",
      url: "https://x.com/NisargPatel5563",
      icon: Twitter,
      bgColor: "bg-[#1da1f2]",
      hoverColor: "hover:text-[#1da1f2]"
    },
    {
      name: "Instagram",
      username: "@nisargxplores",
      url: "https://www.instagram.com/nisargxplores/",
      icon: Instagram,
      bgColor: "bg-[#e1306c]",
      hoverColor: "hover:text-[#e1306c]"
    },
    {
      name: "Discord",
      username: "nisargpatel_7042lva",
      url: "#",
      icon: MessageSquare,
      bgColor: "bg-[#5865F2]",
      hoverColor: "hover:text-[#5865F2]"
    },
    {
      name: "Telegram",
      username: "@nisargpatel7042",
      url: "https://t.me/nisargpatel",
      icon: MessagesSquare,
      bgColor: "bg-[#0088cc]",
      hoverColor: "hover:text-[#0088cc]"
    },
    {
      name: "Email",
      username: "nisargpatel_5565@outlook.com",
      url: "mailto:nisargpatel_5565@outlook.com",
      icon: Mail,
      bgColor: "bg-[#ea4335]",
      hoverColor: "hover:text-[#ea4335]"
    }
  ];

  return (
    <GitHubLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold mb-6 text-github-accent">Social Media & Profiles</h1>
          <p className="mb-8">
            Connect with me on various platforms to stay updated with my latest projects, articles, and activities.
          </p>
        </div>
        
        {/* Social Cards - Terminal View */}
        <div>
          <h2 className="text-xl font-bold mb-6 text-github-accent flex items-center">
            <span className="font-mono">$ ls -la social_profiles</span>
            <span className="cursor"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block transition-transform hover:-translate-y-1"
              >
                <Card className="overflow-hidden glass backdrop-blur-md border border-github-accent/20 h-full hover:shadow-md hover:shadow-github-accent/20 terminal">
                  <div className={`h-1 ${social.bgColor}`}></div>
                  <CardHeader className="pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-red-500 mr-1.5"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1.5"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <h2 className="text-lg font-mono font-semibold ml-2 text-github-accent">{social.name}</h2>
                      <social.icon size={20} className="text-github-accent" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="flex items-center mb-4">
                      <span className="text-github-accent font-mono mr-1">$</span>
                      <p className="text-github-text font-mono">{social.username}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-github-accent/50 text-github-accent hover:bg-github-accent hover:text-black font-mono flex items-center justify-center gap-2"
                    >
                      visit {social.name.toLowerCase()}
                      <ExternalLink size={14} />
                    </Button>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
        
        {/* GitHub Activity */}
        <Card className="p-6 glass backdrop-blur-md border border-github-accent/20 terminal shadow-lg">
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-1.5"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1.5"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <h2 className="text-xl font-mono font-semibold ml-4 text-github-accent">GitHub Activity</h2>
          </div>
          <div className="font-mono">
            <p className="mb-4">
              <span className="text-github-accent">$</span> git stats --user="nisargpatel7042lva" --visualize
            </p>
            <div className="flex justify-center">
              <img 
                src={`https://ghchart.rshah.org/2ea043/nisargpatel7042lva`} 
                alt="Nisarg Patel's GitHub Contribution Chart"
                className="w-full max-w-3xl"
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <Button 
              onClick={() => window.open('https://github.com/nisargpatel7042lva', '_blank')}
              className="bg-github-accent hover:bg-github-accent/80 flex items-center gap-2 font-mono"
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
