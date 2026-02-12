import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Fog } from './ui/Fog';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Canvas Particle System — logic untouched
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();

    const particles: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) p.y = height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 160, 23, ${p.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-ocean-gradient text-white grain-overlay hero-glow">
      <Fog />

      {/* Canvas Particle Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div className="z-10 text-center px-4 max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h2 className="font-mono text-gold-500 text-sm md:text-base tracking-[0.3em] mb-4 uppercase text-glow-gold">
            System Online // Secure Connection Established
          </h2>
        </motion.div>

        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
        >
          <h1 className="font-display text-5xl md:text-8xl font-bold text-white tracking-wide leading-tight drop-shadow-[0_4px_30px_rgba(212,160,23,0.15)]">
            Grand Line
            <br />
            Infrastructure
          </h1>
          {/* Gold Underline Sweep */}
          <motion.div
            className="absolute -bottom-2 md:-bottom-4 left-0 h-1 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 shadow-[0_0_20px_rgba(212,160,23,0.6)]"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.8, ease: 'circOut' }}
          />
        </motion.div>

        <motion.p
          className="font-serif text-slate-300 mt-8 text-xl md:text-2xl italic drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          "Captain of Production Infrastructure &amp; Guardian of the Immutable Ledger"
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <span className="px-5 py-2.5 border border-gold-600/40 bg-navy-800/60 rounded text-gold-400 shadow-[0_0_15px_rgba(212,160,23,0.1)] backdrop-blur-sm">
            CI/CD Pipelines
          </span>
          <span className="hidden md:block w-2 h-2 rounded-full bg-gold-600/30" />
          <span className="px-5 py-2.5 border border-gold-600/40 bg-navy-800/60 rounded text-gold-400 shadow-[0_0_15px_rgba(212,160,23,0.1)] backdrop-blur-sm">
            Bitcoin Core
          </span>
          <span className="hidden md:block w-2 h-2 rounded-full bg-gold-600/30" />
          <span className="px-5 py-2.5 border border-gold-600/40 bg-navy-800/60 rounded text-gold-400 shadow-[0_0_15px_rgba(212,160,23,0.1)] backdrop-blur-sm">
            Kubernetes
          </span>
        </motion.div>
      </div>

      <div className="absolute bottom-10 animate-bounce z-10">
        <svg className="w-6 h-6 text-gold-500 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};