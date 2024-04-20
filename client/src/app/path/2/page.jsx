"use client";

import { Suspense, useState } from 'react'
import { Canvas,  } from '@react-three/fiber'
import { 
  Environment,
  AdaptiveDpr, 
  AdaptiveEvents, 
  PerformanceMonitor,
  Instances
} from '@react-three/drei';
import AboutMeOrbs from "@/Components/AboutMeOrbs";
import Scene from '@/Components/SceneFog';

export default function Information() {
  const [dpr, setDpr] = useState(1.5);
  const [active, setActive] = useState(null);
  return (
    <div className='fixed top-0 bottom-0 right-0 left-0'>
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
              pos={[3.464, 0, -1]} 
              active={active} 
              setActive={setActive} 
            />
            <AboutMeOrbs 
              key={"3"} 
              name="third" 
              pos={[2.464, 0, 3.464]} 
              active={active} 
              setActive={setActive} 
            />
            <AboutMeOrbs 
              key={"4"} 
              name="fourth" 
              pos={[-2.464, 0, 3.464]} 
              active={active} 
              setActive={setActive} 
            />
            <AboutMeOrbs 
              key={"5"} 
              name="fifth" 
              pos={[-3.464, 0, -1]} 
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