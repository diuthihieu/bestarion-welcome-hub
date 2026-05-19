import { createFileRoute, Link } from "@tanstack/react-router";
import { CompanyIntro } from "@/components/onboarding/CompanyIntro";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PageNavigation } from "@/components/onboarding/PageNavigation";

export const Route = createFileRoute("/company-introduction")({
  component: CompanyIntroductionPage,
});

const introQuiz = {
  title: "Company Intro",
  questions: [
    {
      question: "What is Bestarion's core business model?",
      options: ["Software Outsourcing & Services", "Hardware Manufacturing", "Real Estate", "E-commerce Platform"],
      answer: 0
    },
    {
      question: "Which of the following is NOT one of our Core Values?",
      options: ["Integrity", "Innovation", "Isolation", "Customer Success"],
      answer: 2
    },
    {
      question: "What is our company's ultimate vision?",
      options: ["To be the cheapest provider", "To be the leading tech partner globally", "To open offices in every country", "To focus only on local markets"],
      answer: 1
    }
  ]
};

function CompanyIntroductionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-8 pb-32">
      <div className="flex items-center mb-8">
        <Link to="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back Home
          </Button>
        </Link>
      </div>
      <CompanyIntro />
      <PageNavigation 
        next={{ title: "Company Policies", path: "/company-policies" }}
        quiz={introQuiz}
      />
    </div>
  );
}
