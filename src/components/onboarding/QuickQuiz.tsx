import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number; // index of the correct option
}

interface QuickQuizProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  questions: QuizQuestion[];
}

export function QuickQuiz({ isOpen, onClose, title, questions }: QuickQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (hasSubmitted) return;
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setHasSubmitted(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setHasSubmitted(false);
  };

  const handleClose = () => {
    onClose();
    // Delay reset to avoid flashing the first question while dialog animates out
    setTimeout(resetQuiz, 300);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      handleClose();
    }
  };

  if (!questions || questions.length === 0) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title} Quiz</DialogTitle>
          <DialogDescription>Let's test what you've learned so far!</DialogDescription>
        </DialogHeader>

        {showResult ? (
          <div className="flex flex-col items-center justify-center py-6 space-y-4 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary">Quiz Completed!</h3>
            <p className="text-lg">
              You scored <span className="font-bold text-accent">{score}</span> out of {questions.length}.
            </p>
            <div className="pt-4 flex gap-3">
              <Button variant="outline" onClick={resetQuiz}>Retry Quiz</Button>
              <Button onClick={handleClose}>Done</Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center text-sm text-muted-foreground font-medium">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>Score: {score}</span>
            </div>
            
            <h4 className="font-medium text-lg leading-snug">{questions[currentQuestion].question}</h4>
            
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = hasSubmitted && index === questions[currentQuestion].answer;
                const isWrong = hasSubmitted && isSelected && index !== questions[currentQuestion].answer;

                let btnClass = "w-full justify-start text-left h-auto py-3 px-4 whitespace-normal transition-all";
                
                if (hasSubmitted) {
                  if (isCorrect) btnClass += " border-green-500 bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700";
                  else if (isWrong) btnClass += " border-red-500 bg-red-50 text-red-700 hover:bg-red-50 hover:text-red-700";
                  else btnClass += " opacity-50 cursor-not-allowed";
                } else if (isSelected) {
                  btnClass += " border-primary bg-primary/5 text-primary";
                }

                return (
                  <Button
                    key={index}
                    variant={isSelected && !hasSubmitted ? "default" : "outline"}
                    className={btnClass}
                    onClick={() => handleAnswerClick(index)}
                    disabled={hasSubmitted}
                  >
                    <div className="flex items-center w-full">
                      <span className="flex-1">{option}</span>
                      {hasSubmitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-600 ml-2 shrink-0" />}
                      {hasSubmitted && isWrong && <XCircle className="w-5 h-5 text-red-600 ml-2 shrink-0" />}
                    </div>
                  </Button>
                );
              })}
            </div>

            <DialogFooter className="sm:justify-between flex-row items-center gap-2">
              <Button variant="ghost" onClick={handleClose}>Cancel</Button>
              {!hasSubmitted ? (
                <Button 
                  onClick={() => setHasSubmitted(true)} 
                  disabled={selectedAnswer === null}
                  className="px-8"
                >
                  Check Answer
                </Button>
              ) : (
                <Button onClick={handleNext} className="px-8">
                  {currentQuestion < questions.length - 1 ? "Next Question" : "View Results"}
                </Button>
              )}
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}