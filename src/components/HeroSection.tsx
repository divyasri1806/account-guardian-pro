import { motion } from "framer-motion";
import { Shield, Search, Bot, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-network.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">AI-Powered Detection System</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Detect{" "}
              <span className="text-gradient-primary">Fake Accounts</span>
              {" "}& Bots on Social Media
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Automated bots and fake accounts spread misinformation and manipulate public opinion. 
              Our system identifies suspicious accounts using behavioral signals, content analysis, and network patterns.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary font-semibold text-primary-foreground transition-all hover:opacity-90 glow-primary">
                <Search className="w-5 h-5" />
                Check an Account
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary font-semibold text-secondary-foreground transition-all hover:border-primary/40">
                View Dashboard
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-8 mt-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-primary" />
                <span>15M+ accounts analyzed</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-success" />
                <span>97.3% accuracy</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border glow-primary">
              <img src={heroImage} alt="Network visualization showing bot detection" className="w-full h-auto rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 px-5 py-3 rounded-xl bg-card border border-border glow-accent"
            >
              <p className="text-xs text-muted-foreground">Bot Detected</p>
              <p className="text-lg font-bold text-destructive">@fake_user_2847</p>
              <p className="text-xs text-destructive/70">Suspicion: 94.2%</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
