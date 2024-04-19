"use client";

import { Suspense, useEffect, useState } from 'react'
import { Canvas,  } from '@react-three/fiber'
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
import { Perf } from 'r3f-perf'

export default function Information() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [dpr, setDpr] = useState(1.5);
  const [active, setActive] = useState(null);
  useEffect(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
  }, []);
  return (
    <div style={{ width: `${width}px`, height: `${height}px`, overflow: 'hidden'}}>
      <Canvas dpr={dpr} shadows camera={{ position: [0, 18, 20], fov: 35 }} gl={{ alpha: false }}>
        <Perf position="top-left" />
        <PerformanceMonitor 
          factor={1} 
          onChange={({ factor }) => setDpr(Math.floor(0.5 + 1.5 * factor, 1))}
          flipflops={3} 
          onFallback={() => setDpr(.5)}
        />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <Scene width={width} height={height} active={active}/>
        <Suspense fallback={null}>
          <Instances limit={6} range={6} position={[0, 0, 0]}>
            <sphereGeometry args={[2,16,16]} />
            <meshStandardMaterial color="#f0f0f0"/>
            <AboutMeOrbs 
              key={"1"} 
              name="first" 
              pos={[0, 0, -4]} 
              active={active} 
              setActive={setActive}
            />
            <AboutMeOrbs 
              key={"2"} 
              name="second" 
              pos={[4, 0, -2.5]} 
              active={active} 
              setActive={setActive} 
            />
            <AboutMeOrbs 
              key={"3"} 
              name="third" 
              pos={[4, 0, 2.5]} 
              active={active} 
              setActive={setActive} 
            />
            <AboutMeOrbs 
              key={"4"} 
              name="fourth" 
              pos={[0, 0, 4]} 
              active={active} 
              setActive={setActive} 
            />
            <AboutMeOrbs 
              key={"5"} 
              name="fifth" 
              pos={[-4, 0, 2.5]} 
              active={active} 
              setActive={setActive} 
            />
            <AboutMeOrbs 
              key={"6"} 
              name="sixth" 
              pos={[-4, 0, -2.5]} 
              active={active} 
              setActive={setActive} 
            />
          </Instances>
          {/* <MainPagesBackground strength={1} /> */}
          <Environment preset="dawn" />
        </Suspense>
      </Canvas>
    </div>
  );
}