import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Network } from "lucide-react";

export function OrgChart() {
  const blocks = [
    {
      name: "ITO",
      color: "bg-blue-500 text-white",
      borderColor: "border-blue-500",
      children: [
        "MSS",
        "MAX",
        "Meperia AI",
        "HUB",
        "MIMS",
        "Integration Testing",
        "SAS",
        "ATT"
      ]
    },
    {
      name: "BPO",
      color: "bg-purple-500 text-white",
      borderColor: "border-purple-500",
      children: [
        "CLS",
        "QBO",
        "BAS",
        "MAJ"
      ]
    },
    {
      name: "R&D",
      color: "bg-green-500 text-white",
      borderColor: "border-green-500",
      children: []
    },
    {
      name: "BO",
      color: "bg-orange-500 text-white",
      borderColor: "border-orange-500",
      children: [
        "SnM",
        "HR",
        "FA",
        "QM",
        "Admin",
        "IT"
      ]
    }
  ];

  return (
    <Card className="border-t-4 border-t-primary shadow-md overflow-hidden">
      <CardHeader className="bg-muted/30 pb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-primary/10 rounded-lg">
            <Network className="w-6 h-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl text-primary">Organizational Structure</CardTitle>
            <CardDescription className="text-base mt-1">
              How our departments and projects are organized.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 bg-slate-50/50 dark:bg-slate-900/10 overflow-x-auto">
        <div className="min-w-[900px] w-full flex flex-col items-center pt-8 pb-4">
          
          {/* BOD */}
          <div className="flex flex-col items-center relative z-10">
            <div className="bg-primary text-primary-foreground font-bold px-12 py-3 rounded-full shadow-lg text-lg border-2 border-primary/20">
              Board of Directors
            </div>
            <div className="w-px h-8 bg-border border-l-2 border-solid border-primary/40"></div>
          </div>

          <div className="flex justify-between items-start relative w-full px-4">
            {/* Top horizontal connecting line */}
            <div className="absolute top-0 left-[12.5%] right-[12.5%] h-px border-t-2 border-solid border-primary/40"></div>

            {blocks.map((block, index) => (
              <div key={index} className="w-1/4 flex flex-col items-center relative px-2">
                <div className="absolute top-0 w-px h-8 border-l-2 border-solid border-primary/40"></div>
                <div className={`mt-8 ${block.color} font-bold px-6 py-3 rounded-xl shadow-md z-10 mb-6 w-full max-w-[200px] text-center tracking-wide`}>
                  {block.name}
                </div>
                
                {block.children.length > 0 && (
                  <div className="flex flex-col items-center gap-3 w-full max-w-[180px] relative">
                    {/* Vertical line connecting children */}
                    <div className="absolute -top-6 bottom-6 left-1/2 -ml-[1px] w-px border-l-2 border-solid border-primary/20 z-0"></div>
                    
                    {block.children.map((child, idx) => (
                      <div 
                        key={idx} 
                        className={`bg-card w-full border-l-4 ${block.borderColor} border-y border-r border-y-border border-r-border px-3 py-2.5 rounded-lg text-center shadow-sm hover:shadow-md transition-all text-sm font-semibold text-foreground z-10`}
                      >
                        {child}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
