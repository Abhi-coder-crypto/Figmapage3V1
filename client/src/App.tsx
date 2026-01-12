import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

function Home() {
  return (
    <div className="flex flex-col w-full items-center bg-white min-h-screen">
      {/* Section 1: White Background, full screen */}
      <section className="h-screen w-full bg-white" />
      
      {/* Section 2: Mobile and Desktop compatible width */}
      <section 
        className="w-full flex-shrink-0"
        style={{ 
          height: "435.8px",
          backgroundColor: "#0A67AE" 
        }}
      />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route>
        <div className="p-4">404 Not Found</div>
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
