import { createFileRoute, Link } from "@tanstack/react-router";
import { HRPolicies } from "@/components/onboarding/HRPolicies";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PageNavigation } from "@/components/onboarding/PageNavigation";

export const Route = createFileRoute("/company-policies")({
  component: CompanyPoliciesPage,
});

const policiesQuiz = {
  title: "Company Policies",
  questions: [
    {
      question: "What are the standard working hours?",
      options: ["9:00 AM - 6:00 PM", "8:00 AM - 5:30 PM", "8:30 AM - 5:30 PM", "Flexible hours"],
      answer: 1
    },
    {
      question: "How many days of annual leave do employees receive?",
      options: ["10 days", "12 days", "14 days", "15 days"],
      answer: 1
    },
    {
      question: "Which action violates our ISMS (Information Security) policy?",
      options: ["Locking your screen when leaving your desk", "Using strong passwords", "Sharing your badge with a visitor", "Reporting a phishing email"],
      answer: 2
    }
  ]
};

function CompanyPoliciesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-8 pb-32">
      <div className="flex items-center mb-8">
        <Link to="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back Home
          </Button>
        </Link>
      </div>
      <HRPolicies />
      <PageNavigation 
        prev={{ title: "Company Introduction", path: "/company-introduction" }}
        next={{ title: "Compensation & Benefits", path: "/compensation-benefits" }}
        quiz={policiesQuiz}
      />
    </div>
  );
}
