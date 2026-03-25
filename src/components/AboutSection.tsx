import { motion } from "framer-motion";
import { AlertTriangle, Users, TrendingUp, Shield } from "lucide-react";

const stats = [
  { value: "9–15%", label: "of Twitter accounts are estimated bots", icon: AlertTriangle },
  { value: "$78B", label: "annual cost of online fraud to businesses", icon: TrendingUp },
  { value: "66%", label: "of links on Twitter are shared by bots", icon: Users },
  { value: "2.8B", label: "fake accounts removed by Meta in 2023", icon: Shield },
];

const reasons = [
  { title: "Platform Trust", description: "Fake accounts erode user trust, reducing engagement and platform value." },
  { title: "Election Integrity", description: "Bot networks manipulate political discourse and spread disinformation at scale." },
  { title: "Brand Safety", description: "Advertisers lose billions to fake engagement and inflated metrics." },
];

const AboutSection = () => (
  <section className="py-24 relative" id="about">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">The Problem</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          A Growing <span className="text-gradient-primary">Threat</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Social media platforms are plagued by automated accounts that distort reality and undermine digital trust.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border card-hover text-center"
          >
            <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold text-gradient-primary mb-1">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl bg-gradient-card border border-border card-hover"
          >
            <h3 className="text-xl font-semibold mb-2">{r.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
