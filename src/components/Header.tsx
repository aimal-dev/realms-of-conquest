'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Globe, ChevronDown } from 'lucide-react';

import GlobeIcon from '../../public/assets/globe-icon.png'
import ArrowDownWhite from '../../public/assets/arrow-down-white.svg'

const Header: React.FC = () => {
  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        display: 'grid',
        gridTemplateColumns: 'minmax(160px, 1fr) auto minmax(160px, 1fr)',
        alignItems: 'center',
        padding: '24px 64px',
        background: 'linear-gradient(to bottom, rgba(5,5,5,0.9) 0%, transparent 100%)',
        backdropFilter: 'blur(2px)'
      }}
    >
      {/* 1. Logo Section (Left) */}
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div style={{ position: 'relative', width: '150px', height: '45px' }}>
          <Image 
            src="/assets/mythya-logo.svg" 
            alt="Mythya" 
            fill
            className="object-contain" 
            priority 
          />
        </div>
      </div>
      
      {/* 2. Nav Links Section (Center) */}
      <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        {['The Lore', 'Realm', 'Commanders', 'Gameplay Mechanics', 'Conquer & Trade', 'News'].map((item) => (
          <a 
            key={item} 
            href="#" 
            className="title-font"
            style={{
              color: 'rgba(255,255,255,0.8)',
              textTransform: 'uppercase',
              fontSize: '11px',
              letterSpacing: '2px',
              textDecoration: 'none',
              transition: 'all 0.3s',
              whiteSpace: 'nowrap'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#DCC892';
              e.currentTarget.style.textShadow = '0 0 10px rgba(220, 200, 146, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
              e.currentTarget.style.textShadow = 'none';
            }}
          >
            {item}
          </a>
        ))}
      </div>

      {/* 3. Language Selector (Right) */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            cursor: 'pointer', 
            color: '#DCC892',
            padding: '8px 16px'
          }}
        >
          <Image src={GlobeIcon} width={16} height={16} alt ='Globe' />
          <span className="title-font" style={{ fontSize: '12px', letterSpacing: '1.5px' }}>English</span>
          <Image src={ArrowDownWhite} width={12} height={12} alt ='ArrowDown' style={{ opacity: 0.8 }} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
