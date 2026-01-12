import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowDown, Send, CheckCircle2 } from "lucide-react";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useCreateContactMessage } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import vectorBg from "@assets/Vector_(2)_1768210016330.png";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const createMessage = useCreateContactMessage();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertContactMessage) => {
    createMessage.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-body selection:bg-primary/10">
      
      {/* Navigation (Minimal) */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tight">Studio.</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#hero" className="hover:text-foreground transition-colors">Home</a>
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <Button variant="default" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
            Get in Touch
          </Button>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tighter"
            >
              Design with <br/>
              <span className="text-muted-foreground">Intent.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed"
            >
              We craft digital experiences that are minimal, functional, and visually stunning. Less noise, more focus.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth'})}>
                Explore Our Work
              </Button>
              <Button variant="outline" size="lg">
                View Showreel
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden md:block"
          >
             {/* Abstract Hero Graphic using CSS shapes for clean look */}
             <div className="w-full aspect-square rounded-full bg-gradient-to-tr from-gray-100 to-gray-50 border border-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white rounded-full shadow-inner flex items-center justify-center">
                  <div className="w-1/2 h-1/2 bg-foreground rounded-full opacity-5" />
                </div>
             </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* SECTION 2: FEATURE BACKGROUND */}
      <section id="features" className="min-h-screen relative flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-60 mix-blend-overlay transition-transform hover:scale-105 duration-[3s] ease-out"
          style={{ backgroundImage: `url(${vectorBg})` }}
        />
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white space-y-8">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-sm font-medium bg-white/5 backdrop-blur-sm"
          >
            Our Philosophy
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold leading-tight"
          >
            "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away."
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
          >
            We leverage negative space and structured typography to create interfaces that breathe.
          </motion.p>
        </div>
      </section>

      {/* SECTION 3: CONTACT */}
      <section id="contact" className="py-32 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold">Start a Project</h2>
            <p className="text-muted-foreground text-lg">Tell us about your idea. We're ready to listen.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-3xl p-8 md:p-12 shadow-xl border border-border/50 relative overflow-hidden"
          >
            {/* Success State Overlay */}
            {createMessage.isSuccess && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-background/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. We'll be in touch within 24 hours.</p>
                <Button 
                  className="mt-8" 
                  variant="outline" 
                  onClick={() => {
                    createMessage.reset();
                    form.reset();
                  }}
                >
                  Send Another
                </Button>
              </motion.div>
            )}

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    {...form.register("name")}
                    disabled={createMessage.isPending}
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    {...form.register("email")}
                    disabled={createMessage.isPending}
                  />
                   {form.formState.errors.email && (
                    <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project requirements..." 
                  className="min-h-[160px]"
                  {...form.register("message")}
                  disabled={createMessage.isPending}
                />
                 {form.formState.errors.message && (
                    <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                  )}
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full md:w-auto"
                  disabled={createMessage.isPending}
                >
                  {createMessage.isPending ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display font-bold text-xl">Studio.</div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Minimal Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
