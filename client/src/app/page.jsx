"use client";

import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, AdaptiveDpr, AdaptiveEvents, PerformanceMonitor } from '@react-three/drei';
import LandingText from '@/Components/LandingText';
import { Flex } from "@react-three/flex";
import MainPagesBackground from "@/Components/MainPagesBackground";
import Scene from '@/Components/SceneFog';
import Link from 'next/link';
import { GoArrowLeft, GoArrowRight  } from "react-icons/go";

export default function App() {
  const [dpr, setDpr] = useState(1.5);
  return (
    <div className='fixed top-0 bottom-0 right-0 left-0'>
      <div className={'fixed top-0 bottom-0 right-0 left-0 z-10 flex justify-center'}>
          <Link href="/path" className='fixed border-b-4 border-white bottom-1/4 text-sm sm:text-4xl'>Begin</Link>
      </div>
    <Canvas dpr={dpr} shadows camera={{ position: [0, 7, 18], fov: 35 }} gl={{ alpha: false }} frameloop="demand">
      <PerformanceMonitor 
        factor={1} 
        onChange={({ factor }) => setDpr(Math.floor(0.5 + 1.5 * factor, 1))}
        flipflops={2} 
        onFallback={() => setDpr(.5)}
      />
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <Scene/>
      <Suspense fallback={null}>
        <Flex justifyContent="center" flexWrap="wrap" alignItems="center" size={[1, 1, 2]}>
          <LandingText text={"Andrew Murphy"} placement={[0, 1.2, -5]}  size={.6}/>
          <Flex justifyContent="center" flexWrap="wrap" alignItems="center" size={[1, .9, .1]}>
            <LandingText
              text={"“Any man's death diminishes me, because I am involved in mankind; and"} 
              placement={[0, .6, -2]}
              size={40}
            />
            <LandingText
              text={"therefore never send to know for whom the bell tolls; it tolls for thee.”"} 
              placement={[0, -.3, -1]}
              size={40}
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


