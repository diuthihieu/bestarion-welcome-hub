import { motion } from "framer-motion";
import { Clock, CalendarDays, ShieldCheck, UserCheck, BriefcaseBusiness } from "lucide-react";

export function HRPolicies() {
  return (
    <div
      className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-primary flex items-center gap-2">
          <BriefcaseBusiness className="w-8 h-8 text-accent" />
          HR Policies
        </h2>
        <p className="text-muted-foreground">Essential guidelines for your day-to-day at Bestarion.</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="bg-card rounded-xl border shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b bg-muted/30 flex items-center gap-2">
            <Clock className="w-5 h-5 text-accent" />
            <h3 className="font-semibold text-lg">Working Hours & Timekeeping</h3>
          </div>
          <div className="p-0 flex-1">
            <img 
              src="/images/hr-policies/working-hours.png" 
              alt="Working Hours & Timekeeping" 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>

        <div className="bg-card rounded-xl border shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b bg-muted/30 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <h3 className="font-semibold text-lg">Security & IT Policy</h3>
          </div>
          <div className="p-0 flex-1">
            <img 
              src="/images/hr-policies/security.png" 
              alt="Security & IT Policy" 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>

        <div className="bg-card rounded-xl border shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b bg-muted/30 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-accent" />
            <h3 className="font-semibold text-lg">Performance Appraisal</h3>
          </div>
          <div className="p-0 flex-1">
            <img 
              src="/images/hr-policies/performance.png" 
              alt="Performance Appraisal" 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>

        <div className="bg-card rounded-xl border shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b bg-muted/30 flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-accent" />
            <h3 className="font-semibold text-lg">Leave & WFH Policy</h3>
          </div>
          <div className="p-0 flex-1">
            <img 
              src="/images/hr-policies/leave.png" 
              alt="Leave & WFH Policy" 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
