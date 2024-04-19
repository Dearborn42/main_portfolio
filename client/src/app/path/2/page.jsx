"use client";

import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { 
  Environment,
  AdaptiveDpr, 
  AdaptiveEvents, 
  PerformanceMonitor,
  Instances
} from '@react-three/drei';
import AboutMeOrbs from "@/Components/AboutMeOrbs";
import MainPagesBackground from '@/Components/MainPagesBackground';
import Scene from '@/Components/SceneFog';

export default function Information() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [dpr, setDpr] = useState(1.5);
  useEffect(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
  }, []);
  
  return (
    <div style={{ width: `${width}px`, height: `${height}px`, overflow: 'hidden'}}>
      <Canvas dpr={dpr} shadows camera={{ position: [0, 18, 20], fov: 35 }} gl={{ alpha: false }}>
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
          <Instances limit={6} range={6} position={[0, 0, 0]}>
            <sphereGeometry args={[2, 16, 16]} />
            <meshStandardMaterial color="#f0f0f0" />
            <AboutMeOrbs key={"1"} pos={[0, 0, -4]}/>
            <AboutMeOrbs key={"2"} pos={[4, 0, -2.5]}/>
            <AboutMeOrbs key={"3"} pos={[4, 0, 2.5]}/>
            <AboutMeOrbs key={"4"} pos={[0, 0, 4]}/>
            <AboutMeOrbs key={"5"} pos={[-4, 0, 2.5]}/>
            <AboutMeOrbs key={"6"} pos={[-4, 0, -2.5]}/>
          </Instances>
          <MainPagesBackground strength={1} />
          <Environment preset="dawn" />
        </Suspense>
      </Canvas>
    </div>
  );
}