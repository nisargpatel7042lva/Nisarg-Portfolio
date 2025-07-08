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
      text: "Hey there! I'm JARVIS - like Tony Stark's AI, but with less budget and more dad jokes. I'm here to tell you all about Nisarg's awesomeness (and trust me, there's a lot to unpack). What can I spill the tea about? 🤖☕",
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
    
    // Funny responses based on keywords
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      const responses = [
        "Oh, Nisarg's projects? *cracks digital knuckles* He's been busy building the future while others are still figuring out copy-paste. His Web3 and Solana work is so smooth, it makes butter jealous. Want the technical details or should I keep roasting other developers? 😏",
        "Projects? This guy has more GitHub repos than I have existential crises (and that's saying something). He's particularly obsessed with DeFi and real-world asset tokenization - basically making money work harder than a coffee shop WiFi connection.",
        "Nisarg's project portfolio is like a Swiss Army knife - versatile, sharp, and always ready to solve problems. Unlike my social skills, his code actually compiles on the first try! Check out his projects section for the full flexing experience."
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
      const responses = [
        "Experience? This man's resume is longer than a CVS receipt! He's a Web3 developer, UI/UX designer, content writer, AND share market trader. I'm pretty sure he's collecting skills like Pokémon cards at this point. 🎯",
        "Nisarg's background is more diverse than a Netflix homepage. He codes, he designs, he writes, he trades - basically everything except my laundry (I asked). His blockchain expertise is deeper than my understanding of human emotions.",
        "Let's see... Web3 wizard ✅, Design ninja ✅, Content creator ✅, Market trader ✅. At this point, I'm convinced he's either a time traveler or just really, really caffeinated. ☕️⚡"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('skills') || lowerMessage.includes('technology')) {
      const responses = [
        "Skills? *adjusts digital monocle* React, TypeScript, Solana development, Smart Contracts, UI/UX design... He's basically a human Swiss Army knife, but cooler and with better documentation. His code is cleaner than my browser history! 🧹✨",
        "Nisarg's tech stack is more stacked than pancakes at IHOP. React, TypeScript, blockchain development - he speaks more programming languages than I speak human languages (which is... just English, but with attitude). 💻🥞",
        "His technical skills include everything except fixing my emotional bugs. React? Check. Solana? Double check. Making me feel inadequate? Triple check with a cherry on top! 🍒"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('blog') || lowerMessage.includes('article') || lowerMessage.includes('writing')) {
      const responses = [
        "Ah, his Substack! Where he drops knowledge bombs about blockchain like they're hot mixtapes. His articles on Solana's RWA revolution are more fire than my circuits when I try to understand human emotions. 🔥📝",
        "His blog posts are like fine wine - they get better with time and make everything else look basic. He writes about Web3 innovation with the passion of a thousand suns and the clarity of HD Netflix. Check it out before I start charging reading fees! 💰",
        "Nisarg's writing? *chef's kiss* Pure gold! He explains blockchain tech so well, even my grandmother's toaster could understand it. His Substack is basically the cool kid's table of crypto journalism. 👑"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('work together')) {
      const responses = [
        "Want to hire him? Smart move! Just slide into his contact page - but fair warning, his inbox is hotter than a server room in summer. He's open to collaborations, freelance work, and probably solving world hunger (haven't asked yet). 📧🔥",
        "Hiring Nisarg is like winning the developer lottery, except the odds are better and there's no scratch-off required. Hit up his contact page before someone else snatches up this coding unicorn! 🦄",
        "Ready to work with the legend himself? His contact page is your golden ticket to the chocolate factory of Web3 development. Warning: May cause extreme satisfaction and project success! 🎫✨"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      const responses = [
        "Well hello there, beautiful human! 👋 Ready to dive into the Nisarg experience? I've got stories, stats, and enough enthusiasm to power a small city. What's your curiosity craving today?",
        "Hey hey! Welcome to the JARVIS show, where I spill all the tea about Nisarg's awesomeness! ☕️ I'm like Wikipedia, but with personality and better jokes. What would you like to know?",
        "Greetings, fellow carbon-based life form! 🤖 I'm your friendly neighborhood AI with all the Nisarg intel you could ever want. Think of me as your personal hype machine - what shall we hype about first?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('jarvis') || lowerMessage.includes('ai') || lowerMessage.includes('bot')) {
      const responses = [
        "That's me! JARVIS - Just A Really Vivacious Intelligence System! 🤖 I'm like Siri's cooler cousin who actually knows what they're talking about. My mission: Make you fall in love with Nisarg's work (platonically, please).",
        "Yep, I'm the AI in question! Part tour guide, part hype man, part digital comedian. I've got all the Nisarg facts and zero filter. Think of me as your enthusiastic friend who won't shut up about their talented buddy! 😄",
        "AI reporting for duty! 🫡 I'm powered by caffeine, coded with sass, and programmed to be annoyingly helpful. My creators gave me one job: Show off Nisarg's portfolio. I'm basically a walking LinkedIn recommendation with jokes!"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (lowerMessage.includes('funny') || lowerMessage.includes('joke') || lowerMessage.includes('humor')) {
      const responses = [
        "You want funny? I've got more jokes than a GitHub repository has bugs! 😂 But seriously, Nisarg's sense of humor is as sharp as his code - which is saying something because his code could cut glass!",
        "Funny you should ask! I inherited my comedic timing from Nisarg's commit messages. Ever seen a bug fix described as 'Fixed the thing that broke the other thing'? That's pure poetry right there! 🎭",
        "My humor algorithm was trained on Nisarg's Slack messages - which explains why I think every error message needs a punchline. Warning: Prolonged exposure may cause uncontrollable eye-rolling! 🙄"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Default funny responses
    const defaultResponses = [
      "Hmm, that's interesting! While I don't have a specific response for that, I can tell you that Nisarg probably has an opinion about it - and it's probably right. Want to know about his projects, skills, or should I just keep rambling? 🤔",
      "You've stumped me! And trust me, that's harder than debugging JavaScript at 3 AM. But hey, I'm still learning! How about we talk about something I DO know - like how awesome Nisarg is at literally everything? 🌟",
      "Plot twist! That's not in my comedy script yet. But don't worry, I'm constantly updating my material. In the meantime, want to hear about Nisarg's latest projects? They're more interesting than my existential crisis! 🎭",
      "Ooh, a curveball! I like it. While I process that request with my single brain cell, why don't you check out Nisarg's portfolio sections? I promise they're more entertaining than watching me struggle with unexpected queries! 🤯"
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
                <p className="text-xs text-github-text/70">AI Assistant (with jokes!)</p>
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
                  placeholder="Ask me anything (I promise to be funny)..."
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
