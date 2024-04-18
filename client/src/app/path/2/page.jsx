"use client";

import { Suspense, useEffect, useState, useContext } from 'react'
import { Canvas } from '@react-three/fiber'
import { 
  Environment, 
  MeshReflectorMaterial, 
  AdaptiveDpr, 
  AdaptiveEvents, 
  PerformanceMonitor,
  Merged
} from '@react-three/drei';
import AboutMeOrbs from "@/Components/AboutMeOrbs";
import round from 'lodash/round'

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
        <fog attach="fog" args={['#080808', 20, 40]} />
        <color attach="background" args={['#080808']} />
        <ambientLight intensity={1} />
        <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[width, height]}>
            <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
        </directionalLight>
        <Suspense fallback={null}>
          <AboutMeOrbs pos={[0, 0, -4]}/>
          <AboutMeOrbs pos={[4, 0, -2.5]}/>
          <AboutMeOrbs pos={[4, 0, 2.5]}/>
          <AboutMeOrbs pos={[0, 0, 4]}/>
          <AboutMeOrbs pos={[-4, 0, 2.5]}/>
          <AboutMeOrbs pos={[-4, 0, -2.5]}/>
          <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[400, 100]}
              resolution={1024}
              mixBlur={1}
              mixStrength={1}
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
  );
}