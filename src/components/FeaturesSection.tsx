import { motion } from "framer-motion";
import { Brain, GitBranch, Gauge, Network, FileBarChart, Fingerprint } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Account Classification",
    description: "ML model that distinguishes bots from genuine users with 97%+ accuracy using ensemble methods.",
  },
  {
    icon: GitBranch,
    title: "Feature Engineering Pipeline",
    description: "Extracts activity patterns, posting frequency, follower/following ratios, and temporal behavior.",
  },
  {
    icon: Gauge,
    title: "Suspicion Score",
    description: "Real-time scoring per account with explainable indicators showing why an account is flagged.",
  },
  {
    icon: Network,
    title: "Network Visualization",
    description: "Interactive graph visualization of suspicious clusters revealing coordinated bot networks.",
  },
  {
    icon: FileBarChart,
    title: "Evaluation Reports",
    description: "Comprehensive reports with accuracy, F1-score, ROC-AUC, and confusion matrices.",
  },
  {
    icon: Fingerprint,
    title: "Behavioral Fingerprinting",
    description: "Unique behavioral signatures per account, detecting anomalies invisible to rule-based systems.",
  },
];

const FeaturesSection = () => (
  <section className="py-24 relative" id="features">
    <div className="absolute inset-0 grid-pattern opacity-20" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Features</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-gradient-primary">Solution</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          A comprehensive detection pipeline combining ML, NLP, and graph analysis.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group p-6 rounded-xl bg-card border border-border card-hover"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
