"use client";

import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { 
  Environment,
  AdaptiveDpr, 
  AdaptiveEvents, 
  PerformanceMonitor,
  Instances
} from '@react-three/drei';
import Link from 'next/link';
import { FaArrowLeft } from "react-icons/fa6";
import dynamic from 'next/dynamic';
const Scene = dynamic(() => import('@/Components/SceneFog'), { ssr: false });
const AboutMeOrbs = dynamic(() => import('@/Components/AboutMeOrbs'), { ssr: false });

export default function Information() {
  const [dpr, setDpr] = useState(1.5);
  const [active, setActive] = useState(null);
  return (
    <div className='fixed top-0 bottom-0 right-0 left-0'>
      <div className="fixed top-0 right-0 z-10 flex justify-between">
        <Link href="/path" className="fixed top-12 text-sm sm:text-4xl left-24">
          <FaArrowLeft />
        </Link>
      </div>
      <Canvas dpr={dpr} shadows camera={{ position: [0, 18, 20], fov: 35 }} gl={{ alpha: false }}>
        {/* <Perf position="top-left" /> */}
        <PerformanceMonitor 
          factor={1} 
          onChange={({ factor }) => setDpr(Math.floor(0.5 + 1.5 * factor, 1))}
          flipflops={3} 
          onFallback={() => setDpr(.5)}
        />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <Scene active={active}/>
        <Suspense fallback={null}>
          <Instances limit={3} range={3} position={[0, 0, 0]}>
            <sphereGeometry args={[2,16,16]} />
            <meshStandardMaterial color="#f0f0f0"/>
            <AboutMeOrbs 
              key={"1"} 
              name="first"
              pos={[0, 0, -2]} 
              active={active} 
              setActive={setActive}
            />
            <AboutMeOrbs 
              key={"2"} 
              name="second" 
              pos={[4, 0, 3]} 
              active={active} 
              setActive={setActive} 
            />
            <AboutMeOrbs 
              key={"3"} 
              name="third" 
              pos={[-4, 0, 3]} 
              active={active} 
              setActive={setActive} 
            />
          </Instances>
          <Environment preset="dawn" />
        </Suspense>
      </Canvas>
    </div>
  );
}