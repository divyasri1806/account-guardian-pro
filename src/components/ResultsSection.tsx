import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const metrics = [
  { label: "Accuracy", value: "97.3%", bar: 97.3 },
  { label: "F1-Score", value: "96.1%", bar: 96.1 },
  { label: "ROC-AUC", value: "98.7%", bar: 98.7 },
  { label: "Precision", value: "95.8%", bar: 95.8 },
];

const ResultsSection = () => (
  <section className="py-24 relative" id="results">
    <div className="absolute inset-0 grid-pattern opacity-15" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Performance</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Evaluation <span className="text-gradient-primary">Results</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Tested on 50k+ labeled accounts across multiple platforms.
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-6">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-5 rounded-xl bg-card border border-border"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="font-medium">{m.label}</span>
              </div>
              <span className="font-mono font-bold text-primary text-lg">{m.value}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-secondary">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${m.bar}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="h-full rounded-full bg-gradient-primary"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
      >
        {[
          { label: "Bot Clusters Found", value: "142" },
          { label: "False Positive Rate", value: "2.4%" },
          { label: "Avg Detection Time", value: "< 200ms" },
        ].map((s) => (
          <div key={s.label} className="text-center p-4 rounded-xl bg-card border border-border">
            <p className="text-2xl font-bold text-gradient-primary">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ResultsSection;
