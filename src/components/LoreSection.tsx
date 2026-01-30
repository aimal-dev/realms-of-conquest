'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LoreSection: React.FC = () => {
  return (
    <section 
      style={{
        position: 'relative',
        width: '100%',
        padding: '120px 48px',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <div style={{ width: '100%', maxWidth: '1440px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
        
        {/* Text Area */}
        <motion.div
           initial={{ x: -100, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
        >
          <h2 style={{ color: '#D7B882', fontSize: '10px', letterSpacing: '4px', marginBottom: '16px', textTransform: 'uppercase' }}>The Lore</h2>
          <h1 style={{ fontSize: '48px', marginBottom: '32px' }}>Mythya</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: '1.6', marginBottom: '32px', maxWidth: '600px' }}>
             Mythya is a groundbreaking all-real-time strategy game that brings the face of ancient mythologies into an immersive world. With powerful military commanders, dynamic realms, and a player-owned economy, Mythya offers an epic experience for both casual and hardcore strategy players.
          </p>
          
          <div style={{ position: 'relative', width: '320px', height: '180px', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
             <Image src="/assets/video-thumbnail.svg" alt="Preview" fill style={{ objectFit: 'cover' }} />
             <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyItems: 'center', background: 'rgba(0,0,0,0.4)', justifyContent: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <div style={{ width: 0, height: 0, borderTop: '8px solid transparent', borderLeft: '12px solid white', borderBottom: '8px solid transparent', marginLeft: '4px' }} />
                </div>
             </div>
          </div>
        </motion.div>

        {/* Character Image */}
        <motion.div
           initial={{ x: 100, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           viewport={{ once: true }}
           style={{ position: 'relative', height: '700px' }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(165,145,93,0.1)', filter: 'blur(80px)', borderRadius: '50%' }} />
          <Image 
            src="/assets/mytha-soldier.svg" 
            alt="Soldier" 
            fill 
            className="object-contain" 
            style={{ filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.1))' }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default LoreSection;
