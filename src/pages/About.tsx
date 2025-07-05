
import GitHubLayout from '@/components/layout/GitHubLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Code, Palette, TrendingUp, Briefcase } from 'lucide-react';
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

  return (
    <GitHubLayout>
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="github-card animated-border">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="relative flex items-center justify-center">
                {/* Enhanced Radar Effect */}
                <div className="absolute w-48 h-48 rounded-full border-4 border-github-accent/50 animate-radar-ring-1"></div>
                <div className="absolute w-48 h-48 rounded-full border-4 border-github-accent/40 animate-radar-ring-2"></div>
                <div className="absolute w-48 h-48 rounded-full border-4 border-github-accent/30 animate-radar-ring-3"></div>
                
                {/* Glowing background circles */}
                <div className="absolute w-48 h-48 rounded-full bg-gradient-radial from-github-accent/30 via-github-accent/20 to-transparent"></div>
                
                {/* Rotating radar effect */}
                <div className="absolute w-48 h-48 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-conic-gradient animate-radar-rotate"></div>
                </div>
                
                {/* Profile picture container */}
                <div className="rounded-full overflow-hidden border-4 border-github-accent w-48 h-48 shadow-xl shadow-github-accent/30 hover:shadow-2xl hover:shadow-github-accent/40 transition-all duration-500 relative z-10">
                  <img src={meImage} alt="Nisarg Patel" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-3 text-github-accent">About Me</h1>
              <p className="text-xl text-github-text mb-6 opacity-90">
                Web 3 Developer | UI/UX Designer | Content Writer | Share Market Trader
              </p>
              <p className="mb-6 text-github-text/80 leading-relaxed">
                I'm a passionate developer with expertise in blockchain technology, modern web development, 
                and user experience design. I love building innovative solutions that bridge the gap between 
                traditional web and the decentralized future.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button 
                  variant="default" 
                  className="bg-github-accent hover:bg-github-accent/80 shadow-md hover:shadow-xl transition-all"
                  onClick={() => window.open('/assets/resume.pdf', '_blank')}
                >
                  <Download className="mr-2" size={16} />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  className="border-github-accent text-github-accent hover:bg-github-accent hover:text-white shadow-md hover:shadow-xl transition-all"
                  onClick={() => window.open('https://github.com/nisargpatel7042lva', '_blank')}
                >
                  <ExternalLink className="mr-2" size={16} />
                  GitHub Profile
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-github-accent">Tech Stack & Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Programming Languages */}
            <Card className="bg-github-secondary border-github-border glass">
              <CardHeader>
                <CardTitle className="text-github-accent flex items-center gap-2">
                  <Code size={20} />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <Badge key={lang} variant="secondary" className="bg-github-dark text-github-accent border border-github-accent/30">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Frameworks */}
            <Card className="bg-github-secondary border-github-border glass">
              <CardHeader>
                <CardTitle className="text-github-accent flex items-center gap-2">
                  <Briefcase size={20} />
                  Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {frameworks.map((framework) => (
                    <Badge key={framework} variant="secondary" className="bg-github-dark text-github-accent border border-github-accent/30">
                      {framework}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Libraries */}
            <Card className="bg-github-secondary border-github-border glass">
              <CardHeader>
                <CardTitle className="text-github-accent flex items-center gap-2">
                  <Code size={20} />
                  Libraries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {libraries.map((lib) => (
                    <Badge key={lib} variant="secondary" className="bg-github-dark text-github-accent border border-github-accent/30">
                      {lib}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools & Technologies */}
            <Card className="bg-github-secondary border-github-border glass">
              <CardHeader>
                <CardTitle className="text-github-accent flex items-center gap-2">
                  <Palette size={20} />
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="bg-github-dark text-github-accent border border-github-accent/30">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Databases */}
            <Card className="bg-github-secondary border-github-border glass">
              <CardHeader>
                <CardTitle className="text-github-accent flex items-center gap-2">
                  <TrendingUp size={20} />
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {databases.map((db) => (
                    <Badge key={db} variant="secondary" className="bg-github-dark text-github-accent border border-github-accent/30">
                      {db}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Blockchain & Web3 */}
            <Card className="bg-github-secondary border-github-border glass">
              <CardHeader>
                <CardTitle className="text-github-accent flex items-center gap-2">
                  <Code size={20} />
                  Blockchain & Web3
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {blockchainTech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-github-dark text-github-accent border border-github-accent/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What I Do */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-github-accent">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-github-secondary border-github-border glass">
              <CardHeader>
                <CardTitle className="text-github-accent">🚀 Web3 Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-github-text/90">
                  Building decentralized applications on Solana and Ethereum, creating smart contracts, 
                  and developing innovative blockchain solutions that bridge traditional and decentralized finance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-github-secondary border-github-border glass">
              <CardHeader>
                <CardTitle className="text-github-accent">🎨 UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-github-text/90">
                  Crafting intuitive and beautiful user interfaces with a focus on user experience. 
                  I believe great design should be both functional and aesthetically pleasing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-github-secondary border-github-border glass">
              <CardHeader>
                <CardTitle className="text-github-accent">📝 Content Writing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-github-text/90">
                  Creating technical content, documentation, and thought leadership articles about 
                  blockchain technology, Web3 trends, and the future of decentralized systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-github-secondary border-github-border glass">
              <CardHeader>
                <CardTitle className="text-github-accent">📈 Market Trading</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-github-text/90">
                  Active participant in traditional and crypto markets, applying technical analysis 
                  and market insights to make informed trading decisions and understand market dynamics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="github-card">
          <h2 className="text-2xl font-bold mb-6 text-github-accent">Beyond Code</h2>
          <p className="text-github-text/90 leading-relaxed">
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
