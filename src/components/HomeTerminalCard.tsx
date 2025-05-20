
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HomeTerminalCard = () => {
  const [text, setText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);
  
  const terminalLines = [
    '> Welcome to Nisarg\'s Portfolio',
    '> Initializing environment...',
    '> Loading projects and experiences...',
    '> System ready!',
    '> Type "explore" to continue'
  ];
  
  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timer = setTimeout(() => {
        setText(terminalLines[currentLine]);
        setCurrentLine(prev => prev + 1);
      }, 800);
      
      return () => clearTimeout(timer);
    } else {
      setShowPrompt(true);
    }
  }, [currentLine]);
  
  return (
    <div className="terminal glass p-6 rounded-md border border-github-border w-full max-w-3xl mx-auto mb-8 font-mono">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-github-text">nisarg@portfolio ~ %</div>
      </div>
      
      <div className="h-56 overflow-auto text-github-text">
        {terminalLines.slice(0, currentLine).map((line, index) => (
          <div key={index} className="mb-2">
            <span className="text-github-green">{line}</span>
          </div>
        ))}
        
        {showPrompt && (
          <div className="mt-4">
            <div className="flex items-center">
              <span className="text-github-accent mr-2">nisarg@portfolio ~</span>
              <span className="text-github-green">$</span>
              <span className="ml-2">explore</span>
            </div>
            
            <div className="mt-6 space-y-2">
              <div className="text-github-accent">Available commands:</div>
              <div className="grid grid-cols-2 gap-2">
                <Link to="/projects" className="command">projects</Link>
                <Link to="/experience" className="command">experience</Link>
                <Link to="/about" className="command">about</Link>
                <Link to="/contact" className="command">contact</Link>
                <Link to="/fun" className="command">fun</Link>
                <Link to="/socials" className="command">socials</Link>
              </div>
              
              <div className="mt-4">
                <Button 
                  className="bg-github-accent hover:bg-github-accent/80 w-full mt-4"
                  asChild
                >
                  <Link to="/fun">Explore Fun Activities</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeTerminalCard;
