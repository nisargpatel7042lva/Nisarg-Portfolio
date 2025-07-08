
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
      text: "Hello! I'm JARVIS, Nisarg's AI assistant. I can help you learn about his projects, experience, and skills. What would you like to know?",
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
    
    // Simple rule-based responses based on keywords
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return "Nisarg has worked on various Web3 and blockchain projects. He's particularly skilled in Solana development, DeFi protocols, and has experience with real-world asset tokenization. You can check out his projects section to see his portfolio in detail!";
    }
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
      return "Nisarg is a multi-talented professional with expertise in Web3 development, UI/UX design, content writing, and share market trading. He has deep knowledge in blockchain technology, particularly Solana, and writes insightful articles about the crypto space.";
    }
    
    if (lowerMessage.includes('skills') || lowerMessage.includes('technology')) {
      return "Nisarg's technical skills include React, TypeScript, Solana development, Smart Contract development, UI/UX design, and full-stack web development. He's also proficient in content creation and has a strong understanding of financial markets.";
    }
    
    if (lowerMessage.includes('blog') || lowerMessage.includes('article') || lowerMessage.includes('writing')) {
      return "Nisarg writes extensively about blockchain technology and Web3 innovations on his Substack newsletter. His recent articles cover topics like Solana's RWA revolution and stablecoin adoption. Check out his blog section for the latest insights!";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('work together')) {
      return "You can get in touch with Nisarg through his contact page. He's open to collaborations, freelance projects, and discussions about Web3 and blockchain technology. Feel free to reach out!";
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello there! Great to meet you. I'm here to help you learn more about Nisarg and his work. What specific aspect would you like to know about - his projects, experience, or skills?";
    }
    
    if (lowerMessage.includes('jarvis') || lowerMessage.includes('ai')) {
      return "I'm JARVIS, Nisarg's AI assistant! I'm here to help visitors like you learn more about Nisarg's professional background, projects, and expertise. Think of me as your personal guide through his portfolio!";
    }
    
    // Default response
    return "That's an interesting question! While I can tell you about Nisarg's projects, experience, skills, and blog posts, I'd recommend exploring his portfolio sections for more detailed information. Is there anything specific about his work you'd like to know?";
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
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-github-accent hover:bg-github-accent/80 shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <Bot size={24} className="group-hover:scale-110 transition-transform" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={cn(
        "w-96 bg-github-secondary border-github-border glass shadow-2xl transition-all duration-300",
        isMinimized ? "h-16" : "h-[500px]"
      )}>
        <CardHeader className="p-4 border-b border-github-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-github-accent flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <CardTitle className="text-sm text-github-accent">JARVIS</CardTitle>
                <p className="text-xs text-github-text/70">AI Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 h-8 w-8 text-github-text hover:text-github-accent"
              >
                {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="p-1 h-8 w-8 text-github-text hover:text-github-accent"
              >
                <X size={14} />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[436px]">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
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
                      "max-w-[80%] p-3 rounded-lg text-sm",
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
                  <div className="bg-github-dark text-github-text border border-github-border p-3 rounded-lg text-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-github-accent rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-github-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-github-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-github-border">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask JARVIS anything..."
                  className="flex-1 bg-github-dark border-github-border text-github-text placeholder:text-github-text/50"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isTyping}
                  className="bg-github-accent hover:bg-github-accent/80"
                >
                  <Send size={16} />
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
