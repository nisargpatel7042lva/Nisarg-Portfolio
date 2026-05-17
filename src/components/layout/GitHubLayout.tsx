import React, { useState } from 'react';
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

const navItems = [
  { path: '/about',      label: 'About' },
  { path: '/home',       label: 'Overview' },
  { path: '/projects',   label: 'Projects' },
  { path: '/experience', label: 'Experience' },
  { path: '/contact',    label: 'Contact' },
  { path: '/blog',       label: 'Blog' },
  { path: '/socials',    label: 'Socials' },
];

const GitHubLayout: React.FC<GitHubLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = useState(false);

  const handleExitWebsite = () => {
    setIsLoading(true);
    toast.success("See you soon!", {
      duration: 2000,
      onAutoClose: () => {
        setTimeout(() => window.close(), 500);
      },
    });
  };

  const isHomePage = location.pathname === '/home';

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-github-dark via-github-dark/95 to-github-dark relative">
      <FloatingParticles />

      {isLoading && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="text-github-accent text-xl animate-pulse font-mono">Signing out…</div>
        </div>
      )}

      {/* Header */}
      <motion.header
        className="github-header sticky top-0 z-20 backdrop-blur-xl bg-github-dark/80 border-b border-github-border/50"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/home">
            <h1 className={`font-semibold text-github-accent flex items-center gap-1 ${isMobile ? 'text-sm' : 'text-base'}`}>
              nisarg<span className="text-github-text/50">_</span>patel
              <span className="cursor ml-0.5"></span>
            </h1>
          </Link>

          <div className="flex items-center gap-2">
            {isMobile ? (
              <MobileNav />
            ) : (
              <>
                <Link to="/">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-github-accent/60 text-github-accent hover:bg-github-accent hover:text-white transition-all text-xs"
                  >
                    Terminal Mode
                  </Button>
                </Link>

                {!isHomePage && (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm" className="text-xs transition-all">
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
                        <AlertDialogCancel className="bg-github-dark text-github-text hover:bg-github-border">
                          Cancel
                        </AlertDialogCancel>
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

      {/* Navigation */}
      {!isMobile && (
        <motion.div
          className="border-b border-github-border/50 sticky top-[57px] bg-github-dark/80 backdrop-blur-xl z-10"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <nav className="container mx-auto px-4">
            <ul className="flex overflow-x-auto">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.04, duration: 0.3 }}
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

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-10 relative z-[1]">
        <PageTransition key={location.pathname}>
          {children}
        </PageTransition>
      </main>

      {/* Footer */}
      <footer className="border-t border-github-border/50 py-6 bg-github-dark/80 backdrop-blur-xl relative z-[1]">
        <div className="container mx-auto px-4 text-sm text-center text-github-text/50">
          <span>© {new Date().getFullYear()} Nisarg Patel</span>
          <span className="mx-2">·</span>
          <a
            href="https://github.com/nisargpatel7042lva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-github-accent hover:underline inline-flex items-center gap-1 transition-opacity hover:opacity-80"
          >
            GitHub <ExternalLink size={12} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default GitHubLayout;
