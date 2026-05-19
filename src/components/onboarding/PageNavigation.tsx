import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, BrainCircuit } from "lucide-react";
import { useState } from "react";
import { QuickQuiz, QuizQuestion } from "./QuickQuiz";

interface NavigationData {
  title: string;
  path: string;
}

interface PageNavigationProps {
  prev?: NavigationData;
  next?: NavigationData;
  quiz?: {
    title: string;
    questions: QuizQuestion[];
  };
}

export function PageNavigation({ prev, next, quiz }: PageNavigationProps) {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const openQuiz = () => {
    setIsQuizOpen(true);
  };

  return (
    <div className="relative z-20 mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
      {prev ? (
        <Link to={prev.path} className="w-full md:w-auto">
          <Button variant="outline" size="lg" className="w-full md:w-auto group min-w-[200px] h-14">
            <ArrowLeft className="w-5 h-5 mr-3 text-muted-foreground transition-transform group-hover:-translate-x-1" />
            <div className="flex flex-col items-start text-left">
              <span className="text-[10px] text-muted-foreground uppercase leading-none font-bold tracking-wider">Previous</span>
              <span className="font-semibold text-sm">{prev.title}</span>
            </div>
          </Button>
        </Link>
      ) : <div className="w-full md:w-auto hidden md:block min-w-[200px]" />}

      {quiz && quiz.questions.length > 0 && (
        <div className="relative z-30 w-full md:w-auto flex justify-center py-2 md:py-0 order-first md:order-none">
          <Button 
            type="button"
            size="lg" 
            className="relative z-40 w-full md:w-auto bg-gradient-to-r from-accent to-primary hover:opacity-90 active:opacity-100 shadow-md h-14 px-8 rounded-full font-bold text-white pointer-events-auto touch-manipulation"
            onClick={openQuiz}
            
          >
            <BrainCircuit className="w-5 h-5 mr-2" />
            Take Quick Quiz
          </Button>
          <QuickQuiz 
            isOpen={isQuizOpen} 
            onClose={() => setIsQuizOpen(false)} 
            title={quiz.title} 
            questions={quiz.questions} 
          />
        </div>
      )}

      {next ? (
        <Link to={next.path} className="w-full md:w-auto">
          <Button variant="default" size="lg" className="w-full md:w-auto group min-w-[200px] h-14">
            <div className="flex flex-col items-end text-right">
              <span className="text-[10px] text-primary-foreground/70 uppercase leading-none font-bold tracking-wider">Next Lesson</span>
              <span className="font-semibold text-sm">{next.title}</span>
            </div>
            <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      ) : <div className="w-full md:w-auto hidden md:block min-w-[200px]" />}
    </div>
  );
}