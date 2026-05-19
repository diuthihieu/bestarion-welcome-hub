import React from "react";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ListTodo, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export function Checklist({ onComplete }: { onComplete: () => void }) {
  const tasks = [
    { id: "intro", label: "Read company introduction" },
    { id: "hours", label: "Understand working hours and timekeeping" },
    { id: "leave", label: "Review leave and WFH policy" },
    { id: "salary", label: "Check salary and benefits information" },
    { id: "hr_training", label: "Complete mandatory HR training" },
    { id: "qms", label: "Complete ISMS & QMS training" },
    { id: "tools", label: "Explore internal tools" },
    { id: "hr", label: "Contact HR if support is needed" },
  ];

  // We are not using a traditional React state hook to avoid context errors if used incorrectly, 
  // but let's actually just use standard React state since this is a Client component in Vite.
  // Wait, I didn't import React. Let's fix that.
  return <ChecklistContent tasks={tasks} onComplete={onComplete} />;
}

function ChecklistContent({ tasks, onComplete }: { tasks: any[], onComplete: () => void }) {
  const [completed, setCompleted] = React.useState<string[]>([]);
  
  const toggleTask = (id: string) => {
    setCompleted(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const progress = Math.round((completed.length / tasks.length) * 100);

  const handleFinish = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#1E2761', '#F97316', '#FFFFFF']
    });
    onComplete();
  };

  return (
    <div
      className="space-y-6 bg-card p-6 rounded-xl border shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-primary flex items-center gap-2">
          <ListTodo className="w-8 h-8 text-accent" />
          Newcomer Checklist
        </h2>
        <p className="text-muted-foreground">Track your onboarding progress here.</p>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm font-medium">
          <span>Your Progress</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-3" />
      </div>

      <div className="space-y-3 pt-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center space-x-3 bg-muted/50 p-3 rounded-lg hover:bg-muted transition-colors">
            <Checkbox 
              id={task.id} 
              checked={completed.includes(task.id)}
              onCheckedChange={() => toggleTask(task.id)}
              className="w-5 h-5 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
            />
            <label 
              htmlFor={task.id} 
              className={`text-sm font-medium leading-none cursor-pointer ${completed.includes(task.id) ? 'line-through text-muted-foreground' : ''}`}
            >
              {task.label}
            </label>
          </div>
        ))}
      </div>

      {progress === 100 && (
        <div 
          className="pt-6 flex flex-col items-center gap-4 text-center animate-in zoom-in duration-500"
        >
          <div className="text-green-600 flex items-center gap-2 text-xl font-bold">
            <CheckCircle2 className="w-6 h-6" /> You are ready to start your journey at Bestarion!
          </div>
          <Button onClick={handleFinish} className="bg-accent hover:bg-accent/90 text-white">
            Celebrate & Finish
          </Button>
          </div>
        )}
    </div>
  );
}
