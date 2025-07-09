
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
      text: "Hey there! I'm JARVIS - like Tony Stark's AI, but with less budget and more dad jokes. I'm here to tell you all about Nisarg's awesomeness (and trust me, there's a lot to unpack). What can I spill the tea about?",
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
    
    // Enhanced keyword matching with more intelligent responses
    const keywordResponses = {
      // Technical skills and technologies
      'react': "React? Nisarg doesn't just use React - he thinks in JSX! His components are so well-structured, they make the component tree jealous. He's been crafting beautiful UIs with React hooks before they were cool.",
      'typescript': "TypeScript is Nisarg's love language! He writes type-safe code that's cleaner than a freshly formatted hard drive. His interfaces are so well-defined, even TypeScript's compiler sends him thank-you notes.",
      'solana': "Solana development? That's Nisarg's playground! He builds on Solana like he's architecting the future of finance. His smart contracts are so efficient, they make other blockchains look like dial-up internet.",
      'blockchain': "Blockchain is where Nisarg really shines! He doesn't just build on blockchain - he thinks in distributed ledger. His DeFi solutions are more innovative than sliced bread (and way more profitable).",
      'web3': "Web3 is Nisarg's natural habitat! He's been building decentralized apps since before Web3 was a buzzword. His dApps are so user-friendly, they make traditional apps look prehistoric.",
      'nextjs': "Next.js? Nisarg treats it like his personal framework! His server-side rendering is so smooth, it makes butter jealous. He optimizes performance like he's training for the Olympics.",
      'tailwind': "Tailwind CSS and Nisarg are a match made in developer heaven! His utility-first styling is so clean, Marie Kondo would be proud. He creates responsive designs faster than you can say 'mobile-first'.",
      
      // Design and creativity
      'design': "Design is where Nisarg's artistic soul meets his technical brain! His UI/UX work is so intuitive, users think the interface can read their minds. He creates user experiences smoother than a jazz saxophone solo.",
      'ui': "UI design? Nisarg crafts interfaces like Michelangelo painted ceilings! His user interfaces are so beautiful, they should be in museums. Every pixel is placed with the precision of a Swiss watchmaker.",
      'ux': "UX is Nisarg's superpower! He designs user journeys so seamless, people forget they're using technology. His wireframes are more organized than a NASA mission plan.",
      
      // Content and writing
      'writing': "Nisarg's writing skills are legendary! His technical articles explain complex concepts so clearly, even my processor understands them. His Substack is basically the Netflix of blockchain content.",
      'content': "Content creation? Nisarg doesn't just write content - he crafts digital masterpieces! His articles are more engaging than a season finale cliffhanger. He explains Web3 like he's telling bedtime stories (but way more exciting).",
      'blog': "His blog is where knowledge meets entertainment! Nisarg writes about blockchain innovation with the passion of a thousand burning CPUs. Every post is a journey through the future of technology.",
      
      // Trading and finance
      'trading': "Share market trading? Nisarg reads market charts like he's decoding the Matrix! His trading strategies are so calculated, spreadsheets bow down to him. He analyzes trends faster than a supercomputer on caffeine.",
      'market': "Market analysis is Nisarg's secret weapon! He predicts market movements like he has a crystal ball made of pure data. His investment insights are sharper than a brand new IDE.",
      'finance': "Finance and Nisarg go together like code and coffee! He understands financial markets so well, numbers literally rearrange themselves to make sense. His portfolio management skills are legendary.",
      
      // Portfolio and achievements
      'portfolio': "His portfolio is basically a greatest hits album of innovation! Every project showcases a different superpower. It's like a museum of 'How to Build the Future' - definitely worth the virtual tour!",
      'achievements': "Nisarg's achievements read like a tech superhero's resume! Web3 development, UI/UX mastery, content creation, trading expertise - he collects skills like they're rare Pokemon cards!",
      'education': "Education? Nisarg is basically a self-taught Renaissance person! He learns new technologies faster than I process my morning boot sequence. His curiosity engine runs on pure innovation fuel.",
      
      // Collaboration and work
      'collaborate': "Want to collaborate? Smart choice! Working with Nisarg is like having a Swiss Army knife teammate - versatile, reliable, and always ready for any challenge. His collaboration style is smoother than silk pajamas.",
      'freelance': "Freelance work with Nisarg? That's like hiring a one-person innovation department! His project delivery is more reliable than gravity. Clients don't just get code - they get digital magic!",
      'team': "Nisarg in a team setting? He's like the perfect teammate multiplier! His communication skills are clearer than 4K resolution. He lifts everyone's game like a productivity power-up.",
      
      // Fun and personality
      'hobbies': "Besides conquering the digital world, Nisarg probably has hobbies that are just as impressive! Though honestly, when you're this good at everything, regular hobbies might seem boring.",
      'personality': "Nisarg's personality? Imagine if enthusiasm had a baby with expertise, and that baby was raised by innovation! He's the kind of person who makes complex problems look like Sunday crosswords.",
      'fun': "Fun fact about Nisarg: he makes learning look effortless! His energy for new technologies is more infectious than viral videos. He probably dreams in code and wakes up with solutions!"
    };

    // Check for specific keywords first
    for (const [keyword, response] of Object.entries(keywordResponses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }
    
    // Original category-based responses with enhanced intelligence
    if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('build')) {
      const responses = [
        "Projects? Nisarg's GitHub is like a treasure chest of innovation! His Web3 and Solana work is so cutting-edge, it makes bleeding-edge technology look dull. Each project solves real problems while pushing boundaries.",
        "His project portfolio is more diverse than a Netflix homepage! From DeFi protocols to stunning UIs, he builds solutions that actually matter. His code doesn't just work - it performs like a Formula 1 car.",
        "Want to see real innovation? Nisarg's projects showcase everything from blockchain wizardry to pixel-perfect designs. He doesn't just build apps - he crafts digital experiences that users actually love."
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('background') || lowerMessage.includes('career')) {
      const responses = [
        "Experience? Nisarg's background reads like a masterclass in modern tech! Web3 development, UI/UX design, content creation, trading - he's basically a human Swiss Army knife with a computer science degree.",
        "His career journey is more impressive than a rocket launch! From mastering blockchain development to creating stunning user experiences, he's collected expertise like achievements in a video game.",
        "Background check on Nisarg: Expert level in everything he touches! His experience spans the entire digital universe - coding, designing, writing, trading. It's like he has cheat codes for talent acquisition."
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('skills') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
      const responses = [
        "Skills? His tech stack is more stacked than a programmer's coffee cup collection! React, TypeScript, Solana, Next.js, Tailwind - he doesn't just use these tools, he makes them sing opera.",
        "Technology and Nisarg are basically best friends! His programming skills are so sharp, they could cut through legacy code like a hot knife through butter. Plus his design sense? *Chef's kiss*",
        "His technical arsenal includes everything from frontend magic to blockchain sorcery. React components bow to his expertise, and Solana smart contracts practically write themselves when he's around."
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Enhanced question handling
    if (lowerMessage.includes('how') || lowerMessage.includes('what') || lowerMessage.includes('why') || lowerMessage.includes('when') || lowerMessage.includes('where')) {
      const questionResponses = [
        "Great question! While I might not have the exact specifics, I can tell you that Nisarg approaches everything with methodical excellence. Whether it's coding, designing, or strategizing, he breaks down complex problems into elegant solutions.",
        "That's the kind of thoughtful question Nisarg loves! His approach to problem-solving is both analytical and creative. He combines technical expertise with innovative thinking to find answers that actually work.",
        "Interesting question! Nisarg's methodology usually involves thorough research, strategic planning, and iterative improvement. He doesn't just find answers - he finds the RIGHT answers that scale and perform.",
        "You're asking the right questions! Nisarg's process typically involves understanding the core problem, exploring multiple solutions, and implementing the most efficient approach. His decision-making is data-driven and user-focused."
      ];
      return questionResponses[Math.floor(Math.random() * questionResponses.length)];
    }

    // Enhanced default responses for unmatched queries
    const smartDefaultResponses = [
      "That's an interesting topic! While I'm specifically programmed to be Nisarg's hype machine, I can tell you he's probably got insights about that too. His curiosity spans everything from cutting-edge tech to market trends!",
      "Hmm, that's outside my core knowledge base, but here's what I do know: Nisarg has this amazing ability to connect dots across different domains. Whether it's tech, design, or business, he finds innovative angles on everything!",
      "I may not have specific intel on that, but I can guarantee Nisarg would approach it with his signature blend of technical expertise and creative problem-solving. Want to know about his proven skills instead?",
      "That's beyond my current programming scope, but knowing Nisarg's track record, he'd probably turn that into his next breakthrough project! His ability to learn and adapt is genuinely impressive.",
      "While that's not in my specialized Nisarg database, I can tell you he's the type of person who researches everything thoroughly before diving in. His learning curve is basically a vertical line!"
    ];
    
    return smartDefaultResponses[Math.floor(Math.random() * smartDefaultResponses.length)];
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
        "w-80 md:w-96", // Smaller width on mobile
        isMinimized ? "h-16" : "h-96 md:h-[500px]" // Smaller height on mobile
      )}>
        <CardHeader className="p-3 md:p-4 border-b border-github-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-github-accent flex items-center justify-center">
                <Bot size={12} className="md:size-4 text-white" />
              </div>
              <div>
                <CardTitle className="text-xs md:text-sm text-github-accent">JARVIS</CardTitle>
                <p className="text-xs text-github-text/70 hidden md:block">AI Assistant (with jokes!)</p>
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
                  placeholder="Ask me anything..."
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
