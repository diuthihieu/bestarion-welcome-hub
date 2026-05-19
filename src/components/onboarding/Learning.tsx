import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Presentation, FileBadge, MessageSquare, ClipboardCheck, Award } from "lucide-react";
import learningImg1 from "@/assets/learning/learning-1.jfif";
import learningImg2 from "@/assets/learning/learning-2.jfif";
import learningImg3 from "@/assets/learning/learning-3.png";

export function Learning() {
  return (
    <div
      className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-primary flex items-center gap-2">
          <GraduationCap className="w-8 h-8 text-accent" />
          Learning & Development
        </h2>
        <p className="text-muted-foreground">Continuous growth is part of our DNA.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-t-4 border-t-accent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <FileBadge className="w-5 h-5" /> Mandatory Training
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <ul className="list-disc pl-4 space-y-1">
              <li>Company Orientation</li>
              <li>ISMS & QMS Training</li>
              <li>Role-Based Training</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Presentation className="w-5 h-5" /> In-Person & Dept.
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <ul className="list-disc pl-4 space-y-1">
              <li>Workshops & Seminars</li>
              <li>OJT (On-the-job Training)</li>
              <li>Public / In-house training</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-accent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <BookOpen className="w-5 h-5" /> Online Platforms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <ul className="list-disc pl-4 space-y-1">
              <li>Bestarion Internal E-Learning</li>
              <li>Coursera</li>
              <li>Udemy</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <div className="rounded-xl overflow-hidden shadow-sm border border-border h-48">
          <img src={learningImg1} alt="Learning and Development Session" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-xl overflow-hidden shadow-sm border border-border h-48">
          <img src={learningImg2} alt="Team Training" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-xl overflow-hidden shadow-sm border border-border h-48">
          <img src={learningImg3} alt="Workshop" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 border border-primary/10 shadow-sm relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-primary mb-10 text-center">How to request training?</h3>
          
          <div className="relative flex flex-col md:flex-row gap-8 items-start justify-between">
            {/* Connecting Line (desktop) */}
            <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            {/* Connecting Line (mobile) */}
            <div className="md:hidden absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center w-full md:w-1/3 group">
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center shadow-md transition-transform group-hover:scale-110 group-hover:border-primary duration-300 relative z-10">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shadow-sm z-20">1</div>
              </div>
              <h4 className="font-bold text-primary text-lg mb-3">Discuss & Align</h4>
              <p className="text-sm text-muted-foreground bg-background/60 p-5 rounded-2xl shadow-sm backdrop-blur-sm border border-white/20">
                Discuss with your Line Manager/PM/TBP to confirm the course is relevant to your role. Once aligned, your PM/TBP submits the request to HR.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center w-full md:w-1/3 group mt-4 md:mt-0">
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center shadow-md transition-transform group-hover:scale-110 group-hover:border-primary duration-300 relative z-10">
                  <ClipboardCheck className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-sm z-20">2</div>
              </div>
              <h4 className="font-bold text-primary text-lg mb-3">HR Review & Approval</h4>
              <p className="text-sm text-muted-foreground bg-background/60 p-5 rounded-2xl shadow-sm backdrop-blur-sm border border-white/20">
                HR reviews based on plan, budget, and requirements. If approved, HR shares course details at least 3 days before it starts.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center w-full md:w-1/3 group mt-4 md:mt-0">
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center shadow-md transition-transform group-hover:scale-110 group-hover:border-primary duration-300 relative z-10">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shadow-sm z-20">3</div>
              </div>
              <h4 className="font-bold text-primary text-lg mb-3">Attend & Complete</h4>
              <p className="text-sm text-muted-foreground bg-background/60 p-5 rounded-2xl shadow-sm backdrop-blur-sm border border-white/20">
                Attend fully, follow course requirements, complete evaluations if required, and submit certificates to HR.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
