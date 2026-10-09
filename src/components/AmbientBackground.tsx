import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Fundo ambiente: luz difusa, grade arquitetônica discreta, partículas
 * de poeira lentas e vinheta. Sem partículas em movimento reduzido.
 */
export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const count = 26;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.09,
      vy: (Math.random() - 0.5) * 0.09,
      size: Math.random() * 1.4 + 0.4,
      alpha: Math.random() * 0.2 + 0.04,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-[22%] left-1/2 h-[680px] w-[920px] -translate-x-1/2 rounded-full bg-gradient-to-b from-white/[0.045] via-white/[0.012] to-transparent blur-[130px]" />
      <div className="absolute top-[45%] left-1/2 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-white/[0.012] blur-[150px]" />
      <div className="bg-grid-subtle absolute inset-0 opacity-70" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_#050507_96%)] opacity-80" />
    </div>
  );
}
