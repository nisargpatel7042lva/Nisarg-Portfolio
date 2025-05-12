
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Sparkle, Wand2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Card {
  id: number;
  icon: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const ICONS = ['🚀', '⭐', '🎮', '🎵', '🎨', '💻', '📱', '🔮'];

const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  
  // Initialize game
  const initializeGame = () => {
    // Create pairs of cards with icons
    const cardPairs = [...ICONS, ...ICONS].map((icon, index) => ({
      id: index,
      icon,
      isFlipped: false,
      isMatched: false
    }));
    
    // Shuffle cards
    const shuffledCards = cardPairs.sort(() => Math.random() - 0.5);
    
    setCards(shuffledCards);
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setGameStarted(true);
    setGameCompleted(false);
  };
  
  // Handle card click
  const handleCardClick = (id: number) => {
    // Prevent clicking if already two cards are flipped or the card is already matched
    if (flippedCards.length >= 2 || cards[id].isMatched || cards[id].isFlipped) {
      return;
    }
    
    // Flip the card
    const updatedCards = cards.map(card => 
      card.id === id ? { ...card, isFlipped: true } : card
    );
    
    const updatedFlippedCards = [...flippedCards, id];
    
    setCards(updatedCards);
    setFlippedCards(updatedFlippedCards);
    
    // Check for matches if two cards are flipped
    if (updatedFlippedCards.length === 2) {
      setMoves(prevMoves => prevMoves + 1);
      
      const [firstIndex, secondIndex] = updatedFlippedCards;
      
      // Check if icons match
      if (cards[firstIndex].icon === cards[secondIndex].icon) {
        // Mark cards as matched
        setTimeout(() => {
          const matchedCards = cards.map(card => 
            card.id === firstIndex || card.id === secondIndex
              ? { ...card, isMatched: true }
              : card
          );
          
          setCards(matchedCards);
          setFlippedCards([]);
          setMatches(prevMatches => {
            const newMatches = prevMatches + 1;
            // Check if game is completed
            if (newMatches === ICONS.length) {
              setGameCompleted(true);
              toast.success("You completed the game!", {
                description: `You found all matches in ${moves + 1} moves!`,
                icon: <Sparkle className="text-github-accent" />
              });
            }
            return newMatches;
          });
        }, 500);
      } else {
        // Flip cards back if no match
        setTimeout(() => {
          const resetFlippedCards = cards.map(card => 
            card.id === firstIndex || card.id === secondIndex
              ? { ...card, isFlipped: false }
              : card
          );
          
          setCards(resetFlippedCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };
  
  // Reset game
  const resetGame = () => {
    initializeGame();
    toast("Game reset! Good luck!");
  };
  
  // Render initial game board or start button
  return (
    <div className="github-card p-6 animated-border">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-github-accent flex items-center gap-2">
          <Sparkle size={20} className="text-github-accent" />
          Memory Match Game
        </h2>
        <div className="text-sm text-github-text">
          Moves: {moves} | Matches: {matches}/{ICONS.length}
        </div>
      </div>
      
      <p className="mb-4 text-github-text">
        Click on cards to reveal them and find matching pairs. Try to complete the game in as few moves as possible!
      </p>
      
      {!gameStarted ? (
        <div className="flex justify-center my-8">
          <Button 
            variant="default"
            className="bg-github-accent hover:bg-github-accent/80 text-white px-8 py-4 text-lg"
            onClick={initializeGame}
          >
            Start Game
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-3 mb-6">
            {cards.map(card => (
              <div
                key={card.id}
                className={cn(
                  "aspect-square flex items-center justify-center text-3xl rounded-md cursor-pointer transition-all duration-300 transform",
                  card.isFlipped || card.isMatched 
                    ? "bg-github-accent text-white rotate-0" 
                    : "bg-github-secondary text-transparent rotate-y-180 hover:bg-github-border",
                  card.isMatched && "opacity-70"
                )}
                onClick={() => handleCardClick(card.id)}
              >
                {(card.isFlipped || card.isMatched) ? card.icon : '?'}
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="border-github-accent text-github-accent hover:bg-github-accent hover:text-white"
              onClick={resetGame}
            >
              Reset Game
            </Button>
          </div>
          
          {gameCompleted && (
            <div className="mt-6 p-4 bg-github-accent/10 border border-github-accent rounded-md text-center">
              <h3 className="text-lg font-medium text-github-accent mb-2">Congratulations!</h3>
              <p>You completed the game in {moves} moves!</p>
              <div className="mt-4">
                <Button
                  variant="default"
                  className="bg-github-accent hover:bg-github-accent/80"
                  onClick={resetGame}
                >
                  Play Again
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MemoryGame;
