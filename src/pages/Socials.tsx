
import GitHubLayout from '@/components/layout/GitHubLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Github, ExternalLink, Twitter, Linkedin, Instagram, MessageSquare, Mail, MessagesSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import meImage from '../assets/me3.jpg';

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
      url: "https://www.linkedin.com/in/nisarg-patel-7b799a277",
      icon: Linkedin,
      bgColor: "bg-[#0077b5]"
    },
    {
      name: "Twitter",
      username: "@nisargpatel",
      url: "https://x.com/NisargPatel5563",
      icon: Twitter,
      bgColor: "bg-[#1da1f2]"
    },
    {
      name: "Instagram",
      username: "@nisargpatel",
      url: "https://www.instagram.com/nisargxplores/",
      icon: Instagram,
      bgColor: "bg-[#e1306c]"
    },
    {
      name: "Discord",
      username: "nisargpatel_7042lva",
      url: "#",
      icon: MessageSquare,
      bgColor: "bg-[#5865F2]"
    },
    {
      name: "Telegram",
      username: "@nisargpatel7042",
      url: "https://t.me/nisargpatel",
      icon: MessagesSquare,
      bgColor: "bg-[#0088cc]"
    },
    {
      name: "Email",
      username: "nisargpatel_5565@outlook.com",
      url: "mailto:nisargpatel_5565@outlook.com",
      icon: Mail,
      bgColor: "bg-[#ea4335]"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block transition-transform hover:-translate-y-1"
            >
              <Card className="overflow-hidden bg-github-secondary border-github-border h-full hover:shadow-md hover:shadow-github-accent/20">
                <div className={`${social.bgColor} h-3`}></div>
                <CardHeader className="pt-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{social.name}</h2>
                    <social.icon size={20} className="text-github-accent" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-github-text mb-4">{social.username}</p>
                  <Button variant="outline" size="sm" className="w-full border-github-accent text-github-accent hover:bg-github-accent hover:text-white">
                    Visit Profile
                  </Button>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
        
        {/* Social Network Visualization */}
        <Card className="p-6 bg-github-secondary border-github-border animated-border">
          <h2 className="text-xl font-semibold mb-4 text-github-accent">My Network</h2>
          <div className="flex flex-wrap justify-center gap-4 py-8">
            <div className="relative">
              {/* Radar/wave animation circles */}
              <div className="absolute inset-0 -m-2 rounded-full animate-pulse-slow opacity-20 bg-github-accent"></div>
              <div className="absolute inset-0 -m-4 rounded-full animate-pulse-medium opacity-10 bg-github-accent"></div>
              <div className="absolute inset-0 -m-6 rounded-full animate-pulse-fast opacity-5 bg-github-accent"></div>
              
              {/* Circular radar effect */}
              <div className="absolute inset-0 radar-effect"></div>
              
              <Avatar className="w-16 h-16 border-2 border-github-accent animate-float relative z-10">
                <AvatarImage src={meImage} alt="Nisarg Patel" />
                <AvatarFallback>NP</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-github-accent rounded-full flex items-center justify-center text-xs font-bold border-2 border-github-secondary">
                7+
              </div>
            </div>
            
            {/* Network connections */}
            {socialLinks.slice(0, 6).map((social, index) => (
              <div key={index} className="network-node relative">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-github-secondary border border-github-border">
                  <social.icon size={18} className="text-github-accent" />
                </div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border border-github-secondary"></div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <p className="mb-6 text-github-text">Let's connect and collaborate on exciting projects!</p>
            <Button 
              onClick={() => window.open('mailto:nisargpatel_5565@outlook.com', '_blank')}
              className="bg-github-accent hover:bg-github-accent/80 flex items-center gap-2"
            >
              <Mail size={18} />
              Get in Touch
            </Button>
          </div>
        </Card>
        
        {/* GitHub Activity */}
        <Card className="p-6 bg-github-secondary border-github-border">
          <h2 className="text-xl font-semibold mb-4 text-github-accent">GitHub Activity</h2>
          <p className="mb-4">
            Check out my contributions and activity on GitHub:
          </p>
          <div className="flex justify-center">
            <img 
              src={`https://ghchart.rshah.org/2ea043/nisargpatel7042lva`} 
              alt="Nisarg Patel's GitHub Contribution Chart"
              className="w-full max-w-3xl"
            />
          </div>
          <div className="mt-4 text-center">
            <Button 
              onClick={() => window.open('https://github.com/nisargpatel7042lva', '_blank')}
              className="bg-github-accent hover:bg-github-accent/80 flex items-center gap-2"
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
