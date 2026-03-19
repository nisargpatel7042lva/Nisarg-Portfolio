import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
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
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNav from '@/components/MobileNav';
import FloatingParticles from '@/components/FloatingParticles';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';

interface GitHubLayoutProps {
  children: React.ReactNode;
}

const GitHubLayout: React.FC<GitHubLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [displayText, setDisplayText] = useState<string>("Nisarg Patel");
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [textIndex, setTextIndex] = useState<number>(0);
  
  const navItems = [
    { path: '/about', label: 'About' },
    { path: '/home', label: 'Overview' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact' },
    { path: '/blog', label: 'Blog' },
    { path: '/socials', label: 'Socials' },
  ];
  
  const textOptions = [
    "Nisarg Patel",
    isMobile ? "Web 3 Developer | UI/UX Designer | Content Writer | Share Market Trader" : "Web 3 Developer | UI/UX Designer | Content Writer | Share Market Trader"
  ];
  
  useEffect(() => {
    const typingSpeed = isTyping ? (isMobile ? 80 : 100) : (isMobile ? 30 : 50);
    const pauseDuration = isMobile ? 1500 : 2000;
    
    const typingTimeout = setTimeout(() => {
      if (isTyping && !isDeleting) {
        if (displayText === textOptions[textIndex]) {
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        } else {
          setDisplayText(textOptions[textIndex].substring(0, displayText.length + 1));
        }
      } else if (isDeleting) {
        if (displayText === '') {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % textOptions.length);
        } else {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }
      }
    }, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayText, isTyping, isDeleting, textIndex, textOptions, isMobile]);
  
  const handleExitWebsite = () => {
    setIsLoading(true);
    toast.success("Signing out. See you soon!", {
      duration: 2000,
      onAutoClose: () => {
        setTimeout(() => {
          window.close();
        }, 500);
      }
    });
  };

  const isHomePage = location.pathname === '/home';
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-github-dark via-github-dark/95 to-github-dark relative">
      <FloatingParticles />
      
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="text-github-accent text-2xl animate-pulse">Signing out...</div>
        </div>
      )}
      
      {/* GitHub Header - Glass effect */}
      <motion.header 
        className="github-header sticky top-0 z-20 backdrop-blur-xl bg-github-dark/80 border-b border-github-border/50"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <h1 className={`font-semibold text-github-accent flex items-center ${isMobile ? 'text-sm' : 'text-lg'}`}>
              <span className="min-h-[1.2em] flex items-center">{displayText}</span>
              <span className="cursor ml-1"></span>
            </h1>
          </div>
          
          <div className="flex items-center gap-2">
            {isMobile ? (
              <MobileNav />
            ) : (
              <>
                <Link to="/">
                  <Button variant="outline" size="sm" className="border-github-accent text-github-accent hover:bg-github-accent hover:text-white shadow-md hover:shadow-lg transition-all">
                    Terminal Mode
                  </Button>
                </Link>
                
                {!isHomePage && (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm" className="shadow-md hover:shadow-lg transition-all">
                        Exit
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-github-secondary border-github-border glass-card">
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
              </>
            )}
          </div>
        </div>
      </motion.header>
      
      {/* GitHub Nav */}
      {!isMobile && (
        <motion.div 
          className="border-b border-github-border/50 sticky top-[60px] bg-github-dark/80 backdrop-blur-xl z-10"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <nav className="container mx-auto px-4">
            <ul className="flex overflow-x-auto">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <Link 
                    to={item.path} 
                    className={`tab terminal-tab ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
      
      {/* Main Content with page transition */}
      <main className="flex-1 container mx-auto px-4 py-8 relative z-[1]">
        <PageTransition key={location.pathname}>
          {children}
        </PageTransition>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-github-border/50 py-6 bg-github-dark/80 backdrop-blur-xl relative z-[1]">
        <div className="container mx-auto px-4 text-sm text-center text-github-text">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span>© {new Date().getFullYear()} Nisarg Patel</span>
          </div>
          <a 
            href="https://github.com/nisargpatel7042lva" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 text-github-accent hover:underline group"
          >
            View on GitHub <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default GitHubLayout;
