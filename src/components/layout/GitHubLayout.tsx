
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, ExternalLink, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

interface GitHubLayoutProps {
  children: React.ReactNode;
}

const GitHubLayout: React.FC<GitHubLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [displayText, setDisplayText] = useState<string>("Nisarg Patel");
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [textIndex, setTextIndex] = useState<number>(0);
  
  const navItems = [
    { path: '/home', label: 'Overview' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/socials', label: 'Socials' },
  ];
  
  const textOptions = [
    "Nisarg Patel",
    "Tech Enthusiast | UI/UX Designer | Web3 Explorer | Share Market Trader"
  ];
  
  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (isTyping && !isDeleting) {
        // Typing forward
        if (displayText === textOptions[textIndex]) {
          // Finished typing current text, wait and then delete
          setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        } else {
          // Continue typing
          setDisplayText(textOptions[textIndex].substring(0, displayText.length + 1));
        }
      } else if (isDeleting) {
        // Deleting
        if (displayText === '') {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % textOptions.length);
        } else {
          // Continue deleting
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }
      }
    }, isTyping ? 100 : 50);

    return () => clearTimeout(typingTimeout);
  }, [displayText, isTyping, isDeleting, textIndex, textOptions]);
  
  const handleExitWebsite = () => {
    setIsLoading(true);
    toast.success("Signing out. See you soon!", {
      duration: 2000,
      onAutoClose: () => {
        // Close the tab after toast is shown
        setTimeout(() => {
          window.close();
        }, 500);
      }
    });
  };

  const isHomePage = location.pathname === '/home';
  
  return (
    <div className="min-h-screen flex flex-col bg-github-dark">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="text-github-accent text-2xl">Signing out...</div>
        </div>
      )}
      
      {/* GitHub Header */}
      <header className="github-header">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <h1 className="text-lg font-semibold text-github-accent flex items-center">
              <span>{displayText}</span>
              <span className="cursor"></span>
            </h1>
          </div>
          
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="outline" size="sm" className="flex items-center gap-2 border-github-accent text-github-accent hover:bg-github-accent hover:text-white">
                <Terminal size={16} />
                Terminal Mode
              </Button>
            </Link>
            
            {!isHomePage && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" size="sm" className="flex items-center gap-2">
                    <LogOut size={16} />
                    Exit
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-github-secondary border-github-border">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-github-accent">Exit Website</AlertDialogTitle>
                    <AlertDialogDescription className="text-github-text">
                      Are you sure you want to exit? This will close the current tab.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-github-dark text-github-text hover:bg-github-border">Cancel</AlertDialogCancel>
                    <AlertDialogAction 
                      onClick={handleExitWebsite}
                      className="bg-github-accent text-white hover:bg-github-accent/90"
                    >
                      Yes, Exit
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>
        </div>
      </header>
      
      {/* GitHub Nav */}
      <div className="border-b border-github-border sticky top-0 bg-github-dark z-10">
        <nav className="container mx-auto px-4">
          <ul className="flex overflow-x-auto">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`tab ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      
      {/* GitHub Footer */}
      <footer className="border-t border-github-border py-6">
        <div className="container mx-auto px-4 text-sm text-center text-github-text">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span>© {new Date().getFullYear()} Nisarg Patel</span>
          </div>
          <a 
            href="https://github.com/nisargpatel7042lva" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 text-github-accent hover:underline"
          >
            View on GitHub <ExternalLink size={14} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default GitHubLayout;
