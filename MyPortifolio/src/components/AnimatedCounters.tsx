
import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  target: number;
  duration?: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ 
  target, 
  duration = 2000, 
  label, 
  prefix = '', 
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(target * progress));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-2xl font-bold text-yellow-400">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
};

const AnimatedCounters = () => {
  const stats = [
    { target: 1000, label: 'Problems Solved', suffix: '+' },
    { target: 15, label: 'Projects Completed', suffix: '+' },
    { target: 50, label: 'Students Mentored', suffix: '+' },
    { target: 8, label: 'Certifications', suffix: '+' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
      {stats.map((stat, index) => (
        <AnimatedCounter
          key={index}
          target={stat.target}
          label={stat.label}
          suffix={stat.suffix}
        />
      ))}
    </div>
  );
};

export default AnimatedCounters;
