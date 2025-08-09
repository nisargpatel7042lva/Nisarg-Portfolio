
import GitHubLayout from '@/components/layout/GitHubLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Code, Palette, TrendingUp, Briefcase, Github, Linkedin, Twitter, Mail, Rocket, PenTool } from 'lucide-react';
import meImage from '../assets/me3.jpg';

const About = () => {
  const languages = [
    "JavaScript", "TypeScript", "Python", "Rust", "C#", "C++", "C", "Solidity"
  ];
  
  const frameworks = [
    "Next.js", "Express.js", "Flask", "Django", "React", "React Native"
  ];
  
  const libraries = [
    "Node.js", "Web3.js"
  ];
  
  const tools = [
    "Docker", "Cargo", "Anchor", "TailwindCSS", "Vite", "Git", "VS Code", "Figma", "Photoshop"
  ];
  
  const databases = [
    "MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase", "Appwrite"
  ];
  
  const blockchainTech = [
    "Solana", "Ethereum", "Smart Contracts", "Solidity"
  ];

  const quickStats = [
    { label: "Years of Experience", value: "3+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Technologies Mastered", value: "20+" },
    { label: "GitHub Repositories", value: "100+" }
  ];

  const socialLinks = [
    { icon: Github, url: "https://github.com/nisargpatel7042lva", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com/in/nisargpatel", label: "LinkedIn" },
    { icon: Twitter, url: "https://twitter.com/nisargpatel", label: "Twitter" },
    { icon: Mail, url: "mailto:nisarg@example.com", label: "Email" }
  ];

  return (
    <GitHubLayout>
      <div className="space-y-8 md:space-y-12">
        {/* Hero Section - Mobile Optimized */}
        <div className="github-card animated-border">
          <div className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-8">
            <div className="flex-shrink-0">
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
                
                {/* Profile picture container */}
                <div className="rounded-full overflow-hidden border-4 border-github-accent w-32 h-32 md:w-48 md:h-48 shadow-xl shadow-github-accent/30 hover:shadow-2xl hover:shadow-github-accent/40 transition-all duration-500 relative z-10">
                  <img src={meImage} alt="Nisarg Patel" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-github-accent">Nisarg Patel</h1>
                <p className="text-lg md:text-xl text-github-text mb-4 opacity-90">
                  Web 3 Developer | UI/UX Designer | Content Writer | Share Market Trader
                </p>
              </div>
              
              <p className="text-sm md:text-base text-github-text/80 leading-relaxed max-w-2xl">
                I'm a passionate developer with expertise in blockchain technology, modern web development, 
                and user experience design. I love building innovative solutions that bridge the gap between 
                traditional web and the decentralized future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <Button 
                  variant="default" 
                  className="bg-github-accent hover:bg-github-accent/80 shadow-md hover:shadow-xl transition-all w-full sm:w-auto"
                  onClick={() => window.open('/assets/resume.pdf', '_blank')}
                >
                  <Download className="mr-2" size={16} />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  className="border-github-accent text-github-accent hover:bg-github-accent hover:text-white shadow-md hover:shadow-xl transition-all w-full sm:w-auto"
                  onClick={() => window.open('https://github.com/nisargpatel7042lva', '_blank')}
                >
                  <ExternalLink className="mr-2" size={16} />
                  GitHub Profile
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats - Mobile Friendly Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickStats.map((stat, index) => (
            <Card key={index} className="bg-github-secondary border-github-border glass text-center">
              <CardContent className="p-4">
                <div className="text-2xl md:text-3xl font-bold text-github-accent mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-github-text/80">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Links - Mobile Optimized */}
        <div className="github-card">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-github-accent text-center md:text-left">Connect With Me</h2>
          <div className="flex justify-center md:justify-start gap-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="border-github-accent text-github-accent hover:bg-github-accent hover:text-white transition-all"
                onClick={() => window.open(social.url, '_blank')}
              >
                <social.icon size={16} className="mr-2" />
                <span className="hidden sm:inline">{social.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Tech Stack - Mobile Responsive Grid */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-xl md:text-2xl font-bold text-github-accent text-center md:text-left">Tech Stack & Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Programming Languages */}
            <Card className="bg-github-secondary border-github-border glass">
              <CardHeader className="pb-3">
                <CardTitle className="text-github-accent flex items-center gap-2 text-base md:text-lg">
                  <Code size={18} />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {languages.map((lang) => (
                    <Badge key={lang} variant="secondary" className="bg-github-dark text-github-accent border border-github-accent/30 text-xs">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Frameworks */}
            <Card className="bg-github-secondary border-github-border glass">
              <CardHeader className="pb-3">
                <CardTitle className="text-github-accent flex items-center gap-2 text-base md:text-lg">
                  <Briefcase size={18} />
                  Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {frameworks.map((framework) => (
                    <Badge key={framework} variant="secondary" className="bg-github-dark text-github-accent border border-github-accent/30 text-xs">
                      {framework}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Libraries */}
            <Card className="bg-github-secondary border-github-border glass">
              <CardHeader className="pb-3">
                <CardTitle className="text-github-accent flex items-center gap-2 text-base md:text-lg">
                  <Code size={18} />
                  Libraries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {libraries.map((lib) => (
                    <Badge key={lib} variant="secondary" className="bg-github-dark text-github-accent border border-github-accent/30 text-xs">
                      {lib}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools & Technologies */}
            <Card className="bg-github-secondary border-github-border glass">
              <CardHeader className="pb-3">
                <CardTitle className="text-github-accent flex items-center gap-2 text-base md:text-lg">
                  <Palette size={18} />
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="bg-github-dark text-github-accent border border-github-accent/30 text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Databases */}
            <Card className="bg-github-secondary border-github-border glass">
              <CardHeader className="pb-3">
                <CardTitle className="text-github-accent flex items-center gap-2 text-base md:text-lg">
                  <TrendingUp size={18} />
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {databases.map((db) => (
                    <Badge key={db} variant="secondary" className="bg-github-dark text-github-accent border border-github-accent/30 text-xs">
                      {db}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Blockchain & Web3 */}
            <Card className="bg-github-secondary border-github-border glass">
              <CardHeader className="pb-3">
                <CardTitle className="text-github-accent flex items-center gap-2 text-base md:text-lg">
                  <Code size={18} />
                  Blockchain & Web3
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {blockchainTech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-github-dark text-github-accent border border-github-accent/30 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What I Do - Mobile Friendly */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-github-accent text-center md:text-left">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Card className="bg-github-secondary border-github-border glass">
              <CardHeader className="pb-3">
                <CardTitle className="text-github-accent text-base md:text-lg flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Web3 Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-github-text/90 text-sm md:text-base">
                  Building decentralized applications on Solana and Ethereum, creating smart contracts, 
                  and developing innovative blockchain solutions that bridge traditional and decentralized finance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-github-secondary border-github-border glass">
              <CardHeader className="pb-3">
                <CardTitle className="text-github-accent text-base md:text-lg flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  UI/UX Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-github-text/90 text-sm md:text-base">
                  Crafting intuitive and beautiful user interfaces with a focus on user experience. 
                  I believe great design should be both functional and aesthetically pleasing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-github-secondary border-github-border glass">
              <CardHeader className="pb-3">
                <CardTitle className="text-github-accent text-base md:text-lg flex items-center gap-2">
                  <PenTool className="w-5 h-5" />
                  Content Writing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-github-text/90 text-sm md:text-base">
                  Creating technical content, documentation, and thought leadership articles about 
                  blockchain technology, Web3 trends, and the future of decentralized systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-github-secondary border-github-border glass">
              <CardHeader className="pb-3">
                <CardTitle className="text-github-accent text-base md:text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Market Trading
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-github-text/90 text-sm md:text-base">
                  Active participant in traditional and crypto markets, applying technical analysis 
                  and market insights to make informed trading decisions and understand market dynamics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Personal Touch - Mobile Optimized */}
        <div className="github-card">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-github-accent text-center md:text-left">Beyond Code</h2>
          <p className="text-github-text/90 leading-relaxed text-sm md:text-base">
            When I'm not coding, you'll find me exploring the latest Web3 innovations, 
            analyzing market trends, or sharing insights about the future of technology through my writing. 
            I'm passionate about the intersection of technology and finance, and I believe that 
            decentralized systems will play a crucial role in shaping our digital future.
          </p>
        </div>
      </div>
    </GitHubLayout>
  );
};

export default About;
