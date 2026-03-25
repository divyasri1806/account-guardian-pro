import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const nodes = [
  { x: 300, y: 200, r: 18, type: "bot" },
  { x: 350, y: 140, r: 12, type: "bot" },
  { x: 400, y: 210, r: 14, type: "bot" },
  { x: 260, y: 150, r: 10, type: "bot" },
  { x: 320, y: 260, r: 11, type: "bot" },
  { x: 380, y: 160, r: 9, type: "bot" },
  { x: 100, y: 100, r: 16, type: "real" },
  { x: 150, y: 300, r: 20, type: "real" },
  { x: 500, y: 280, r: 15, type: "real" },
  { x: 550, y: 120, r: 13, type: "real" },
  { x: 80, y: 250, r: 11, type: "real" },
  { x: 480, y: 80, r: 17, type: "real" },
  { x: 200, y: 200, r: 10, type: "real" },
  { x: 450, y: 300, r: 12, type: "real" },
];

const edges = [
  [0,1],[0,2],[0,3],[0,4],[1,2],[1,5],[2,5],[3,4],[4,5],
  [6,12],[7,12],[8,13],[9,11],[10,7],
  [0,12],[2,8],[5,9],
];

const VisualizationSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = 640 * dpr;
    canvas.height = 400 * dpr;
    ctx.scale(dpr, dpr);

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, 640, 400);
      frame++;

      // edges
      edges.forEach(([a, b]) => {
        const na = nodes[a], nb = nodes[b];
        const isBotEdge = na.type === "bot" && nb.type === "bot";
        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.lineTo(nb.x, nb.y);
        ctx.strokeStyle = isBotEdge ? "rgba(239,68,68,0.3)" : "rgba(100,116,139,0.15)";
        ctx.lineWidth = isBotEdge ? 1.5 : 0.8;
        ctx.stroke();
      });

      // nodes
      nodes.forEach((n) => {
        const pulse = Math.sin(frame * 0.03 + n.x * 0.01) * 2;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + pulse, 0, Math.PI * 2);
        if (n.type === "bot") {
          ctx.fillStyle = "rgba(239,68,68,0.15)";
          ctx.fill();
          ctx.strokeStyle = "rgba(239,68,68,0.7)";
        } else {
          ctx.fillStyle = "rgba(45,212,191,0.1)";
          ctx.fill();
          ctx.strokeStyle = "rgba(45,212,191,0.5)";
        }
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // inner dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = n.type === "bot" ? "#ef4444" : "#2dd4bf";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="py-24 relative" id="visualization">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Network Analysis</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Suspicious <span className="text-gradient-primary">Clusters</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bot networks form tightly connected clusters. Our graph analysis exposes coordinated inauthentic behavior.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-2xl border border-border bg-card p-4 overflow-hidden">
            <canvas
              ref={canvasRef}
              style={{ width: "100%", height: "auto", aspectRatio: "640/400" }}
              className="rounded-lg"
            />
            <div className="flex items-center justify-center gap-8 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-destructive" />
                Bot Accounts
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" />
                Genuine Accounts
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualizationSection;
