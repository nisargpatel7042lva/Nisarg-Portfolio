
import React, { useState, useEffect } from 'react';
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
  language?: string;
}

const quizData: QuizQuestion[] = [
  // JavaScript Questions
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
    explanation: "The == operator performs type coercion, so 5 == '5' is true. The === operator compares without type coercion, so 5 === '5' is false.",
    language: "JavaScript"
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
    explanation: "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.",
    language: "JavaScript"
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
    explanation: "A Promise is created using the new Promise() constructor which takes an executor function with resolve and reject parameters.",
    language: "JavaScript"
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
    explanation: "The 'in' operator returns true if the specified property is in the specified object or its prototype chain.",
    language: "JavaScript"
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
    explanation: "Object.assign() creates a new object with copied values. Modifying the copy doesn't affect the original object.",
    language: "JavaScript"
  },
  // Python Questions
  {
    id: 6,
    question: "What will this Python code print?",
    code: `x = [1, 2, 3]
y = x
y.append(4)
print(x)`,
    options: [
      "[1, 2, 3]",
      "[1, 2, 3, 4]",
      "[1, 2, 3, [4]]",
      "Error"
    ],
    correctAnswer: 1,
    explanation: "In Python, assignment creates a reference to the same object. When y.append(4) is called, it modifies the list that both x and y refer to.",
    language: "Python"
  },
  {
    id: 7,
    question: "What is the output of this Python code?",
    code: `def func(a, b=[]):
    b.append(a)
    return b

print(func(1))
print(func(2))`,
    options: [
      "[1] [2]",
      "[1] [1, 2]",
      "[1, 2] [1, 2]",
      "Error"
    ],
    correctAnswer: 1,
    explanation: "Default arguments in Python are evaluated once when the function is defined, not each time the function is called. The list b is created once and reused across calls.",
    language: "Python"
  },
  {
    id: 8,
    question: "What does this Python list comprehension do?",
    code: `result = [x for x in range(10) if x % 2 == 0]
print(result)`,
    options: [
      "Creates a list of all numbers from 0 to 9",
      "Creates a list of even numbers from 0 to 9",
      "Creates a list of odd numbers from 0 to 9",
      "Creates a list of all numbers from 0 to 10"
    ],
    correctAnswer: 1,
    explanation: "This list comprehension filters numbers from 0 to 9 that are divisible by 2 (even numbers).",
    language: "Python"
  },
  // HTML/CSS Questions
  {
    id: 9,
    question: "Which of the following is the correct way to include an external CSS file?",
    options: [
      "<style src='styles.css'>",
      "<link rel='stylesheet' type='text/css' href='styles.css'>",
      "<css import='styles.css'>",
      "<script src='styles.css'>"
    ],
    correctAnswer: 1,
    explanation: "The <link> element with rel='stylesheet' is used to include external CSS files.",
    language: "HTML"
  },
  {
    id: 10,
    question: "What will this CSS selector target?",
    code: `div > p { color: red; }`,
    options: [
      "All p elements",
      "All p elements that are descendants of div elements",
      "Only p elements that are direct children of div elements",
      "The first p element inside a div"
    ],
    correctAnswer: 2,
    explanation: "The > selector selects elements that are direct children of the specified element.",
    language: "CSS"
  },
  // SQL Questions
  {
    id: 11,
    question: "Which SQL statement is used to extract data from a database?",
    options: [
      "EXTRACT",
      "SELECT",
      "GET",
      "OPEN"
    ],
    correctAnswer: 1,
    explanation: "The SELECT statement is used to select data from a database.",
    language: "SQL"
  },
  {
    id: 12,
    question: "What does the following SQL query do?",
    code: `SELECT COUNT(*) FROM users WHERE age > 18;`,
    options: [
      "Returns all users older than 18",
      "Returns the number of users older than 18",
      "Returns the first user older than 18",
      "Returns the average age of users older than 18"
    ],
    correctAnswer: 1,
    explanation: "COUNT(*) counts the number of rows that match the specified condition.",
    language: "SQL"
  },
  // React/JSX Questions
  {
    id: 13,
    question: "What is wrong with this React component?",
    code: `function Counter() {
  let count = 0;
  
  function handleClick() {
    count += 1;
  }
  
  return (
    <button onClick={handleClick}>
      Count: {count}
    </button>
  );
}`,
    options: [
      "The component name should be capitalized",
      "The onclick handler should be camelCase",
      "The component doesn't use state, so it won't re-render when count changes",
      "The handleClick function should be an arrow function"
    ],
    correctAnswer: 2,
    explanation: "When count changes, React won't re-render the component because count is a regular variable, not state. Use useState to trigger re-renders.",
    language: "React"
  },
  {
    id: 14,
    question: "What will this React code render?",
    code: `function List() {
  const items = ['Apple', 'Banana', 'Cherry'];
  
  return (
    <ul>
      {items.map(item => <li>{item}</li>)}
    </ul>
  );
}`,
    options: [
      "A list with three items, but with a console warning",
      "A list with three items with no issues",
      "A list with one item containing 'Apple,Banana,Cherry'",
      "Nothing, it will throw an error"
    ],
    correctAnswer: 0,
    explanation: "The code will render a list with three items, but React will give a warning about missing 'key' prop for elements in the array.",
    language: "React"
  },
  // TypeScript Questions
  {
    id: 15,
    question: "What does the TypeScript 'as' keyword do in this code?",
    code: `const value: any = "hello";
const length: number = (value as string).length;`,
    options: [
      "It converts the value to a string",
      "It tells TypeScript to treat the value as a string type",
      "It creates a new string variable",
      "It performs runtime type checking"
    ],
    correctAnswer: 1,
    explanation: "The 'as' keyword is a type assertion that tells TypeScript to treat a value as a specific type (in this case, a string).",
    language: "TypeScript"
  }
];

const CodeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([]);
  const [shuffledOptions, setShuffledOptions] = useState<{ text: string, index: number }[][]>([]);

  // Function to shuffle an array (Fisher-Yates algorithm)
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Start quiz with shuffled questions and options
  const startQuiz = () => {
    // Shuffle questions
    const shuffled = shuffleArray(quizData);
    setShuffledQuestions(shuffled.slice(0, 10)); // Only use 10 questions per quiz
    
    // Prepare shuffled options for each question
    const optionsArray = shuffled.slice(0, 10).map(question => {
      return shuffleArray(
        question.options.map((text, index) => ({ 
          text, 
          index // Store original index to track correct answer
        }))
      );
    });
    
    setShuffledOptions(optionsArray);
    setUserAnswers(Array(10).fill(null));
    setQuizStarted(true);
    setShowResults(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
  };

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    
    // Update user answers array
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = optionIndex;
    setUserAnswers(updatedAnswers);
  };

  const isCorrectAnswer = (questionIndex: number, selectedOptionIndex: number | null) => {
    if (selectedOptionIndex === null) return false;
    
    const selectedOriginalIndex = shuffledOptions[questionIndex][selectedOptionIndex].index;
    return selectedOriginalIndex === shuffledQuestions[questionIndex].correctAnswer;
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null && isCorrectAnswer(currentQuestion, selectedAnswer)) {
      setScore(prevScore => prevScore + 1);
    }
    
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
      setSelectedAnswer(userAnswers[currentQuestion + 1]);
    } else {
      setShowResults(true);
      toast.success("Quiz completed!", {
        description: `Your score: ${score} out of ${shuffledQuestions.length}`,
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
            Programming Language Quiz
          </h2>
        </div>
        
        <p className="mb-6 text-github-text">
          Test your knowledge across multiple programming languages including JavaScript, Python, HTML/CSS, SQL, React, and TypeScript. 
          Each quiz features 10 randomly selected questions with shuffled options to challenge you every time.
        </p>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3 p-3 bg-github-dark/40 rounded-md">
            <div className="mt-1 text-github-accent"><Check size={16} /></div>
            <div>
              <h3 className="font-medium text-github-accent">Multiple Choice</h3>
              <p className="text-sm text-github-text">Answer 10 randomly selected questions from our database</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-github-dark/40 rounded-md">
            <div className="mt-1 text-github-accent"><Code size={16} /></div>
            <div>
              <h3 className="font-medium text-github-accent">Code Snippets</h3>
              <p className="text-sm text-github-text">Analyze code and predict the output across multiple languages</p>
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
          <div className="text-4xl font-bold text-github-accent mb-2">{score} / {shuffledQuestions.length}</div>
          <p className="text-github-text">
            {score === shuffledQuestions.length 
              ? 'Perfect score! Excellent work!' 
              : score >= shuffledQuestions.length * 0.7 
                ? 'Great job! You know your stuff!' 
                : 'Keep practicing! You\'ll get better!'}
          </p>
        </div>
        
        <div className="space-y-4 mb-6">
          {shuffledQuestions.map((question, index) => (
            <Card key={question.id} className={cn(
              "p-4 border",
              isCorrectAnswer(index, userAnswers[index])
                ? "border-github-green bg-github-green/10" 
                : "border-github-danger bg-github-danger/10"
            )}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Question {index + 1}</span>
                <span className="flex items-center">
                  {isCorrectAnswer(index, userAnswers[index])
                    ? <><Check size={16} className="text-github-green mr-1" /> Correct</>
                    : <><X size={16} className="text-github-danger mr-1" /> Incorrect</>
                  }
                </span>
              </div>
              <p className="text-sm text-github-text mb-2">{question.question}</p>
              <p className="text-sm italic text-github-text">
                Correct answer: {question.options[question.correctAnswer]}
              </p>
              {question.language && (
                <p className="text-xs text-gray-500 mt-1">Language: {question.language}</p>
              )}
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

  const currentQuizQuestion = shuffledQuestions[currentQuestion];

  return (
    <div className="bg-github-secondary border border-github-border rounded-md p-6 animated-border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-github-accent flex items-center gap-2">
          <Code size={20} className="text-github-accent" />
          Question {currentQuestion + 1} of {shuffledQuestions.length}
        </h2>
        <div className="text-sm text-github-text">
          Score: {score}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">{currentQuizQuestion.question}</h3>
        
        {currentQuizQuestion.language && (
          <div className="inline-block px-2 py-1 rounded-full bg-github-dark/50 text-xs mb-3">
            {currentQuizQuestion.language}
          </div>
        )}
        
        {currentQuizQuestion.code && (
          <pre className="bg-github-dark p-4 rounded-md overflow-x-auto mb-4 text-sm">
            <code className="text-github-text">{currentQuizQuestion.code}</code>
          </pre>
        )}
        
        <div className="space-y-3 mt-4">
          {shuffledOptions[currentQuestion]?.map((option, index) => (
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
                {option.text}
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
          {currentQuestion === shuffledQuestions.length - 1 ? 'Finish' : 'Next'}
          {currentQuestion !== shuffledQuestions.length - 1 && <ArrowRight size={16} className="ml-1" />}
        </Button>
      </div>
    </div>
  );
};

export default CodeQuiz;
