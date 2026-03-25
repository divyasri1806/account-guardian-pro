import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, AlertTriangle, CheckCircle, Bot, User } from "lucide-react";

interface AnalysisResult {
  score: number;
  label: string;
  reasons: string[];
}

const DemoSection = () => {
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [tweets, setTweets] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  const analyze = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      const f = parseInt(followers) || 0;
      const fg = parseInt(following) || 0;
      const t = parseInt(tweets) || 0;
      const h = parseInt(hashtags) || 0;

      const ratio = fg > 0 ? f / fg : 0;
      const tweetRate = t;
      const hashtagRate = h;

      let score = 20;
      if (ratio < 0.1 || ratio > 10) score += 25;
      if (tweetRate > 50) score += 20;
      if (hashtagRate > 10) score += 15;
      if (f < 5 && fg > 500) score += 20;
      score = Math.min(score, 99);

      const reasons: string[] = [];
      if (ratio < 0.1) reasons.push("Very low follower-to-following ratio");
      if (ratio > 10) reasons.push("Suspiciously high follower ratio");
      if (tweetRate > 50) reasons.push("Abnormally high posting frequency");
      if (hashtagRate > 10) reasons.push("Excessive hashtag usage");
      if (f < 5 && fg > 500) reasons.push("Mass-following with no followers");
      if (reasons.length === 0) reasons.push("No major anomalies detected");

      setResult({
        score,
        label: score > 60 ? "Likely Bot" : score > 35 ? "Suspicious" : "Likely Genuine",
        reasons,
      });
      setLoading(false);
    }, 1500);
  };

  const isFake = result && result.score > 60;
  const isSuspicious = result && result.score > 35 && result.score <= 60;

  return (
    <section className="py-24 relative" id="demo">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Try It</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Account <span className="text-gradient-primary">Analyzer</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Enter account metrics to get an instant suspicion score and classification.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { label: "Followers", value: followers, set: setFollowers, placeholder: "e.g. 120" },
                { label: "Following", value: following, set: setFollowing, placeholder: "e.g. 5000" },
                { label: "Tweets / Day", value: tweets, set: setTweets, placeholder: "e.g. 80" },
                { label: "Avg Hashtags / Tweet", value: hashtags, set: setHashtags, placeholder: "e.g. 15" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">{field.label}</label>
                  <input
                    type="number"
                    value={field.value}
                    onChange={(e) => field.set(e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition font-mono"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={analyze}
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
            >
              {loading ? (
                <span className="animate-spin w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full" />
              ) : (
                <Search className="w-5 h-5" />
              )}
              {loading ? "Analyzing..." : "Analyze Account"}
            </button>

            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 overflow-hidden"
                >
                  <div className={`p-6 rounded-xl border ${isFake ? "border-destructive/30 bg-destructive/5" : isSuspicious ? "border-warning/30 bg-warning/5" : "border-success/30 bg-success/5"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      {isFake ? <Bot className="w-8 h-8 text-destructive" /> : isSuspicious ? <AlertTriangle className="w-8 h-8 text-warning" /> : <User className="w-8 h-8 text-success" />}
                      <div>
                        <p className={`text-xl font-bold ${isFake ? "text-destructive" : isSuspicious ? "text-warning" : "text-success"}`}>
                          {result.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Suspicion Score: <span className="font-mono font-bold">{result.score}%</span>
                        </p>
                      </div>
                    </div>

                    {/* Score bar */}
                    <div className="w-full h-2 rounded-full bg-secondary mb-4">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${result.score}%` }}
                        transition={{ duration: 0.8 }}
                        className={`h-full rounded-full ${isFake ? "bg-gradient-danger" : isSuspicious ? "bg-warning" : "bg-gradient-safe"}`}
                      />
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-2">Indicators:</p>
                      <ul className="space-y-1">
                        {result.reasons.map((r, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            {isFake || isSuspicious ? <AlertTriangle className="w-3.5 h-3.5 text-destructive shrink-0" /> : <CheckCircle className="w-3.5 h-3.5 text-success shrink-0" />}
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
