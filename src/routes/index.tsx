import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";
import logoUrl from "@/assets/logo.png";
import heroImg from "@/assets/hero-team.png";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  FileText, 
  HeartHandshake, 
  GraduationCap, 
  Laptop,
  CheckSquare,
  
  PhoneCall
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const menuItems = [
    {
      title: "I. COMPANY INTRODUCTION",
      description: "Overview of Bestarion, history, development, core values, and organization.",
      path: "/company-introduction",
      icon: Building2,
      color: "text-blue-500",
      bgColor: "bg-blue-100/90 dark:bg-blue-900/80"
    },
    {
      title: "II. COMPANY POLICIES",
      description: "Basic rules, regulations, and working principles to follow.",
      path: "/company-policies",
      icon: FileText,
      color: "text-purple-500",
      bgColor: "bg-purple-100/90 dark:bg-purple-900/80"
    },
    {
      title: "III. COMPENSATION & BENEFITS",
      description: "Labor rules, timekeeping, leave, benefits, and remote work guidelines.",
      path: "/compensation-benefits",
      icon: HeartHandshake,
      color: "text-green-500",
      bgColor: "bg-green-100/90 dark:bg-green-900/80"
    },
    {
      title: "IV. LEARNING & DEVELOPMENT",
      description: "Training roadmap, capacity development, and learning opportunities.",
      path: "/learning-development",
      icon: GraduationCap,
      color: "text-orange-500",
      bgColor: "bg-orange-100/90 dark:bg-orange-900/80"
    },
    {
      title: "V. COMMUNICATION TOOLS",
      description: "Daily communication tools and internal systems used at Bestarion.",
      path: "/communication-tools",
      icon: Laptop,
      color: "text-red-500",
      bgColor: "bg-red-100/90 dark:bg-red-900/80"
    },
    {
      title: "Checklist",
      description: "Tasks to complete on your first day joining.",
      path: "/checklist",
      icon: CheckSquare,
      color: "text-teal-500",
      bgColor: "bg-teal-100/90 dark:bg-teal-900/80"
    },
    {
      title: "HR Contact",
      description: "Contact information for the HR department when you need support.",
      path: "/hr-contact",
      icon: PhoneCall,
      color: "text-pink-500",
      bgColor: "bg-pink-100/90 dark:bg-pink-900/80"
    }
  ];

  return (
    <div className="h-screen w-full overflow-hidden relative flex flex-col items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 py-6 flex flex-col h-full justify-center space-y-8 animate-in fade-in zoom-in duration-700">
        
        {/* Header/Title Area */}
        <div className="text-center space-y-4">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl inline-block mb-2 shadow-lg border border-white/20">
            <img src={logoUrl} alt="Bestarion" className="h-12 object-contain filter brightness-0 invert" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg">
            Welcome to <span className="text-accent drop-shadow-md">Bestarion!</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto drop-shadow-md hidden md:block">
            We're thrilled to have you onboard. Choose a section below to start your journey.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto w-full">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} className="block group h-full">
              <Card className="h-full bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all hover:scale-105 duration-200 cursor-pointer shadow-xl">
                <CardContent className="p-4 flex flex-col items-center text-center gap-3 h-full justify-center">
                  <div className={`p-3 rounded-full ${item.bgColor} shadow-inner`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-white group-hover:text-accent transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 hidden md:block line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-auto absolute bottom-4 left-0 right-0">
          <p className="text-gray-400 text-xs font-medium tracking-wider">
            © {new Date().getFullYear()} BESTARION. WELCOME TO THE TEAM!
          </p>
        </div>
      </div>
    </div>
  );
}
