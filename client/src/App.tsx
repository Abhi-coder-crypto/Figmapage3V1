import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import logo from "@assets/Rectangle_(4)_1768210660121.png";

function Home() {
  return (
    <div className="flex flex-col w-full items-center bg-white min-h-screen font-sans">
      {/* Section 1: White Background */}
      <section className="h-[500px] w-full bg-white relative flex items-end justify-center">
        {/* Logo overlapping the boundary */}
        <div className="absolute bottom-0 translate-y-1/2 z-10">
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
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
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
