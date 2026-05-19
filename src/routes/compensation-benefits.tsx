import { createFileRoute, Link } from "@tanstack/react-router";
import { CompBenefits } from "@/components/onboarding/CompBenefits";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PageNavigation } from "@/components/onboarding/PageNavigation";

export const Route = createFileRoute("/compensation-benefits")({
  component: CompensationBenefitsPage,
});

const benefitsQuiz = {
  title: "Compensation & Benefits",
  questions: [
    {
      question: "When is the 13th-month salary typically paid?",
      options: ["100% in December", "70% before Lunar New Year, 30% in May", "50% in December, 50% in June", "It is divided equally across 12 months"],
      answer: 1
    },
    {
      question: "What is the Seniority Award for 5 years of service?",
      options: ["2,000,000 VND", "5,000,000 VND", "10,000,000 VND", "15,000,000 VND"],
      answer: 1
    },
    {
      question: "Which insurance is provided for official employees?",
      options: ["DBV", "AIA Insurance", "Liberty Insurance", "Bao Viet Insurance"],
      answer: 0
    }
  ]
};

function CompensationBenefitsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-8 pb-32">
      <div className="flex items-center mb-8">
        <Link to="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back Home
          </Button>
        </Link>
      </div>
      <CompBenefits />
      <PageNavigation 
        prev={{ title: "Company Policies", path: "/company-policies" }}
        next={{ title: "Learning & Development", path: "/learning-development" }}
        quiz={benefitsQuiz}
      />
    </div>
  );
}
