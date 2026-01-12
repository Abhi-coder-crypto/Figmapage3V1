import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import logo from "@assets/Rectangle_(4)_1768210660121.png";
import { Camera } from "lucide-react";

function Home() {
  return (
    <div className="flex flex-col w-full items-center bg-white min-h-screen font-sans overflow-x-hidden">
      {/* Section 1: White Background */}
      <section className="h-[500px] w-full bg-white relative flex items-end justify-center">
        {/* Logo overlapping the boundary */}
        <div className="absolute bottom-0 translate-y-1/2 z-10 px-4">
          <img 
            src={logo} 
            alt="Mango Maniac Films Logo" 
            className="w-48 md:w-64 h-auto drop-shadow-xl"
          />
        </div>
      </section>
      
      {/* Section 2: Blue content section */}
      <section 
        className="w-full flex-shrink-0 flex flex-col items-center justify-start pt-32 pb-20 px-4 md:px-8 text-center"
        style={{ 
          minHeight: "435.8px",
          backgroundColor: "#0A67AE" 
        }}
      >
        <div className="max-w-4xl mx-auto text-white space-y-6">
          <h1 className="text-3xl md:text-5xl font-normal leading-tight">
            Crafting a Cinematic Visual Identity<br />
            for Mango Maniac Films
          </h1>
          
          <p className="text-sm md:text-base leading-relaxed opacity-90 max-w-3xl mx-auto">
            For Mango Maniac Films, we shape high-impact BTS content and production visuals that bring
            every project's energy to life - all crafted to enhance brand presence, showcase on-set storytelling,
            and create a cohesive visual identity across platforms. A complete content solution for a team
            devoted to cinematic creativity
          </p>
        </div>
      </section>

      {/* Section 3: White background section with Social Media Posts content */}
      <section className="h-[250px] w-full bg-white relative flex items-center justify-center overflow-hidden">
        {/* REC indicator at top right */}
        <div className="absolute top-8 right-8 flex items-center gap-2">
          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
          <span className="font-bold text-lg tracking-wider text-black">REC</span>
        </div>

        {/* Center Content: Camera and Text */}
        <div className="flex items-center gap-4 md:gap-6">
          <Camera className="w-10 h-10 md:w-14 md:h-14 text-black stroke-[1.5]" />
          <h2 className="text-4xl md:text-6xl text-[#0A67AE] font-normal tracking-tight">
            Social Media Posts
          </h2>
        </div>
      </section>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route>
        <div className="p-4 text-center">404 Not Found</div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
