'use client';

import React, { useEffect, useRef } from 'react';

class SmokeParticle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  maxLife: number;
  life: number;
  canvasWidth: number;
  canvasHeight: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 200 + 100;
    this.speedX = (Math.random() - 0.5) * 0.2;
    this.speedY = (Math.random() - 0.5) * 0.2;
    this.maxLife = Math.random() * 500 + 500;
    this.life = Math.random() * this.maxLife;
    this.opacity = 0;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life++;

    if (this.life < this.maxLife * 0.2) {
      this.opacity = (this.life / (this.maxLife * 0.2)) * 0.05;
    } else if (this.life > this.maxLife * 0.8) {
      this.opacity = (1 - (this.life - this.maxLife * 0.8) / (this.maxLife * 0.2)) * 0.05;
    } else {
      this.opacity = 0.05;
    }

    if (this.life >= this.maxLife) {
      this.life = 0;
      this.opacity = 0;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
    gradient.addColorStop(0, `rgba(100, 100, 100, ${this.opacity})`);
    gradient.addColorStop(1, 'rgba(100, 100, 100, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
  }
}

const SmokeEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: SmokeParticle[] = [];
    let animationFrameId: number;

    const init = () => {
      particles = [];
      const count = 20;
      for (let i = 0; i < count; i++) {
        particles.push(new SmokeParticle(canvas.width, canvas.height));
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        mixBlendMode: 'screen',
      }}
    />
  );
};

export default SmokeEffect;
