import { createFileRoute, Link } from "@tanstack/react-router";
import { HRContact } from "@/components/onboarding/HRContact";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PageNavigation } from "@/components/onboarding/PageNavigation";

export const Route = createFileRoute("/hr-contact")({
  component: HRContactPage,
});

const hrQuiz = {
  title: "HR Contact",
  questions: [
    {
      question: "Who should you contact first for most general HR queries?",
      options: ["CEO", "Your direct Line Manager", "HR Generalist / HR Business Partner", "IT Helpdesk"],
      answer: 2
    },
    {
      question: "Where can you find the most up-to-date HR contact information?",
      options: ["In the Company Policy handbook only", "On the internal HRM portal and Welcome page", "By asking colleagues randomly", "On the company's public website"],
      answer: 1
    }
  ]
};

function HRContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-8 pb-32">
      <div className="flex items-center mb-8">
        <Link to="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back Home
          </Button>
        </Link>
      </div>
      <HRContact />
      <PageNavigation 
        prev={{ title: "Communication Tools", path: "/communication-tools" }}
        next={{ title: "Checklist", path: "/checklist" }}
        quiz={hrQuiz}
      />
    </div>
  );
}
