'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  colorRgb: string;
  life: number;
}

const ButtonMagic: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    const MAX_PARTICLES = 80; // Reduced for performance

    const hexToRgb = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `${r}, ${g}, ${b}`;
    };

    const goldRgb = hexToRgb('#FFFFC3');
    const darkGoldRgb = hexToRgb('#DCC892');

    const resize = () => {
      // Use window.innerWidth to avoid parent container feedback jitter
      canvas.width = Math.min(window.innerWidth, 1440);
      canvas.height = 300;
    };

    window.addEventListener('resize', resize);
    resize();

    const createParticle = () => {
      const isLeft = Math.random() > 0.5;
      const spawnX = isLeft 
        ? canvas.width * 0.35 + (Math.random() - 0.5) * 200 
        : canvas.width * 0.65 + (Math.random() - 0.5) * 200;
      
      const spawnY = canvas.height * 0.6 + (Math.random() - 0.5) * 30;

      return {
        x: spawnX,
        y: spawnY,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 1) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        colorRgb: Math.random() > 0.2 ? goldRgb : darkGoldRgb,
        life: Math.random() * 80 + 40
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (particles.length < MAX_PARTICLES) {
        particles.push(createParticle());
      }

      // Drawing particles without expensive shadowBlur
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.life--;
        p.opacity -= 0.004;

        if (p.life <= 0 || p.opacity <= 0) {
          particles[i] = createParticle();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.colorRgb}, ${p.opacity})`;
        ctx.fill();
        
        // Add a second tiny dot for "glint" effect without shadowBlur
        if (p.size > 1) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.8})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="pointer-events-none"
      style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        zIndex: -1,
        opacity: 0.7,
        willChange: 'transform' // GPU acceleration
      }} 
    />
  );
};

export default ButtonMagic;
