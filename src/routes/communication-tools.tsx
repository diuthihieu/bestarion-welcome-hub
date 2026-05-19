import { createFileRoute, Link } from "@tanstack/react-router";
import { Tools } from "@/components/onboarding/Tools";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PageNavigation } from "@/components/onboarding/PageNavigation";

export const Route = createFileRoute("/communication-tools")({
  component: CommunicationToolsPage,
});

const toolsQuiz = {
  title: "Communication Tools",
  questions: [
    {
      question: "Which tool is primarily used for internal chatting and meetings?",
      options: ["Slack", "Microsoft Teams", "Discord", "Skype"],
      answer: 1
    },
    {
      question: "What tool do we use for task and project management?",
      options: ["LIS", "Trello", "Jira", "Asana"],
      answer: 0
    },
    {
      question: "Which system is used to submit leave requests, OT, and view your timesheets?",
      options: ["LIS", "ezHR", "CDS", "SVN"],
      answer: 1
    }
  ]
};

function CommunicationToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-8 pb-32">
      <div className="flex items-center mb-8">
        <Link to="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back Home
          </Button>
        </Link>
      </div>
      <Tools />
      <PageNavigation 
        prev={{ title: "Learning & Development", path: "/learning-development" }}
        next={{ title: "HR Contact", path: "/hr-contact" }}
        quiz={toolsQuiz}
      />
    </div>
  );
}
