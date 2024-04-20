"use client";

import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, AdaptiveDpr, AdaptiveEvents, PerformanceMonitor } from '@react-three/drei';
import BrainModel from '@/Components/BrainModel';
import Scene from '@/Components/SceneFog';

export default function Path(){
    const [dpr, setDpr] = useState(1.5);
    return (
        <div className='fixed top-0 bottom-0 right-0 left-0'>
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
                <Scene />
                <Suspense fallback={null}>
                <BrainModel />
                <Environment preset="dawn" />
                </Suspense>
            </Canvas>
        </div>
    )
}