
import React, { useState } from 'react';
import { Check, X, Code, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { cn } from '@/lib/utils';

interface QuizQuestion {
  id: number;
  question: string;
  code?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "What will be logged to the console?",
    code: `const x = 5;
const y = "5";
console.log(x == y);
console.log(x === y);`,
    options: [
      "true, true",
      "true, false",
      "false, true",
      "false, false"
    ],
    correctAnswer: 1,
    explanation: "The == operator performs type coercion, so 5 == '5' is true. The === operator compares without type coercion, so 5 === '5' is false."
  },
  {
    id: 2,
    question: "What is the output of this code?",
    code: `const arr = [1, 2, 3];
const result = arr.map(x => x * 2);
console.log(result);`,
    options: [
      "[1, 2, 3]",
      "[2, 4, 6]",
      "undefined",
      "Error"
    ],
    correctAnswer: 1,
    explanation: "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array."
  },
  {
    id: 3,
    question: "Which statement correctly creates a Promise?",
    options: [
      "new Promise(resolve, reject) => { }",
      "new Promise((resolve, reject) => { })",
      "Promise.create((resolve, reject) => { })",
      "Promise((resolve, reject) => { })"
    ],
    correctAnswer: 1,
    explanation: "A Promise is created using the new Promise() constructor which takes an executor function with resolve and reject parameters."
  },
  {
    id: 4,
    question: "What is the correct way to check if an object has a property?",
    options: [
      "object.hasProperty('propertyName')",
      "object.contains('propertyName')",
      "'propertyName' in object",
      "object.includes('propertyName')"
    ],
    correctAnswer: 2,
    explanation: "The 'in' operator returns true if the specified property is in the specified object or its prototype chain."
  },
  {
    id: 5,
    question: "What does the following code output?",
    code: `const obj = { a: 1 };
const copy = Object.assign({}, obj);
copy.a = 2;
console.log(obj.a);`,
    options: [
      "1",
      "2",
      "undefined",
      "Error"
    ],
    correctAnswer: 0,
    explanation: "Object.assign() creates a new object with copied values. Modifying the copy doesn't affect the original object."
  }
];

const CodeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(quizData.length).fill(null));

  const startQuiz = () => {
    setQuizStarted(true);
    setShowResults(false);
    setCurrentQuestion(0);
    setScore(0);
    setUserAnswers(Array(quizData.length).fill(null));
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    // Update user answers array
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = answerIndex;
    setUserAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }
    
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
      setSelectedAnswer(userAnswers[currentQuestion + 1]);
    } else {
      setShowResults(true);
      toast.success("Quiz completed!", {
        description: `Your score: ${score} out of ${quizData.length}`,
        icon: <Code className="text-github-accent" />
      });
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prevQuestion => prevQuestion - 1);
      setSelectedAnswer(userAnswers[currentQuestion - 1]);
    }
  };

  if (!quizStarted) {
    return (
      <div className="bg-github-secondary border border-github-border rounded-md p-6 animated-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-github-accent flex items-center gap-2">
            <Code size={20} className="text-github-accent" />
            Web Development Quiz
          </h2>
        </div>
        
        <p className="mb-6 text-github-text">
          Test your knowledge of JavaScript, HTML, CSS, and React with this interactive quiz. 
          Each question will challenge your understanding of key web development concepts.
        </p>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3 p-3 bg-github-dark/40 rounded-md">
            <div className="mt-1 text-github-accent"><Check size={16} /></div>
            <div>
              <h3 className="font-medium text-github-accent">Multiple Choice</h3>
              <p className="text-sm text-github-text">Answer 5 questions about web development concepts</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-github-dark/40 rounded-md">
            <div className="mt-1 text-github-accent"><Code size={16} /></div>
            <div>
              <h3 className="font-medium text-github-accent">Code Snippets</h3>
              <p className="text-sm text-github-text">Analyze code and predict the output</p>
            </div>
          </div>
        </div>
        
        <Button 
          className="bg-github-accent hover:bg-github-accent/80 w-full"
          onClick={startQuiz}
        >
          Start Quiz
        </Button>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="bg-github-secondary border border-github-border rounded-md p-6 animated-border">
        <h2 className="text-xl font-semibold text-github-accent mb-4">Quiz Results</h2>
        
        <div className="text-center py-4 mb-6">
          <div className="text-4xl font-bold text-github-accent mb-2">{score} / {quizData.length}</div>
          <p className="text-github-text">
            {score === quizData.length 
              ? 'Perfect score! Excellent work!' 
              : score >= quizData.length * 0.7 
                ? 'Great job! You know your stuff!' 
                : 'Keep practicing! You\'ll get better!'}
          </p>
        </div>
        
        <div className="space-y-4 mb-6">
          {quizData.map((question, index) => (
            <Card key={question.id} className={cn(
              "p-4 border",
              userAnswers[index] === question.correctAnswer 
                ? "border-github-green bg-github-green/10" 
                : "border-github-danger bg-github-danger/10"
            )}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Question {index + 1}</span>
                <span className="flex items-center">
                  {userAnswers[index] === question.correctAnswer
                    ? <><Check size={16} className="text-github-green mr-1" /> Correct</>
                    : <><X size={16} className="text-github-danger mr-1" /> Incorrect</>
                  }
                </span>
              </div>
              <p className="text-sm text-github-text mb-2">{question.question}</p>
              <p className="text-sm italic text-github-text">
                Correct answer: {question.options[question.correctAnswer]}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="flex gap-4">
          <Button 
            className="flex-1 bg-github-secondary border-github-border hover:bg-github-dark"
            variant="outline"
            onClick={() => setShowResults(false)}
          >
            Review Questions
          </Button>
          <Button 
            className="flex-1 bg-github-accent hover:bg-github-accent/80"
            onClick={startQuiz}
          >
            Retake Quiz
          </Button>
        </div>
      </div>
    );
  }

  const currentQuizQuestion = quizData[currentQuestion];

  return (
    <div className="bg-github-secondary border border-github-border rounded-md p-6 animated-border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-github-accent flex items-center gap-2">
          <Code size={20} className="text-github-accent" />
          Question {currentQuestion + 1} of {quizData.length}
        </h2>
        <div className="text-sm text-github-text">
          Score: {score}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">{currentQuizQuestion.question}</h3>
        
        {currentQuizQuestion.code && (
          <pre className="bg-github-dark p-4 rounded-md overflow-x-auto mb-4 text-sm">
            <code className="text-github-text">{currentQuizQuestion.code}</code>
          </pre>
        )}
        
        <div className="space-y-3 mt-4">
          {currentQuizQuestion.options.map((option, index) => (
            <div 
              key={index}
              className={cn(
                "flex items-center space-x-2 p-3 rounded-md border border-github-border cursor-pointer transition-colors",
                selectedAnswer === index && "border-github-accent bg-github-accent/10",
                selectedAnswer !== index && "hover:bg-github-dark/50"
              )}
              onClick={() => handleAnswerSelect(index)}
            >
              <Checkbox 
                checked={selectedAnswer === index}
                onCheckedChange={() => handleAnswerSelect(index)}
                className={cn(
                  selectedAnswer === index ? "border-github-accent" : "border-github-border",
                  "rounded-sm"
                )}
              />
              <label 
                className={cn(
                  "text-sm cursor-pointer flex-grow",
                  selectedAnswer === index ? "text-github-accent" : "text-github-text"
                )}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between mt-6">
        <Button 
          disabled={currentQuestion === 0} 
          onClick={handlePrevQuestion}
          variant="outline"
          className="border-github-border"
        >
          Previous
        </Button>
        
        <Button 
          disabled={selectedAnswer === null} 
          onClick={handleNextQuestion}
          className="bg-github-accent hover:bg-github-accent/80"
        >
          {currentQuestion === quizData.length - 1 ? 'Finish' : 'Next'}
          {currentQuestion !== quizData.length - 1 && <ArrowRight size={16} className="ml-1" />}
        </Button>
      </div>
    </div>
  );
};

export default CodeQuiz;
