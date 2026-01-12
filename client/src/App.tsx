import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import logo from "@assets/Rectangle_(4)_1768210660121.png";
import cameraIcon from "@assets/0bd2bf3a-866f-4f23-922e-1e68f9314bc8_1768211186631.png";
import recIcon from "@assets/Vector_(3)_1768211179428.png";
import gridBg from "@assets/Clip_path_group_1768211457122.png";

// Import project images
import img1 from "@assets/Group_(4)_1768211769177.png";
import img2 from "@assets/Clip_path_group_(1)_1768211769176.png";
import img3 from "@assets/Clip_path_group_(2)_1768211769176.png";
import img4 from "@assets/Clip_path_group_(3)_1768211769176.png";
import img5 from "@assets/Clip_path_group_(4)_1768211769175.png";
import img6 from "@assets/Clip_path_group_(5)_1768211769174.png";

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
      <section className="h-[250px] w-full bg-white relative flex items-center justify-center">
        <div className="relative flex items-center mt-[-40px]">
          {/* Main Content: Camera and Text */}
          <div className="flex items-center gap-4 md:gap-6">
            <img 
              src={cameraIcon} 
              alt="Camera" 
              className="w-10 h-10 md:w-14 md:h-14 object-contain"
            />
            <h2 className="text-4xl md:text-6xl text-[#0A67AE] font-normal tracking-tight">
              Social Media Posts
            </h2>
          </div>

          {/* REC indicator at top right - Tilted */}
          <div className="absolute -top-10 -right-12 flex items-center rotate-12">
            <img 
              src={recIcon} 
              alt="REC" 
              className="h-8 md:h-10 w-auto"
            />
          </div>
        </div>

        {/* First image overlapping from Section 4 into Section 3 - Pushed further down */}
        <div className="absolute bottom-0 translate-y-[60%] z-20">
          <img 
            src={img1} 
            alt="Project 1" 
            style={{ width: "764.91px", height: "318.71px" }} 
            className="object-cover rounded-3xl shadow-lg border-2 border-black" 
          />
        </div>
      </section>

      {/* Section 4: Grid background section with project images */}
      <section 
        className="w-full bg-repeat pt-[280px] pb-20 flex flex-col items-center gap-8 relative overflow-visible"
        style={{ 
          minHeight: "2594.84px",
          backgroundImage: `url(${gridBg})`,
          backgroundSize: "contain"
        }}
      >
        <img src={img2} alt="Project 2" style={{ width: "764.91px", height: "566.56px" }} className="object-cover rounded-3xl shadow-lg border-2 border-black" />
        <img src={img3} alt="Project 3" style={{ width: "764.91px", height: "318.71px" }} className="object-cover rounded-3xl shadow-lg border-2 border-black" />
        <img src={img4} alt="Project 4" style={{ width: "764.91px", height: "566.56px" }} className="object-cover rounded-3xl shadow-lg border-2 border-black" />
        <img src={img5} alt="Project 5" style={{ width: "764.91px", height: "318.71px" }} className="object-cover rounded-3xl shadow-lg border-2 border-black" />
        
        {/* Last image partially out of the section */}
        <div className="translate-y-16">
          <img src={img6} alt="Project 6" style={{ width: "764.91px", height: "566.56px" }} className="object-cover rounded-3xl shadow-lg border-2 border-black" />
        </div>
      </section>

      {/* Section 5: White background section, height 1.5x of first section (500px * 1.5 = 750px) */}
      <section className="h-[750px] w-full bg-white" />
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
