'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import ButtonMagic from './ButtonMagic';

const HeroSection: React.FC = () => {
  return (
    <section 
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '100vw',
        minHeight: '120vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        paddingTop: '100px',
      }}
    >
      {/* 1. Global Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image 
          src="/assets/background-image-1.svg" 
          alt="BG" 
          fill 
          style={{ objectFit: 'cover', opacity: 0.6 }}
          priority
        />
        {/* Top and Bottom Fades */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 40%, transparent 60%, #050505 100%)' }} />
        
        {/* The Backlight (Roshni) centered behind content */}
        <div className="backlight-glow" style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', width: '1000px', height: '1000px' }} />
      </div>

      {/* 2. King & Foreground Elements */}
      <div style={{ position: 'relative', zIndex: 5, width: '100%', maxWidth: '1440px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* The King Image */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ position: 'relative', width: '800px', height: '800px' }}
        >
          <Image 
            src="/assets/king.svg" 
            alt="The King" 
            fill 
            className="object-contain" 
            priority 
          />
        </motion.div>

        {/* Text Area */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ marginTop: '-200px', textAlign: 'center', zIndex: 10, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <h1 style={{ fontWeight: '400', fontSize: '5rem', lineHeight: '1', marginBottom: '40px', color: 'white' }}>
            An Epic Journey <br />
            <span className="gold-text">into Realms of Conquest</span>
          </h1>

          {/* Registration Input - The Hexagon Container */}
          <div className="clip-hexagon-full" style={{ position: 'relative', width: '650px', height: '64px', background: 'rgba(255,255,255,0.1)', padding: '1px', marginBottom: '48px' }}>
            <div className="clip-hexagon-full" style={{ width: '100%', height: '100%', background: '#050505', display: 'flex' }}>
              <input 
                type="email" 
                placeholder="Pre-Registration with Email Address" 
                style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'white', padding: '0 40px', fontSize: '16px', fontStyle: 'italic', fontFamily: 'Inter' }}
              />
              <div 
                className="clip-slanted-right" 
                style={{ 
                  width: '200px', 
                  height: '100%', 
                  background: 'linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                <span 
                  className="title-font"
                  style={{ color: 'white', letterSpacing: '2px', fontSize: '13px', fontWeight: 'bold', textShadow: '0 0 10px rgba(0,0,0,0.5)' }}
                >
                  REGISTER
                </span>
              </div>
            </div>
          </div>

          {/* Button Section Container with Magic Effect */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', display: 'flex', justifyContent: 'center', gap: '32px' }}>
            {/* New Magic Particles Component */}
            <ButtonMagic />

            {/* Google Play Button */}
            <div className="clip-hexagon-full" style={{ padding: '1px', background: 'rgba(255,255,255,0.2)' }}>
              <div className="clip-hexagon-full" style={{ display: 'flex', alignItems: 'center', background: 'black', padding: '12px 32px', cursor: 'pointer', minWidth: '260px', height: '66px', justifyContent: 'center' }}>
                <Image src="/assets/playstore.png" alt="Play Store" width={140} height={40} className='object-contain' />
              </div>
            </div>

            {/* Rewards Button */}
            <div className="clip-hexagon-full" style={{ padding: '1px', background: 'rgba(165,145,93,0.4)' }}>
              <div className="clip-hexagon-full" style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'linear-gradient(135deg, #FFFFC3 0%, #DCC892 50%, #A5915D 100%)', padding: '12px 32px', cursor: 'pointer', minWidth: '260px', height: '66px', justifyContent: 'center' }}>
                <Image src="/assets/reward-btn-icon.png" alt="Reward" width={32} height={32} />
                <div style={{ textAlign: 'left' }}>
                  <div className="title-font" style={{ fontSize: '10px', color: 'rgba(0,0,0,0.6)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>Pre-Registration</div>
                  <div className="title-font" style={{ fontSize: '18px', fontWeight: 'bold', color: 'black', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Rewards</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Arrow */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ marginTop: '80px', cursor: 'pointer' }}
          >
            <ChevronDown size={48} color="#DCC892" strokeWidth={1} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
