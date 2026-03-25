import { Github, Youtube, Mail, Twitter, Linkedin } from "lucide-react";

const team = [
  { name: "Project Lead", role: "ML Engineering & Architecture" },
  { name: "Data Scientist", role: "Feature Engineering & NLP" },
  { name: "Frontend Dev", role: "Dashboard & Visualization" },
];

const FooterSection = () => (
  <footer className="py-16 border-t border-border" id="contact">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-lg font-bold mb-4">
            <span className="text-gradient-primary">FakeDetect</span>
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            AI-powered fake account detection for safer social media platforms.
          </p>
          <div className="flex gap-3">
            {[Github, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Team</h4>
          <div className="space-y-3">
            {team.map((t) => (
              <div key={t.name}>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Get in Touch</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <button className="px-4 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition">
                <Mail className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground">Subscribe for project updates and releases.</p>
          </div>
          <div className="mt-6 flex gap-3">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition">GitHub Repo</a>
            <span className="text-border">•</span>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition">Demo Video</a>
            <span className="text-border">•</span>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition">Docs</a>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 FakeDetect. Built for a safer internet.
      </div>
    </div>
  </footer>
);

export default FooterSection;
