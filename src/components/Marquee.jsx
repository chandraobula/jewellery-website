import { useState } from 'react';

const Marquee = ({ items, speed = 15 }) => {
  const [isPaused, setIsPaused] = useState(false);
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div 
      className="relative w-full overflow-hidden bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 py-3 sm:py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="flex whitespace-nowrap"
        style={{
          animation: `scroll ${speed}s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running'
        }}
      >
        <div className="flex items-center gap-8">
          {duplicatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-8 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg">
              <span className="whitespace-nowrap">{item}</span>
              <span className="text-white/30">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
