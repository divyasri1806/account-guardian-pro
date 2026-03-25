import { motion } from "framer-motion";

const techs = [
  { name: "Python", category: "Core", color: "text-primary" },
  { name: "Scikit-learn", category: "ML", color: "text-primary" },
  { name: "PyTorch", category: "Deep Learning", color: "text-accent" },
  { name: "NetworkX", category: "Graph Analysis", color: "text-primary" },
  { name: "D3.js", category: "Visualization", color: "text-warning" },
  { name: "Botometer API", category: "External API", color: "text-accent" },
];

const techniques = [
  { name: "Graph Analysis", desc: "Community detection and centrality metrics to identify bot clusters." },
  { name: "NLP Content Detection", desc: "Analyze tweet text for automated patterns and templated content." },
  { name: "Supervised ML", desc: "Random Forest, XGBoost, and neural nets trained on labeled datasets." },
  { name: "Anomaly Detection", desc: "Isolation Forest and autoencoders for unsupervised bot identification." },
];

const TechSection = () => (
  <section className="py-24 relative" id="tech">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Under the Hood</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Tech <span className="text-gradient-primary">Stack</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold mb-6">Tools & Frameworks</h3>
          <div className="grid grid-cols-2 gap-3">
            {techs.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border card-hover"
              >
                <div className={`w-2 h-2 rounded-full ${t.color === "text-primary" ? "bg-primary" : t.color === "text-accent" ? "bg-accent" : "bg-warning"}`} />
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Key Techniques</h3>
          <div className="space-y-3">
            {techniques.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-lg bg-card border border-border card-hover"
              >
                <p className="font-medium text-sm mb-1">{t.name}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TechSection;
