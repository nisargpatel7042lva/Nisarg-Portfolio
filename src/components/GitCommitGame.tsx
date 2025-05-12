
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { GitBranch, GitCommitHorizontal, GitMerge, Code, Sparkle, Undo } from 'lucide-react';

interface Commit {
  id: string;
  message: string;
  branch: string;
  parentId: string | null;
  x: number;
  y: number;
}

interface Branch {
  name: string;
  head: string; // commit id that is the head of this branch
  color: string;
}

const BRANCH_COLORS = [
  "#2da44e", // main - green
  "#8250df", // purple
  "#0969da", // blue
  "#bf3989", // magenta
  "#d4a72c", // yellow
  "#cf222e", // red
];

const GitCommitGame: React.FC = () => {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [activeBranch, setActiveBranch] = useState<string>('');
  const [commitMessage, setCommitMessage] = useState<string>('');
  const [level, setLevel] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [selectedCommit, setSelectedCommit] = useState<string | null>(null);
  const [mergingFrom, setMergingFrom] = useState<string | null>(null);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [challenge, setChallenge] = useState<string>('Create your first commit on main');
  
  const svgRef = useRef<SVGSVGElement>(null);

  // Initialize game
  const startGame = () => {
    // Create initial main branch
    const mainBranch: Branch = {
      name: 'main',
      head: 'initial',
      color: BRANCH_COLORS[0]
    };
    
    // Create initial commit
    const initialCommit: Commit = {
      id: 'initial',
      message: 'Initial commit',
      branch: 'main',
      parentId: null,
      x: 50,
      y: 50
    };
    
    setCommits([initialCommit]);
    setBranches([mainBranch]);
    setActiveBranch('main');
    setGameStarted(true);
    
    toast.success("Game started!", {
      description: "Create your first commit on main branch",
      icon: <GitCommitHorizontal className="text-github-accent" />
    });
  };

  // Create a new commit on the active branch
  const createCommit = () => {
    // Find current branch
    const branch = branches.find(b => b.name === activeBranch);
    if (!branch) return;
    
    // Find head commit of this branch
    const headCommit = commits.find(c => c.id === branch.head);
    if (!headCommit) return;
    
    const message = commitMessage.trim() || `Commit on ${activeBranch}`;
    
    // Create new commit
    const newCommitId = `commit-${Date.now()}`;
    const newCommit: Commit = {
      id: newCommitId,
      message,
      branch: activeBranch,
      parentId: headCommit.id,
      x: headCommit.x + 80,
      y: headCommit.y
    };
    
    // Update branch head
    const updatedBranches = branches.map(b => 
      b.name === activeBranch ? { ...b, head: newCommitId } : b
    );
    
    setCommits([...commits, newCommit]);
    setBranches(updatedBranches);
    setCommitMessage('');
    setScore(score + 10);
    
    // Check level progression
    checkLevelProgress([...commits, newCommit], updatedBranches);
    
    toast.success("New commit created!", {
      description: message,
      icon: <GitCommitHorizontal className="text-github-accent" />
    });
  };

  // Create a new branch from selected commit
  const createBranch = () => {
    if (!selectedCommit) {
      toast.error("Select a commit first to branch from");
      return;
    }
    
    const branchName = prompt("Enter new branch name:");
    if (!branchName || branches.some(b => b.name === branchName)) {
      toast.error("Invalid branch name or already exists");
      return;
    }
    
    // Assign a color to the new branch
    const colorIndex = branches.length % BRANCH_COLORS.length;
    
    const newBranch: Branch = {
      name: branchName,
      head: selectedCommit,
      color: BRANCH_COLORS[colorIndex]
    };
    
    setBranches([...branches, newBranch]);
    setActiveBranch(branchName);
    setScore(score + 20);
    setSelectedCommit(null);
    
    toast.success("New branch created!", {
      description: `Branch '${branchName}' created from commit ${selectedCommit.substring(0, 7)}`,
      icon: <GitBranch className="text-github-accent" />
    });
  };

  // Merge a branch into the active branch
  const mergeBranch = () => {
    if (!mergingFrom) {
      toast.error("Select a branch to merge from");
      return;
    }
    
    if (mergingFrom === activeBranch) {
      toast.error("Cannot merge a branch into itself");
      setMergingFrom(null);
      return;
    }
    
    const sourceBranch = branches.find(b => b.name === mergingFrom);
    const targetBranch = branches.find(b => b.name === activeBranch);
    
    if (!sourceBranch || !targetBranch) {
      toast.error("Branch not found");
      setMergingFrom(null);
      return;
    }
    
    // Find the head commits
    const sourceHead = commits.find(c => c.id === sourceBranch.head);
    const targetHead = commits.find(c => c.id === targetBranch.head);
    
    if (!sourceHead || !targetHead) {
      toast.error("Commit not found");
      setMergingFrom(null);
      return;
    }
    
    // Create merge commit
    const mergeCommitId = `merge-${Date.now()}`;
    const mergeCommit: Commit = {
      id: mergeCommitId,
      message: `Merge ${mergingFrom} into ${activeBranch}`,
      branch: activeBranch,
      parentId: targetHead.id, // Main parent
      x: targetHead.x + 80,
      y: targetHead.y
    };
    
    // Update target branch head
    const updatedBranches = branches.map(b => 
      b.name === activeBranch ? { ...b, head: mergeCommitId } : b
    );
    
    setCommits([...commits, mergeCommit]);
    setBranches(updatedBranches);
    setMergingFrom(null);
    setScore(score + 30);
    
    toast.success("Branches merged!", {
      description: `Merged ${mergingFrom} into ${activeBranch}`,
      icon: <GitMerge className="text-github-accent" />
    });
  };

  // Check for level progression
  const checkLevelProgress = (currentCommits: Commit[], currentBranches: Branch[]) => {
    switch (level) {
      case 1:
        // Level 1: Create first commit on main
        if (currentCommits.length >= 2) {
          setLevel(2);
          setChallenge('Create a new branch and add a commit to it');
        }
        break;
      case 2:
        // Level 2: Create a branch and add commit
        if (currentBranches.length >= 2) {
          const nonMainBranch = currentBranches.find(b => b.name !== 'main');
          if (nonMainBranch && currentCommits.some(c => c.branch === nonMainBranch.name)) {
            setLevel(3);
            setChallenge('Merge your feature branch back into main');
          }
        }
        break;
      case 3:
        // Level 3: Merge a branch into main
        const mergeCommits = currentCommits.filter(c => c.message.startsWith('Merge'));
        if (mergeCommits.length > 0) {
          setLevel(4);
          setChallenge('Create two branches and merge them both into main');
        }
        break;
      default:
        break;
    }
  };

  // Reset game
  const resetGame = () => {
    setCommits([]);
    setBranches([]);
    setActiveBranch('');
    setSelectedCommit(null);
    setMergingFrom(null);
    setScore(0);
    setLevel(1);
    setChallenge('Create your first commit on main');
    setGameStarted(false);
  };

  // Calculate connections between commits for rendering
  const getConnections = () => {
    return commits.filter(c => c.parentId).map(c => {
      const parent = commits.find(p => p.id === c.parentId);
      if (!parent) return null;
      return {
        from: parent,
        to: c
      };
    }).filter(Boolean);
  };

  return (
    <div className="github-card animated-border">
      {!gameStarted ? (
        <div className="flex flex-col items-center p-8 gap-4">
          <h2 className="text-2xl font-bold text-github-accent flex items-center gap-2">
            <GitCommitHorizontal className="text-github-accent" />
            Git Commit Game
          </h2>
          <p className="text-center max-w-lg mb-4">
            Learn about git workflows by creating commits, branches and merges.
            Complete challenges to level up and become a git master!
          </p>
          <Button 
            onClick={startGame}
            className="bg-github-accent hover:bg-github-accent/80 text-white"
          >
            Start Game
          </Button>
        </div>
      ) : (
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-sm font-semibold">Level: {level}</span>
              <span className="mx-4 text-sm font-semibold">Score: {score}</span>
            </div>
            <div className="flex items-center bg-github-dark/30 px-3 py-1 rounded-md">
              <Sparkle size={16} className="text-github-accent mr-2" />
              <span className="text-sm">{challenge}</span>
            </div>
          </div>
          
          {/* Git visualization area */}
          <div className="bg-github-dark/20 border border-dashed border-github-border rounded-md p-4 mb-4 overflow-x-auto">
            <svg ref={svgRef} width="100%" height="300" className="min-w-[500px]">
              {/* Draw connections between commits */}
              {getConnections().map((conn: any, i) => (
                <line 
                  key={`conn-${i}`}
                  x1={conn.from.x + 20} 
                  y1={conn.from.y + 20} 
                  x2={conn.to.x + 20} 
                  y2={conn.to.y + 20}
                  stroke={branches.find(b => b.name === conn.to.branch)?.color || "#ccc"}
                  strokeWidth="2"
                />
              ))}
              
              {/* Draw commits */}
              {commits.map(commit => {
                const branchColor = branches.find(b => b.name === commit.branch)?.color || "#ccc";
                return (
                  <g 
                    key={commit.id} 
                    transform={`translate(${commit.x}, ${commit.y})`}
                    onClick={() => setSelectedCommit(commit.id === selectedCommit ? null : commit.id)}
                    className="cursor-pointer"
                  >
                    <circle 
                      r="20" 
                      fill={commit.id === selectedCommit ? "#fff" : "#2d333b"} 
                      stroke={branchColor}
                      strokeWidth="3"
                    />
                    <circle 
                      r="10" 
                      fill={branchColor} 
                    />
                    <title>{commit.message}</title>
                  </g>
                );
              })}
              
              {/* Draw branch labels */}
              {branches.map((branch, i) => {
                const headCommit = commits.find(c => c.id === branch.head);
                if (!headCommit) return null;
                return (
                  <g 
                    key={`branch-${branch.name}`} 
                    transform={`translate(${headCommit.x}, ${headCommit.y - 30})`}
                    className="cursor-pointer"
                    onClick={() => setActiveBranch(branch.name)}
                  >
                    <rect
                      x="-40"
                      y="-15"
                      width="80"
                      height="20"
                      rx="10"
                      fill={branch.name === activeBranch ? branch.color : "transparent"}
                      stroke={branch.color}
                      strokeWidth="2"
                    />
                    <text
                      fill={branch.name === activeBranch ? "white" : branch.color}
                      fontSize="10"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      {branch.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          
          {/* Controls */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 bg-github-secondary p-3 rounded-md">
              <div className="font-medium">Active Branch:</div>
              <div className="flex gap-2 overflow-x-auto">
                {branches.map(branch => (
                  <Button
                    key={branch.name}
                    size="sm"
                    variant={branch.name === activeBranch ? "default" : "outline"}
                    style={{ 
                      backgroundColor: branch.name === activeBranch ? branch.color : 'transparent',
                      borderColor: branch.color,
                      color: branch.name === activeBranch ? 'white' : branch.color
                    }}
                    onClick={() => setActiveBranch(branch.name)}
                    className="min-w-fit"
                  >
                    <GitBranch size={14} className="mr-1" />
                    {branch.name}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center flex-grow gap-2">
                <input
                  type="text"
                  placeholder="Commit message"
                  value={commitMessage}
                  onChange={(e) => setCommitMessage(e.target.value)}
                  className="flex-grow bg-github-dark/20 border border-github-border rounded-md p-2 text-sm"
                />
                <Button 
                  onClick={createCommit} 
                  className="bg-green-600 hover:bg-green-700"
                >
                  <GitCommitHorizontal size={16} className="mr-1" /> 
                  Commit
                </Button>
              </div>
              
              <Button 
                onClick={createBranch} 
                disabled={!selectedCommit}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <GitBranch size={16} className="mr-1" /> 
                Create Branch
              </Button>
              
              <div className="flex items-center gap-2">
                <select 
                  onChange={(e) => setMergingFrom(e.target.value)}
                  value={mergingFrom || ""}
                  className="bg-github-dark/20 border border-github-border rounded-md p-2 text-sm"
                >
                  <option value="">Select branch to merge from</option>
                  {branches.map(branch => (
                    <option key={branch.name} value={branch.name}>
                      {branch.name}
                    </option>
                  ))}
                </select>
                <Button 
                  onClick={mergeBranch} 
                  disabled={!mergingFrom}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <GitMerge size={16} className="mr-1" /> 
                  Merge
                </Button>
              </div>
              
              <Button 
                variant="destructive" 
                onClick={resetGame} 
                className="ml-auto"
              >
                <Undo size={16} className="mr-1" /> Reset
              </Button>
            </div>
          </div>
          
          {/* Status area */}
          <div className="mt-4 bg-github-secondary p-3 rounded-md">
            {selectedCommit ? (
              <div className="flex items-center gap-2 text-sm">
                <Code size={16} className="text-github-accent" />
                <span>Selected commit: </span>
                <span className="bg-github-dark/30 px-2 py-1 rounded-md font-mono">
                  {selectedCommit.substring(0, 7)}
                </span>
                <span className="text-github-text">
                  {commits.find(c => c.id === selectedCommit)?.message}
                </span>
              </div>
            ) : (
              <div className="text-sm text-github-text">
                <Code size={16} className="inline mr-2 text-github-accent" />
                Click on a commit to select it for branching
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GitCommitGame;
