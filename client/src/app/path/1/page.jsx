"use client";

import { Canvas } from '@react-three/fiber';
import BrainCanvas from "@/Components/BrainCanvas";
import { AdaptiveDpr, AdaptiveEvents, PerformanceMonitor } from '@react-three/drei';
import React, {useState} from 'react';


export default function Freeroam() {
  const [dpr, setDpr] = useState(1.5)
  return (
    <div style={{ width: '90vw', height: '90vh', overflow: 'hidden' }}>
      <Canvas frameloop="demand" dpr={dpr}>
        <PerformanceMonitor 
          factor={1} 
          onChange={({ factor }) => setDpr(Math.floor(0.5 + 1.5 * factor, 1))}
          flipflops={3} 
          onFallback={() => setDpr(.5)}
        />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <BrainCanvas />
      </Canvas>
    </div>
  );
}