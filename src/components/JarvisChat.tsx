import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Bot, Send, Minimize2, Maximize2, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'jarvis';
  timestamp: Date;
}

const JarvisChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm JARVIS, Nisarg's AI assistant. I'm here to help you learn more about Nisarg's professional background, skills, and experience. Feel free to ask me anything about his work, projects, or expertise.",
      sender: 'jarvis',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getJarvisResponse = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Professional keyword-based responses
    const keywordResponses = {
      // Technical skills and technologies
      'react': "Nisarg is highly proficient in React development. He has extensive experience building modern web applications using React, leveraging hooks, context API, and component composition patterns. His React projects demonstrate clean architecture and performance optimization.",
      'typescript': "TypeScript is one of Nisarg's core competencies. He writes type-safe, maintainable code with comprehensive type definitions. His TypeScript expertise ensures robust applications with fewer runtime errors and better developer experience.",
      'solana': "Nisarg specializes in Solana blockchain development. He has experience building decentralized applications, smart contracts, and DeFi protocols on the Solana network. His understanding of Solana's architecture enables him to create efficient and scalable blockchain solutions.",
      'blockchain': "Blockchain development is a key area of Nisarg's expertise. He works with various blockchain platforms, understands consensus mechanisms, smart contract development, and decentralized application architecture. His blockchain projects focus on real-world utility and user adoption.",
      'web3': "Nisarg is experienced in Web3 development, building decentralized applications that interact with blockchain networks. He understands wallet integration, token standards, and the principles of decentralized systems. His Web3 projects emphasize user experience and accessibility.",
      'nextjs': "Next.js is part of Nisarg's modern web development stack. He leverages Next.js for server-side rendering, static site generation, and building performant React applications. His Next.js projects demonstrate optimization techniques and modern deployment practices.",
      'tailwind': "Nisarg uses Tailwind CSS extensively for creating responsive, modern user interfaces. He applies design systems principles and creates consistent, maintainable styling across applications. His Tailwind implementations focus on responsive design and accessibility.",
      
      // Design and creativity
      'design': "Nisarg has a strong background in UI/UX design. He creates user-centered designs that prioritize usability and accessibility. His design process involves user research, wireframing, prototyping, and iterative testing to ensure optimal user experiences.",
      'ui': "User Interface design is one of Nisarg's strengths. He creates clean, intuitive interfaces that enhance user interaction. His UI work focuses on visual hierarchy, consistency, and responsive design principles.",
      'ux': "User Experience is central to Nisarg's design philosophy. He conducts user research, creates user personas, and designs user journeys that solve real problems. His UX approach is data-driven and focused on measurable improvements.",
      
      // Content and writing
      'writing': "Nisarg is an accomplished technical writer. He creates clear, comprehensive documentation and educational content about blockchain technology, web development, and emerging technologies. His writing makes complex topics accessible to diverse audiences.",
      'content': "Content creation is one of Nisarg's key skills. He produces educational articles, technical guides, and thought leadership pieces about Web3 and blockchain technology. His content strategy focuses on providing value to the developer community.",
      'blog': "Nisarg maintains an active blog where he shares insights about blockchain technology, development best practices, and industry trends. His blog posts are well-researched and provide practical value to readers.",
      
      // Trading and finance
      'trading': "Nisarg has experience in financial markets and trading. He applies analytical thinking and data-driven strategies to market analysis. His understanding of financial markets complements his blockchain and DeFi development work.",
      'market': "Market analysis is part of Nisarg's skill set. He understands market dynamics, trend analysis, and risk management. This knowledge is particularly valuable in his blockchain and cryptocurrency-related projects.",
      'finance': "Nisarg has a solid understanding of financial principles and markets. This knowledge enhances his ability to develop DeFi applications and understand the economic implications of blockchain technology.",
      
      // Portfolio and achievements
      'portfolio': "Nisarg's portfolio showcases a diverse range of projects spanning Web3 development, UI/UX design, and technical writing. Each project demonstrates his ability to solve complex problems and deliver high-quality solutions.",
      'achievements': "Nisarg has built a strong professional profile through his work in blockchain development, content creation, and design. His achievements include successful project deliveries, thought leadership in Web3, and contributions to the developer community.",
      'education': "Nisarg is a continuous learner who stays updated with the latest technologies and industry trends. He combines formal education with self-directed learning to maintain expertise in rapidly evolving fields.",
      
      // Collaboration and work
      'collaborate': "Nisarg is an effective collaborator who works well in team environments. He communicates clearly, shares knowledge, and contributes to positive team dynamics. His collaborative approach enhances project outcomes.",
      'freelance': "Nisarg offers freelance services in Web3 development, UI/UX design, and technical consulting. He delivers projects on time and maintains high quality standards while working with clients across different industries.",
      'team': "Nisarg is a valuable team member who brings technical expertise and a problem-solving mindset. He mentors junior developers and contributes to team knowledge sharing and best practices.",
      
      // Skills and experience
      'experience': "Nisarg has comprehensive experience across the full stack of modern web development, with particular expertise in blockchain technologies. His experience spans frontend development, smart contract programming, and user experience design.",
      'skills': "Nisarg's core skills include React/TypeScript development, Solana blockchain programming, UI/UX design, and technical writing. He combines technical proficiency with strong communication and problem-solving abilities.",
      'projects': "Nisarg's projects demonstrate his ability to build complete solutions from concept to deployment. His work includes DeFi applications, user interfaces, and educational content that serves the broader tech community."
    };

    // Check for specific keywords first
    for (const [keyword, response] of Object.entries(keywordResponses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }
    
    // Category-based responses
    if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('build')) {
      const responses = [
        "Nisarg has worked on various projects including blockchain applications, user interface designs, and technical content. His projects demonstrate expertise in modern web technologies and blockchain development.",
        "His project portfolio includes DeFi protocols, responsive web applications, and educational content about Web3 technologies. Each project showcases his ability to deliver complete, production-ready solutions.",
        "Nisarg's projects span multiple domains: blockchain development with Solana, frontend applications with React and TypeScript, and design systems that prioritize user experience."
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('background') || lowerMessage.includes('career') || lowerMessage.includes('professional')) {
      const responses = [
        "Nisarg has built a diverse professional background combining technical development with design and content creation. His career focuses on emerging technologies, particularly blockchain and Web3 development.",
        "His professional journey includes expertise in modern web development, blockchain technology, and user experience design. He has experience working on both individual projects and team collaborations.",
        "Nisarg's career demonstrates continuous learning and adaptation to new technologies. He combines technical skills with strong communication abilities and business understanding."
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('technology') || lowerMessage.includes('tech') || lowerMessage.includes('programming')) {
      const responses = [
        "Nisarg works with modern web technologies including React, TypeScript, Next.js, and Tailwind CSS. His blockchain expertise includes Solana development and smart contract programming.",
        "His technology stack emphasizes type safety, performance, and maintainability. He stays current with industry best practices and emerging technologies in the Web3 space.",
        "Nisarg's technical expertise spans frontend development, blockchain programming, and design systems. He applies these skills to create comprehensive solutions for complex problems."
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Question handling
    if (lowerMessage.includes('how') || lowerMessage.includes('what') || lowerMessage.includes('why') || lowerMessage.includes('when') || lowerMessage.includes('where')) {
      const questionResponses = [
        "That's a great question about Nisarg's work. His approach typically involves thorough research, strategic planning, and iterative development to ensure high-quality outcomes.",
        "Nisarg addresses challenges through a combination of technical expertise and user-centered thinking. He focuses on creating solutions that are both technically sound and user-friendly.",
        "His methodology involves understanding requirements, researching best practices, and implementing solutions with attention to performance, security, and user experience.",
        "Nisarg's problem-solving approach combines analytical thinking with creative solutions. He considers both technical constraints and user needs when developing applications."
      ];
      return questionResponses[Math.floor(Math.random() * questionResponses.length)];
    }

    // Professional default responses
    const defaultResponses = [
      "I'd be happy to tell you more about Nisarg's specific expertise in that area. Could you ask about his technical skills, projects, or professional experience?",
      "While I don't have specific information about that topic, I can share details about Nisarg's work in blockchain development, UI/UX design, or technical writing. What interests you most?",
      "That's an interesting question. I can provide information about Nisarg's professional background, technical skills, or recent projects. What would you like to know more about?",
      "I'm designed to help you understand Nisarg's professional capabilities and experience. Feel free to ask about his work in Web3 development, design, or any specific technologies you're curious about."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(async () => {
      const jarvisResponse = await getJarvisResponse(input);
      const jarvisMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: jarvisResponse,
        sender: 'jarvis',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, jarvisMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-github-accent hover:bg-github-accent/80 shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <Bot size={20} className="md:size-6 group-hover:scale-110 transition-transform" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <Card className={cn(
        "bg-github-secondary border-github-border glass shadow-2xl transition-all duration-300",
        "w-80 md:w-96",
        isMinimized ? "h-16" : "h-96 md:h-[500px]"
      )}>
        <CardHeader className="p-3 md:p-4 border-b border-github-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-github-accent flex items-center justify-center">
                <Bot size={12} className="md:size-4 text-white" />
              </div>
              <div>
                <CardTitle className="text-xs md:text-sm text-github-accent">JARVIS</CardTitle>
                <p className="text-xs text-github-text/70 hidden md:block">AI Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 h-6 w-6 md:h-8 md:w-8 text-github-text hover:text-github-accent"
              >
                {isMinimized ? <Maximize2 size={12} className="md:size-3.5" /> : <Minimize2 size={12} className="md:size-3.5" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="p-1 h-6 w-6 md:h-8 md:w-8 text-github-text hover:text-github-accent"
              >
                <X size={12} className="md:size-3.5" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-80 md:h-[436px]">
            <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] md:max-w-[80%] p-2 md:p-3 rounded-lg text-xs md:text-sm",
                      message.sender === 'user'
                        ? 'bg-github-accent text-white'
                        : 'bg-github-dark text-github-text border border-github-border'
                    )}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-github-dark text-github-text border border-github-border p-2 md:p-3 rounded-lg text-xs md:text-sm">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-github-accent rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-github-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-github-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 md:p-4 border-t border-github-border">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Nisarg..."
                  className="flex-1 bg-github-dark border-github-border text-github-text placeholder:text-github-text/50 text-xs md:text-sm h-8 md:h-10"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isTyping}
                  className="bg-github-accent hover:bg-github-accent/80 h-8 md:h-10 px-2 md:px-3"
                >
                  <Send size={14} className="md:size-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default JarvisChat;
