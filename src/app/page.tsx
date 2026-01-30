'use client';

import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LoreSection from '@/components/LoreSection';
import StarField from '@/components/StarField';
import SmokeEffect from '@/components/SmokeEffect';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      {/* Background Effects */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <StarField />
        <SmokeEffect />
      </div>

      <Header />
      
      <main style={{ position: 'relative', zIndex: 10 }}>
        <HeroSection />
        
        <div style={{ backgroundColor: '#050505', position: 'relative' }}>
          <LoreSection />
        </div>
      </main>
    </div>
  );
}
