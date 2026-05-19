import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Globe2, Briefcase, Target, Rocket } from "lucide-react";
import teamImage from "@/assets/management-team.png";
import { OrgChart } from "./OrgChart";

export function CompanyIntro() {
  return (
    <div
      className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-primary flex items-center gap-2">
          <Building2 className="w-8 h-8 text-accent" />
          Company Introduction
        </h2>
        <p className="text-muted-foreground">Get to know our history, vision, and the people behind Bestarion.</p>
      </div>

      <Card className="overflow-hidden border-border shadow-sm">
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Pjlbw9mVXFE?rel=0"
            title="Bestarion Introduction Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-t-4 border-t-accent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-accent" /> Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><strong>Founded:</strong> 2003 (as Larion), established Bestarion in 2018.</p>
            <p><strong>Experience:</strong> Nearly 10 years providing software dev & consultation.</p>
            <p><strong>Team:</strong> 100+ highly skilled engineers.</p>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-primary" /> Reach
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><strong>Clients:</strong> Successes in 2+ countries.</p>
            <p><strong>Projects:</strong> 10+ projects successfully delivered.</p>
            <p><strong>Domains:</strong> Healthcare, Security Trading, Banking, Real Estate, Education.</p>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-accent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-accent" /> Vision & Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><strong>Vision:</strong> Driven by technological innovations, committed to exceptional customer service.</p>
            <p><strong>Mission:</strong> Deliver high quality services with cost-effective solutions agilely.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" /> Management Team
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full flex justify-center rounded-xl overflow-hidden bg-white/50 border shadow-sm">
            <img 
              src={teamImage} 
              alt="Bestarion Management Team" 
              className="w-full max-w-4xl h-auto object-contain"
            />
          </div>
        </CardContent>
      </Card>

      <OrgChart />
    </div>
  );
}
