
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Sparkle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface InteractiveGridProps {
  onCanvasRef?: (canvas: HTMLCanvasElement | null) => void;
}

const InteractiveGrid: React.FC<InteractiveGridProps> = ({ onCanvasRef }) => {
  const [grid, setGrid] = useState<number[][]>([]);
  const [isRainbowMode, setIsRainbowMode] = useState(false);
  const [contributionCount, setContributionCount] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Colors based on contribution count (GitHub style)
  const getColor = (value: number, rainbowMode: boolean) => {
    if (rainbowMode) {
      // Rainbow mode colors
      const rainbowColors = [
        "bg-red-500", "bg-orange-500", "bg-yellow-500", 
        "bg-green-500", "bg-blue-500", "bg-indigo-500", "bg-violet-500"
      ];
      return value === 0 ? "bg-github-secondary" : rainbowColors[value % rainbowColors.length];
    } else {
      // GitHub-style colors
      if (value === 0) return "bg-github-secondary";
      if (value === 1) return "bg-github-accent/20";
      if (value === 2) return "bg-github-accent/40";
      if (value === 3) return "bg-github-accent/60";
      if (value === 4) return "bg-github-accent/80";
      return "bg-github-accent";
    }
  };

  // Get color value for canvas
  const getCanvasColor = (value: number, rainbowMode: boolean) => {
    if (rainbowMode) {
      // Rainbow mode colors for canvas
      const rainbowColors = [
        "#f87171", "#fb923c", "#facc15", 
        "#4ade80", "#60a5fa", "#818cf8", "#c084fc"
      ];
      return value === 0 ? "#2d3748" : rainbowColors[value % rainbowColors.length];
    } else {
      // GitHub-style colors for canvas
      if (value === 0) return "#2d3748";
      if (value === 1) return "rgba(139, 92, 246, 0.2)";
      if (value === 2) return "rgba(139, 92, 246, 0.4)";
      if (value === 3) return "rgba(139, 92, 246, 0.6)";
      if (value === 4) return "rgba(139, 92, 246, 0.8)";
      return "#8b5cf6"; // github-accent color
    }
  };

  // Initialize the grid
  useEffect(() => {
    const rows = 7;
    const cols = 20;
    
    const initialGrid = Array(rows).fill(0).map(() => 
      Array(cols).fill(0)
    );
    
    setGrid(initialGrid);
  }, []);

  // Handle cell click
  const handleCellClick = (rowIndex: number, colIndex: number) => {
    const newGrid = [...grid];
    // Cycle through values 0-5
    newGrid[rowIndex][colIndex] = (newGrid[rowIndex][colIndex] + 1) % 6;
    setGrid(newGrid);
    
    // Update contribution count
    if (newGrid[rowIndex][colIndex] > 0) {
      setContributionCount(prev => prev + 1);
      if (contributionCount + 1 === 10) {
        toast.success("You're getting the hang of it!", {
          icon: <Sparkle className="text-github-accent" />
        });
      } else if (contributionCount + 1 === 50) {
        toast.success("Look at you go! 50 contributions!", {
          icon: <Sparkle className="text-github-accent" />
        });
      }
    }
    
    // Update canvas
    updateCanvas(newGrid);
  };

  // Generate a random pattern
  const generateRandomPattern = () => {
    const newGrid = grid.map(row => 
      row.map(() => Math.floor(Math.random() * 6))
    );
    setGrid(newGrid);
    
    // Count non-zero cells for contribution count
    const contributions = newGrid.flat().filter(cell => cell > 0).length;
    setContributionCount(contributions);
    
    toast.success("Random pattern generated!", {
      description: `${contributions} squares filled`,
      icon: <Sparkle className="text-github-accent" />
    });
    
    // Update canvas
    updateCanvas(newGrid);
  };

  // Clear the grid
  const clearGrid = () => {
    const emptyGrid = grid.map(row => 
      row.map(() => 0)
    );
    setGrid(emptyGrid);
    setContributionCount(0);
    
    toast("Grid cleared", {
      description: "Start creating your pattern!"
    });
    
    // Update canvas
    updateCanvas(emptyGrid);
  };

  // Toggle rainbow mode
  const toggleRainbowMode = () => {
    setIsRainbowMode(!isRainbowMode);
    toast(isRainbowMode ? "GitHub mode activated" : "Rainbow mode activated!", {
      icon: isRainbowMode ? undefined : <Sparkle className="text-github-accent" />
    });
    
    // Update canvas with new color scheme
    updateCanvas(grid, !isRainbowMode);
  };

  // Update canvas for exporting
  const updateCanvas = (currentGrid: number[][], rainbowMode = isRainbowMode) => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const cellSize = 30;
    const padding = 5;
    canvas.width = currentGrid[0].length * (cellSize + padding) - padding;
    canvas.height = currentGrid.length * (cellSize + padding) - padding;
    
    // Clear canvas with dark background
    ctx.fillStyle = '#1a1f2c';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw cells
    currentGrid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        ctx.fillStyle = getCanvasColor(cell, rainbowMode);
        ctx.fillRect(
          colIndex * (cellSize + padding),
          rowIndex * (cellSize + padding),
          cellSize,
          cellSize
        );
      });
    });
    
    // Pass canvas reference to parent component if callback exists
    if (onCanvasRef) {
      onCanvasRef(canvas);
    }
  };

  // Update canvas when component mounts
  useEffect(() => {
    if (grid.length > 0 && grid[0].length > 0) {
      updateCanvas(grid);
    }
  }, [grid.length]);

  return (
    <div className="github-card p-6 animated-border">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-github-accent flex items-center gap-2">
          <Sparkle size={20} className="text-github-accent" />
          Interactive Contribution Grid
        </h2>
        <div className="text-sm text-github-text">
          Contributions: {contributionCount}
        </div>
      </div>
      
      <p className="mb-4 text-github-text">
        Click on squares to create your own contribution pattern. Inspired by GitHub's contribution graph!
      </p>
      
      <div className="flex justify-center mb-6">
        <div className="grid gap-1 p-2 bg-github-dark rounded-md">
          {grid.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="flex gap-1">
              {row.map((cell, colIndex) => (
                <div
                  key={`cell-${rowIndex}-${colIndex}`}
                  className={cn(
                    "w-4 h-4 rounded-sm cursor-pointer transition-colors",
                    getColor(cell, isRainbowMode)
                  )}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-3 justify-center">
        <Button 
          variant="default" 
          size="sm" 
          className="bg-github-accent hover:bg-github-accent/80"
          onClick={generateRandomPattern}
        >
          Random Pattern
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="border-github-accent text-github-accent hover:bg-github-accent hover:text-white"
          onClick={toggleRainbowMode}
        >
          {isRainbowMode ? "GitHub Mode" : "Rainbow Mode"}
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="border-github-border text-github-text hover:bg-github-border"
          onClick={clearGrid}
        >
          Clear Grid
        </Button>
      </div>
      
      {/* Hidden canvas for exporting */}
      <canvas 
        ref={canvasRef} 
        className="hidden" 
        aria-hidden="true"
      />
    </div>
  );
};

export default InteractiveGrid;
