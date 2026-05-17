import { lazy, Suspense, useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import LoadingScreen from "./components/LoadingScreen";

// Route-based code splitting — each page is a separate chunk
const Index      = lazy(() => import("./pages/Index"));
const Home       = lazy(() => import("./pages/Home"));
const About      = lazy(() => import("./pages/About"));
const Projects   = lazy(() => import("./pages/Projects"));
const Experience = lazy(() => import("./pages/Experience"));
const Contact    = lazy(() => import("./pages/Contact"));
const Socials    = lazy(() => import("./pages/Socials"));
const Fun        = lazy(() => import("./pages/Fun"));
const Blog       = lazy(() => import("./pages/Blog"));
const NotFound   = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 min
      gcTime: 10 * 60 * 1000,   // 10 min
    },
  },
});

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/"           element={<Index />} />
              <Route path="/home"       element={<Home />} />
              <Route path="/about"      element={<About />} />
              <Route path="/projects"   element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact"    element={<Contact />} />
              <Route path="/socials"    element={<Socials />} />
              <Route path="/fun"        element={<Fun />} />
              <Route path="/blog"       element={<Blog />} />
              <Route path="*"           element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
