import React from 'react';

export const Fog: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-0 left-0 w-[200%] h-full bg-[url('https://raw.githubusercontent.com/daniel-friyia/assets/master/fog1.png')] bg-repeat-x bg-contain opacity-20 animate-fog-drift" />
      <div className="absolute top-0 left-0 w-[200%] h-full bg-[url('https://raw.githubusercontent.com/daniel-friyia/assets/master/fog2.png')] bg-repeat-x bg-contain opacity-10 animate-fog-drift" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
    </div>
  );
};