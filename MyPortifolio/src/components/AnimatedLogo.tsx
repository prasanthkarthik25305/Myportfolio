
import React, { useState } from 'react';

const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mb-8 relative">
      <div 
        className={`
          w-40 h-40 mx-auto mb-6 rounded-full 
          bg-gradient-to-r from-yellow-400 to-yellow-600 p-1
          transition-all duration-500 ease-in-out
          ${isHovered ? 'transform rotate-12 scale-110' : ''}
          animate-glow
          relative overflow-hidden
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          filter: 'drop-shadow(0 0 20px rgba(247, 183, 49, 0.5))',
        }}
      >
        {/* Shield pattern overlay */}
        <div className="absolute inset-0 rounded-full opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M50 5 L80 20 L80 50 Q80 80 50 95 Q20 80 20 50 L20 20 Z"
              fill="rgba(255,255,255,0.3)"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1"
            />
          </svg>
        </div>
        
        {/* Main logo */}
        <div className={`
          w-full h-full rounded-full bg-gray-800 
          flex items-center justify-center text-6xl font-bold
          transition-all duration-500
          ${isHovered ? 'bg-gray-700' : ''}
          relative z-10
        `}>
          <span className="bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
            PKV
          </span>
        </div>
        
        {/* Rotating glow rings */}
        <div className={`
          absolute inset-0 rounded-full 
          border-2 border-yellow-400/30
          ${isHovered ? 'animate-spin' : ''}
          transition-all duration-500
        `} style={{ animationDuration: '3s' }} />
        
        <div className={`
          absolute inset-2 rounded-full 
          border border-blue-400/20
          ${isHovered ? 'animate-spin' : ''}
          transition-all duration-500
        `} style={{ animationDuration: '4s', animationDirection: 'reverse' }} />
      </div>
    </div>
  );
};

export default AnimatedLogo;
