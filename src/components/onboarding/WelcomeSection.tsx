import heroImg from "@/assets/hero-team.png";

export function WelcomeSection() {
  return (
    <div
      className="flex flex-col items-center justify-center text-center space-y-8 py-12"
    >
      <div className="w-full max-w-4xl mx-auto overflow-hidden animate-in fade-in zoom-in duration-700">
        <img src={heroImg} alt="Bestarion Team" className="w-full h-auto object-contain max-h-[400px]" />
      </div>
      
      <div className="space-y-4 max-w-2xl mt-4">
        <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">
          Welcome to <span className="text-accent">Bestarion!</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          We're thrilled to have you onboard. This journey will guide you through everything you need to know in your first few days.
        </p>
      </div>
    </div>
  );
}
