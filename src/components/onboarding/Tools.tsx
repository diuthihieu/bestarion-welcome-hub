import { Laptop } from "lucide-react";
import teamsLogo from "@/assets/tools/teams.png";
import vivaLogo from "@/assets/tools/viva-engage.png";
import ezhrLogo from "@/assets/tools/ezhr.png";
import lisLogo from "@/assets/tools/lis.png";
import svnLogo from "@/assets/tools/svn.png";
import ticketLogo from "@/assets/tools/support-ticket.png";
import outlookLogo from "@/assets/tools/outlook.png";
import onedriveLogo from "@/assets/tools/onedrive.png";
import bookingLogo from "@/assets/tools/booking.png";
import cdsLogo from "@/assets/tools/cds.png";
import contentLogo from "@/assets/tools/content.png";
import portalLogo from "@/assets/tools/portal.png";
import elearningLogo from "@/assets/tools/elearning.png";

export function Tools() {
  const tools = [
    { logo: teamsLogo, name: "Microsoft Teams", benefit: "Our main internal communication channel. Use it for daily chats, and join the 'Bestarion Connection' group where all members connect and interact." },
    { logo: vivaLogo, name: "Viva Engage", benefit: "Our internal social network. HR posts announcements about activities and programs here. You can freely share and leave comments on posts!" },
    { logo: ezhrLogo, name: "ezHR", benefit: "HR portal dedicated to timekeeping, leave requests, OT (Overtime) submissions, approvals, and viewing your timesheets." },
    { logo: lisLogo, name: "LIS", benefit: "Our project task logging system. Use it to record the hours spent on different task categories every day and month." },
    { logo: svnLogo, name: "SVN", benefit: "System used to manage and grant permissions to specific department or project folders for employees." },
    { logo: ticketLogo, name: "Support Ticket", benefit: "Larion Helpdesk: the place to submit requests whenever you need assistance from the IT, Admin, or HR departments." },
    { logo: contentLogo, name: "Content", benefit: "Our document storage center. You can find all company documents, forms, Rules, Policies, Regulations, and Processes here." },
    { logo: portalLogo, name: "Portal", benefit: "The company portal where you can find the Employee Directory, Organization Chart, and more." },
    { logo: elearningLogo, name: "E-Learning", benefit: "Our Cloud Learning System (CLS) for internal training, skill development, and mandatory compliance courses." },
    { logo: outlookLogo, name: "Outlook", benefit: "Official corporate email communication for all your working correspondences." },
    { logo: onedriveLogo, name: "OneDrive", benefit: "Secure cloud storage for accessing, sharing, and collaborating on all your working files and documents." },
    { logo: bookingLogo, name: "Room Booking", benefit: "Easy-to-use tool to find availability and reserve meeting rooms across the office for your discussions." },
    { logo: cdsLogo, name: "CDS", benefit: "Performance management system for tracking your goals, appraisals, and planning your career development." },
  ];

  return (
    <div
      className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-primary flex items-center gap-2">
          <Laptop className="w-8 h-8 text-accent" />
          Tools & Platforms
        </h2>
        <p className="text-muted-foreground">Below are the digital workplace tools our company uses for various purposes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {tools.map((tool, idx) => (
          <div key={idx} className="flex gap-4 p-4 border rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow hover:border-accent">
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-base text-primary">{tool.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{tool.benefit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
