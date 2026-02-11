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
  const [milestonePositions, setMilestonePositions] = useState<{ x: number, y: number }[]>([]);

  // Update dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Make height proportional to number of milestones to ensure spacing
      const height = Math.max(window.innerHeight * 3, MILESTONES.length * 400);
      setDimensions({ width, height });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pathD = useMemo(() => {
    const { width, height } = dimensions;
    if (width === 0) return "";

    const startX = width * 0.5;
    const startY = 100;

    // Create a winding path that goes heavily left and right
    // Using percentages of width for X to ensure responsiveness
    return `
      M ${startX} ${startY}
      C ${width * 0.1} ${height * 0.15}, ${width * 0.8} ${height * 0.20}, ${width * 0.5} ${height * 0.25}
      C ${width * 0.2} ${height * 0.35}, ${width * 0.9} ${height * 0.40}, ${width * 0.5} ${height * 0.5}
      C ${width * 0.1} ${height * 0.60}, ${width * 0.8} ${height * 0.70}, ${width * 0.5} ${height * 0.75}
      C ${width * 0.2} ${height * 0.85}, ${width * 0.9} ${height * 0.90}, ${width * 0.5} ${height}
    `;
  }, [dimensions]);

  useLayoutEffect(() => {
    if (!pathRef.current || !shipRef.current || !dimensions.width) return;

    const context = gsap.context(() => {
      // Position milestones along the path
      const path = pathRef.current!;
      const totalLength = path.getTotalLength();
      const positions: { x: number, y: number }[] = [];

      MILESTONES.forEach((_, i) => {
        // Distribute evenly along the path (avoiding very start/end)
        const progress = 0.1 + (i / (MILESTONES.length)) * 0.8;
        const point = path.getPointAtLength(totalLength * progress);
        positions.push({ x: point.x, y: point.y });
      });
      setMilestonePositions(positions);

      // Animate Ship
      gsap.to(shipRef.current, {
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          autoRotate: 90,
          alignOrigin: [0.5, 0.5],
        },
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        }
      });
    }, containerRef);

    return () => context.revert();
  }, [pathD, dimensions]);

  return (
    <section
      ref={containerRef}
      className="relative bg-navy-950 overflow-hidden"
      style={{ height: dimensions.height }}
    >
      <div className="absolute top-10 left-0 w-full text-center z-10 pointer-events-none">
        <h2 className="text-3xl text-gold-500 font-display">Voyage Log</h2>
        <p className="text-slate-500 text-sm font-mono mt-2">Scroll to sail through time</p>
      </div>

      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        width={dimensions.width}
        height={dimensions.height}
        style={{ minHeight: '100vh' }}
      >
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke="#1A2C42"
          strokeWidth="4"
          strokeDasharray="10,10"
        />
        <g ref={shipRef} className="text-gold-500 drop-shadow-[0_0_10px_rgba(212,160,23,0.8)]">
          <path fill="currentColor" d="M0 -20 L15 20 L0 15 L-15 20 Z" />
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
            transform: 'translate(-50%, -50%)' // Center on point
          }}
        >
          <MilestoneCard milestone={MILESTONES[i]} isLeft={pos.x < dimensions.width / 2} />
        </div>
      ))}
    </section>
  )
}

const MilestoneCard: React.FC<{ milestone: Milestone, isLeft: boolean }> = ({ milestone, isLeft }) => {
  return (
    <div className={`group flex flex-col ${isLeft ? 'items-end text-right' : 'items-start text-left'}`}>
      {/* Island Indicator */}
      <div className="w-4 h-4 bg-gold-500 rounded-full animate-pulse-slow shadow-[0_0_20px_#D4A017] mb-4" />

      {/* Card */}
      <div className={`w-64 bg-navy-900/90 backdrop-blur-sm border border-navy-700 p-6 rounded-sm shadow-xl transition-all duration-500 hover:border-gold-500 hover:-translate-y-2 ${isLeft ? 'mr-8' : 'ml-8'}`}>
        <span className="text-xs font-mono text-gold-600 block mb-1">{milestone.year}</span>
        <h3 className="text-lg font-bold text-white font-display mb-3">{milestone.title}</h3>
        <ul className="space-y-1">
          {milestone.description.map((desc: string, i: number) => (
            <li key={i} className={`text-slate-400 text-xs font-mono flex items-center ${isLeft ? 'justify-end' : 'justify-start'}`}>
              {!isLeft && <span className="w-1 h-1 bg-gold-500 rounded-full mr-2" />}
              {desc}
              {isLeft && <span className="w-1 h-1 bg-gold-500 rounded-full ml-2" />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};