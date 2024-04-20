"use client";

import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, AdaptiveDpr, AdaptiveEvents, PerformanceMonitor } from '@react-three/drei';
import LandingText from '@/Components/LandingText';
import { Flex } from "@react-three/flex";
import MainPagesBackground from "@/Components/MainPagesBackground";
import Scene from '@/Components/SceneFog';

export default function App() {
  const [dpr, setDpr] = useState(1.5)
  return (
    <div className='fixed top-0 bottom-0 right-0 left-0'>
      <div className={'fixed top-0 bottom-0 right-0 left-0 flex '}>
          
      </div>
    <Canvas dpr={dpr} shadows camera={{ position: [0, 7, 18], fov: 35 }} gl={{ alpha: false }} frameloop="demand">
      <PerformanceMonitor 
        factor={1} 
        onChange={({ factor }) => setDpr(Math.floor(0.5 + 1.5 * factor, 1))}
        flipflops={3} 
        onFallback={() => setDpr(.5)}
      />
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <Scene/>
      <Suspense fallback={null}>
        <Flex justifyContent="center" flexWrap="wrap" alignItems="center" size={[1, 1, 2]}>
          <LandingText text={"Andrew Murphy"} placement={[0, 1.2, -5]}  size={20}/>
          <Flex justifyContent="center" flexWrap="wrap" alignItems="center" size={[1, .9, .1]}>
            <LandingText
              text={"“Any man's death diminishes me, because I am involved in mankind;"} 
              placement={[0, .7, -2]}
              size={70}
            />
            <LandingText
              text={"and therefore never send to know for whom the bell tolls; it tolls for thee.”"} 
              placement={[0, -.2, -2]}
              size={70}
            />
          </Flex>
        </Flex>
        <MainPagesBackground strength={1}/>
        <Environment preset="dawn" />
      </Suspense>
    </Canvas>
    </div>
  )
}


