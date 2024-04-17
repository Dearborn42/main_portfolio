"use client";

import { Suspense, useEffect, useState, useRef, useLayoutEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, MeshReflectorMaterial, Html } from '@react-three/drei';
import LandingText from '@/Components/LandingText';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Flex, Box, useFlexSize } from "@react-three/flex";
import Link from 'next/link';

export default function App() {
  gsap.registerPlugin(useGSAP);
  const name = gsap.timeline();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
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
    <Canvas dpr={[1, 1.5]} shadows width={`${width}px`} height={`${height}px`} camera={{ position: [0, 7, 18], fov: 35 }} gl={{ alpha: false }}>
      <fog attach="fog" args={['#080808', 20, 40]} />
      <color attach="background" args={['#080808']} />
      <ambientLight intensity={1} />
      <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[width, height]}>
        <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
      </directionalLight>
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
        <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[400, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={15}
            depthScale={1}
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


