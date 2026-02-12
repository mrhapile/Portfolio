import React from 'react';

export const Fog: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 fog-layer">
      {/* Layer 1: slow left-to-right drift */}
      <div
        className="absolute top-0 left-0 w-[200%] h-full opacity-[0.07] animate-fog-drift"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(240,230,210,0.12) 20%, transparent 40%, rgba(240,230,210,0.08) 60%, transparent 80%, rgba(240,230,210,0.1) 100%)',
        }}
      />
      {/* Layer 2: slower reverse drift for depth */}
      <div
        className="absolute top-0 left-0 w-[200%] h-full opacity-[0.04] animate-fog-drift"
        style={{
          animationDuration: '35s',
          animationDirection: 'reverse',
          background:
            'linear-gradient(90deg, transparent 10%, rgba(212,160,23,0.06) 30%, transparent 50%, rgba(212,160,23,0.04) 70%, transparent 90%)',
        }}
      />
      {/* Layer 3: bottom fog bank */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-navy-950/60 to-transparent" />
    </div>
  );
};