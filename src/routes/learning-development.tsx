import { createFileRoute, Link } from "@tanstack/react-router";
import { Learning } from "@/components/onboarding/Learning";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PageNavigation } from "@/components/onboarding/PageNavigation";

export const Route = createFileRoute("/learning-development")({
  component: LearningDevelopmentPage,
});

const learningQuiz = {
  title: "Learning & Development",
  questions: [
    {
      question: "Who must you discuss your training need with FIRST?",
      options: ["HR Department", "Line Manager/PM/TBP", "The Training Provider", "CEO"],
      answer: 1
    },
    {
      question: "How many days before the course starts will HR share details if approved?",
      options: ["1 day", "At least 3 days", "7 days", "14 days"],
      answer: 1
    },
    {
      question: "Which of the following is considered Mandatory Training?",
      options: ["Coursera Electives", "Company Orientation & ISMS Training", "Advanced React Patterns", "Public Speaking Seminar"],
      answer: 1
    }
  ]
};

function LearningDevelopmentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-8 pb-32">
      <div className="flex items-center mb-8">
        <Link to="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back Home
          </Button>
        </Link>
      </div>
      <Learning />
      <PageNavigation 
        prev={{ title: "Compensation & Benefits", path: "/compensation-benefits" }}
        next={{ title: "Communication Tools", path: "/communication-tools" }}
        quiz={learningQuiz}
      />
    </div>
  );
}
