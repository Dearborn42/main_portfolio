"use client";

import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, AdaptiveDpr, AdaptiveEvents, PerformanceMonitor } from '@react-three/drei';
import BrainModel from '@/Components/BrainModel';
import { GoChevronLeft , GoChevronRight   } from "react-icons/go";
import Link from 'next/link';
import dynamic from 'next/dynamic';
const Scene = dynamic(() => import('@/Components/SceneFog'), { ssr: false }); 

export default function Path(){
    const [dpr, setDpr] = useState(1.5);
    return (
        <div className='fixed top-0 bottom-0 right-0 left-0'>
            <div className="fixed top-0 bottom-0 right-0 left-0 z-10 flex justify-between">
                <Link href="/path/1" className="fixed bottom-1/3 text-sm sm:text-4xl left-1/4 arrow arrow1">
                    <span><GoChevronLeft /></span>
                    <span><GoChevronLeft /></span>
                    <span><GoChevronLeft /></span>
                </Link>
                <Link href="/path/2" className="fixed bottom-1/3 text-sm sm:text-4xl right-1/4 arrow arrow2">
                    <span><GoChevronRight /></span>
                    <span><GoChevronRight /></span>
                    <span><GoChevronRight /></span>
                </Link>
            </div>
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