"use client";

import * as THREE from "three"
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, MeshReflectorMaterial, Html } from '@react-three/drei';

const sphere = new THREE.SphereGeometry(1, 28, 28)

export default function Information() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        console.log(window.innerWidth, window.innerHeight);
    }, []);
  return (
    <div style={{ width: `${width}px`, height: `${height}px`, overflow: 'hidden'}}>
      <Canvas frameloop="demand" dpr={[1, 1.5]} shadows camera={{ position: [0, 18, 20], fov: 35 }} gl={{ alpha: false }}>
        <fog attach="fog" args={['#080808', 20, 40]} />
        <color attach="background" args={['#080808']} />
        <ambientLight intensity={1} />
        <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[width, height]}>
            <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
        </directionalLight>
        <Suspense fallback={null}>
            <mesh geometry={sphere} position={[0, 0, -4]}/>
            <mesh geometry={sphere} position={[0, 0, 4]}/>
            <mesh geometry={sphere} position={[4, 0, -1]}/>
            <mesh geometry={sphere} position={[-4, 0, -1]}/>
            <mesh geometry={sphere} position={[4, 0, 2.5]}/>
            <mesh geometry={sphere} position={[-4, 0, 2.5]}/>
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