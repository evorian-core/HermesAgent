import React, { useEffect, useRef } from 'react';

export const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Micro ambient floating dust particles
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.25 + 0.05,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle particles
      particles.forEach((p) => {
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
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Top subtle ambient spotlight */}
      <div className="absolute -top-[20%] left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-white/[0.04] via-white/[0.015] to-transparent blur-[120px]" />
      
      {/* Center atmospheric glow */}
      <div className="absolute top-[40%] left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.01] blur-[150px]" />

      {/* Subtle fine architectural grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60" />

      {/* Subtle floating particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />
      
      {/* Vignette edge mask */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#050507_95%)] opacity-80" />
    </div>
  );
};
