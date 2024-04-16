"use client";

import { Canvas } from '@react-three/fiber';
import BrainCanvas from "@/Components/BrainCanvas";

import React from 'react';


export default function Freeroam() {
  return (
    <div style={{ width: '90vw', height: '90vh', overflow: 'hidden' }}>
      <Canvas frameloop="demand" >
        <BrainCanvas />
      </Canvas>
    </div>
  );
}