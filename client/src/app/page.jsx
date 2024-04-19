"use client";

import { Suspense, useEffect, useState, useRef, useLayoutEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Html, AdaptiveDpr, AdaptiveEvents, PerformanceMonitor } from '@react-three/drei';
import LandingText from '@/Components/LandingText';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Flex } from "@react-three/flex";
import Link from 'next/link';
import MainPagesBackground from "@/Components/MainPagesBackground";
import Scene from '@/Components/SceneFog';

export default function App() {
  gsap.registerPlugin(useGSAP);
  const name = gsap.timeline();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [dpr, setDpr] = useState(1.5)
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    console.log(window.innerWidth, window.innerHeight);
  }, []);
  // useLayoutEffect(() => {
  //   name.to(posY, {
  //     duration:2.5,
  //     ease: "bounce.out",
  //     y: 0
  //   })
  // }, [])
  return (
    <div style={{ width: `${width}px`, height: `${height}px`, overflow: 'hidden'}}>
    <Canvas dpr={dpr} shadows camera={{ position: [0, 7, 18], fov: 35 }} gl={{ alpha: false }} frameloop="demand">
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
        {/* <ScrollControls pages={3}>
          <Train />
        </ScrollControls> */}
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
          <LandingText
            text={"Begin"} 
            placement={[0, -.2, 4]}
            size={70}
          >
            <Html occlude>
              <Link href="/path" style={{background: "transparent", color: "transparent"}}>
                  lorem
              </Link>
            </Html>
          </LandingText>
          <LandingText
            text={"______"} 
            placement={[0, -.2, 4.1]}
            size={70}
          >
            <Html occlude>
              <Link href="/path" style={{background: "transparent", color: "transparent"}}>
                  lorem
              </Link>
            </Html>
          </LandingText>
        </Flex>
        <MainPagesBackground strength={1} />
        <Environment preset="dawn" />
      </Suspense>
    </Canvas>
    </div>
  )
}


