
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Terminal as TerminalIcon, Github } from 'lucide-react';

interface CommandProps {
  label: string;
  description: string;
  action: () => void;
}

const Terminal: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<string[]>(['Welcome to Nisarg Patel\'s portfolio. Type "help" to see available commands.']);
  const [typingEffect, setTypingEffect] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const commands: Record<string, CommandProps> = {
    help: {
      label: 'help',
      description: 'Display available commands',
      action: () => {
        setHistory(prev => [...prev, '$ help', 'Available commands:', ...Object.keys(commands).map(cmd => `  ${cmd}: ${commands[cmd].description}`), '']);
      }
    },
    clear: {
      label: 'clear',
      description: 'Clear terminal',
      action: () => {
        setHistory(['Terminal cleared. Type "help" to see available commands.']);
      }
    },
    about: {
      label: 'about',
      description: 'View information about me',
      action: () => {
        navigate('/about');
      }
    },
    projects: {
      label: 'projects',
      description: 'View my projects',
      action: () => {
        navigate('/projects');
      }
    },
    contact: {
      label: 'contact',
      description: 'Contact me',
      action: () => {
        navigate('/contact');
      }
    },
    experience: {
      label: 'experience',
      description: 'View my work experience',
      action: () => {
        navigate('/experience');
      }
    },
    github: {
      label: 'github',
      description: 'View my GitHub profile',
      action: () => {
        window.open('https://github.com/nisargpatel7042lva', '_blank');
      }
    },
    socials: {
      label: 'socials',
      description: 'View my social media profiles',
      action: () => {
        navigate('/socials');
      }
    },
    home: {
      label: 'home',
      description: 'Go to home page',
      action: () => {
        navigate('/');
      }
    },
    exit: {
      label: 'exit',
      description: 'Exit terminal mode',
      action: () => {
        navigate('/home');
      }
    }
  };

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  // Auto-focus on input
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
    // Simulate typing effect for initial welcome message
    const timer = setTimeout(() => {
      setTypingEffect(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle clicking anywhere in the terminal to focus on input
  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const trimmedInput = input.trim().toLowerCase();
    setHistory(prev => [...prev, `$ ${input}`]);
    setInput('');
    
    // Check if command exists
    if (commands[trimmedInput]) {
      commands[trimmedInput].action();
    } else {
      setHistory(prev => [...prev, `Command not found: ${trimmedInput}. Type "help" for available commands.`, '']);
    }
  };

  return (
    <div 
      className="terminal min-h-[400px] w-full max-w-3xl mx-auto flex flex-col"
      onClick={handleTerminalClick}
    >
      <div className="flex items-center gap-2 mb-4 border-b border-github-border pb-2">
        <TerminalIcon size={18} className="text-github-accent" />
        <span className="font-semibold">portfolio.sh</span>
      </div>
      
      <div ref={historyRef} className="flex-1 overflow-y-auto mb-4 space-y-1">
        {history.map((line, i) => (
          <div key={i} className={cn(
            "font-mono whitespace-pre-wrap", 
            { "animate-typing overflow-hidden whitespace-nowrap border-r-2 border-github-accent": typingEffect && i === 0 },
            line.startsWith('$') ? 'text-github-green' : '',
            line.includes('not found') ? 'text-github-danger' : ''
          )}>
            {line}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="terminal-prompt mr-2">$</span>
        <input
          ref={inputRef}
          type="text"
          className="terminal-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          spellCheck="false"
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default Terminal;
