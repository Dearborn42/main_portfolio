"use client";

import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, MeshReflectorMaterial, Html, AdaptiveDpr, AdaptiveEvents, PerformanceMonitor } from '@react-three/drei';
import LandingText from '@/Components/LandingText';
import BrainModel from '@/Components/BrainModel';

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
            <fog attach="fog" args={['#080808', 20, 40]} />
            <color attach="background" args={['#080808']} />
            <ambientLight intensity={1} />
            <directionalLight 
                castShadow intensity={2} 
                position={[10, 6, 6]} 
                shadow-mapSize={[width, height]}
            >
                <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
            </directionalLight>
            <Suspense fallback={null}>
            <BrainModel />
            <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
                blur={[400, 100]}
                resolution={1024}
                mixBlur={1}
                mixStrength={90}
                depthScale={10}
                minDepthThreshold={0.85}
                color="#212020"
                metalness={0.6}
                roughness={1}
            />
            </mesh>
            <Environment preset="dawn" />
            </Suspense>
        </Canvas>
    </div>
  )
}