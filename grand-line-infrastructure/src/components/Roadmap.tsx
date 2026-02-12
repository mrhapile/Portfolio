import React, { useEffect, useRef, useState, useLayoutEffect, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { MILESTONES } from '../data/constants';
import { Milestone } from '../types';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export const Roadmap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const shipRef = useRef<SVGGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [milestonePositions, setMilestonePositions] = useState<{ x: number; y: number }[]>([]);

  // Update dimensions on resize — logic untouched
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = Math.max(window.innerHeight * 3, MILESTONES.length * 400);
      setDimensions({ width, height });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pathD = useMemo(() => {
    const { width, height } = dimensions;
    if (width === 0) return '';

    const startX = width * 0.5;
    const startY = 100;

    return `
      M ${startX} ${startY}
      C ${width * 0.1} ${height * 0.15}, ${width * 0.8} ${height * 0.2}, ${width * 0.5} ${height * 0.25}
      C ${width * 0.2} ${height * 0.35}, ${width * 0.9} ${height * 0.4}, ${width * 0.5} ${height * 0.5}
      C ${width * 0.1} ${height * 0.6}, ${width * 0.8} ${height * 0.7}, ${width * 0.5} ${height * 0.75}
      C ${width * 0.2} ${height * 0.85}, ${width * 0.9} ${height * 0.9}, ${width * 0.5} ${height}
    `;
  }, [dimensions]);

  // MotionPathPlugin animation — logic untouched
  useLayoutEffect(() => {
    if (!pathRef.current || !shipRef.current || !dimensions.width) return;

    const context = gsap.context(() => {
      const path = pathRef.current!;
      const totalLength = path.getTotalLength();
      const positions: { x: number; y: number }[] = [];

      MILESTONES.forEach((_, i) => {
        const progress = 0.1 + (i / MILESTONES.length) * 0.8;
        const point = path.getPointAtLength(totalLength * progress);
        positions.push({ x: point.x, y: point.y });
      });
      setMilestonePositions(positions);

      gsap.to(shipRef.current, {
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          autoRotate: 90,
          alignOrigin: [0.5, 0.5],
        },
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      });
    }, containerRef);

    return () => context.revert();
  }, [pathD, dimensions]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-navy-950"
      style={{ height: dimensions.height }}
    >
      {/* Dark vignette overlay for depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,10,16,0.6)_100%)] z-[1]" />

      <div className="absolute top-10 left-0 w-full text-center z-10 pointer-events-none">
        <h2 className="text-3xl text-gold-500 font-display text-glow-gold">Voyage Log</h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-3" />
        <p className="text-slate-500 text-sm font-mono mt-2">Scroll to sail through time</p>
      </div>

      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        width={dimensions.width}
        height={dimensions.height}
        style={{ minHeight: '100vh' }}
      >
        {/* Glow path (behind main path) */}
        <path
          d={pathD}
          fill="none"
          stroke="rgba(212, 160, 23, 0.08)"
          strokeWidth="20"
          className="blur-sm"
        />
        {/* Main dashed path */}
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke="#1A2C42"
          strokeWidth="3"
          strokeDasharray="8,8"
          className="path-glow"
        />
        {/* Ship */}
        <g ref={shipRef}>
          <circle r="18" fill="rgba(212, 160, 23, 0.1)" />
          <circle r="10" fill="rgba(212, 160, 23, 0.15)" />
          <path fill="#D4A017" d="M0 -20 L15 20 L0 15 L-15 20 Z" className="drop-shadow-[0_0_12px_rgba(212,160,23,0.8)]" />
        </g>
      </svg>

      {/* Render Milestones */}
      {milestonePositions.map((pos, i) => (
        <div
          key={MILESTONES[i].id}
          className="absolute z-10"
          style={{
            left: pos.x,
            top: pos.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <MilestoneCard milestone={MILESTONES[i]} isLeft={pos.x < dimensions.width / 2} />
        </div>
      ))}
    </section>
  );
};

const MilestoneCard: React.FC<{ milestone: Milestone; isLeft: boolean }> = ({ milestone, isLeft }) => {
  return (
    <div className={`group flex flex-col ${isLeft ? 'items-end text-right' : 'items-start text-left'}`}>
      {/* Island Indicator */}
      <div className="w-5 h-5 bg-gold-500 rounded-full animate-pulse-slow island-glow mb-4" />

      {/* Card */}
      <div
        className={`w-64 bg-navy-900/95 backdrop-blur-sm border border-navy-700 p-6 rounded-sm shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-gold-500 hover:-translate-y-2 hover:shadow-[0_4px_40px_rgba(212,160,23,0.12)] ${isLeft ? 'mr-8' : 'ml-8'
          }`}
      >
        <span className="text-xs font-mono text-gold-500 block mb-1 text-glow-gold">{milestone.year}</span>
        <h3 className="text-lg font-bold text-white font-display mb-3">{milestone.title}</h3>
        <ul className="space-y-1.5">
          {milestone.description.map((desc: string, i: number) => (
            <li
              key={i}
              className={`text-slate-400 text-xs font-mono flex items-center ${isLeft ? 'justify-end' : 'justify-start'}`}
            >
              {!isLeft && <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2 shadow-[0_0_6px_#D4A017]" />}
              {desc}
              {isLeft && <span className="w-1.5 h-1.5 bg-gold-500 rounded-full ml-2 shadow-[0_0_6px_#D4A017]" />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};