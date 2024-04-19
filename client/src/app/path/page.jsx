"use client";

import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Html, AdaptiveDpr, AdaptiveEvents, PerformanceMonitor } from '@react-three/drei';
import BrainModel from '@/Components/BrainModel';
import MainPagesBackground from "@/Components/MainPagesBackground";
import Scene from '@/Components/SceneFog';

export default function Path(){
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [dpr, setDpr] = useState(1.5)
    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, []);
  return (
    <div style={{ width: `${width}px`, height: `${height}px`, overflow: 'hidden'}}>
        <Canvas
            shadows
            camera={{ position: [0, 2, 20], fov: 35 }} 
            gl={{ alpha: false }}
            dpr={dpr}
        >
            <PerformanceMonitor 
                factor={1} 
                onChange={({ factor }) => setDpr(Math.floor(0.5 + 1.5 * factor, 1))}
                flipflops={3} 
                onFallback={() => setDpr(.5)}
            />

            <AdaptiveDpr pixelated />
            <AdaptiveEvents />
            <Scene width={width} height={height}/>
            <Suspense fallback={null}>
            <BrainModel />
            <MainPagesBackground strength={90} />
            <Environment preset="dawn" />
            </Suspense>
        </Canvas>
    </div>
  )
}