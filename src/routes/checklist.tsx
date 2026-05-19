import { createFileRoute, Link } from "@tanstack/react-router";
import { Checklist } from "@/components/onboarding/Checklist";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PageNavigation } from "@/components/onboarding/PageNavigation";

export const Route = createFileRoute("/checklist")({
  component: ChecklistPage,
});

function ChecklistPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-8 pb-32">
      <div className="flex items-center mb-8">
        <Link to="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back Home
          </Button>
        </Link>
      </div>
      <Checklist onComplete={() => console.log("Done")} />
      <PageNavigation 
        prev={{ title: "HR Contact", path: "/hr-contact" }}
      />
    </div>
  );
}
