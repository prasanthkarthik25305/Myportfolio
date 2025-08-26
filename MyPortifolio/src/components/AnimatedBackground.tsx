
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  char: string;
  color: string;
  size: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  // Cybersecurity and CP themed characters
  const securityChars = ['🔒', '🛡️', '🔑', '0', '1', 'AES', 'RSA', 'SHA', 'JWT', 'SSL'];
  const cpChars = ['{', '}', '[', ']', '<', '>', 'O(n)', 'BFS', 'DFS', 'DP', '++', '--'];
  const allChars = [...securityChars, ...cpChars];

  const colors = ['#00ff41', '#facc15', '#3b82f6', '#10b981', '#f59e0b'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.8 + 0.2,
      char: allChars[Math.floor(Math.random() * allChars.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 12 + 8
    });

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 100; i++) {
        particlesRef.current.push(createParticle());
      }
    };

    const updateParticles = () => {
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.opacity -= 0.001;

        if (particle.y > canvas.height || particle.opacity <= 0) {
          particlesRef.current[index] = createParticle();
          particlesRef.current[index].y = -20;
        }

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
        }
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.font = `${particle.size}px 'JetBrains Mono', monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(particle.char, particle.x, particle.y);
        ctx.restore();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 1 }}
    />
  );
};

export default AnimatedBackground;
