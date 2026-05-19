import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, Building2, User } from "lucide-react";

export function HRContact() {
  return (
    <div
      className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-primary flex items-center gap-2">
          <PhoneCall className="w-8 h-8 text-accent" />
          HR Support
        </h2>
        <p className="text-muted-foreground">We are here to help. The HR Department is your single point of contact.</p>
      </div>

      <Card className="max-w-md bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-none">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" /> HR Executive Contact
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <p className="text-lg font-bold flex items-center gap-2"><Building2 className="w-5 h-5" /> HR Department</p>
            <p className="text-sm opacity-90 flex items-center gap-2 mt-1">
              <Mail className="w-4 h-4" /> 
              <a href="mailto:hr@bestarion.com" className="hover:underline">hr@bestarion.com</a>
            </p>
          </div>
          <div className="flex gap-3 pt-2">
            <Button variant="secondary" className="w-full bg-white text-primary hover:bg-gray-100" asChild>
              <a href="mailto:hr@bestarion.com">
                <Mail className="w-4 h-4 mr-2" /> Email HR
              </a>
            </Button>
            <Button variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white/10 hover:text-white">
              <PhoneCall className="w-4 h-4 mr-2" /> Message on Teams
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
