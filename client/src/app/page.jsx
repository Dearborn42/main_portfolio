"use client";

import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, MeshReflectorMaterial, Text } from '@react-three/drei'

export default function App() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [posY, setPosY] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    console.log(window.innerWidth, window.innerHeight);
  }, [])
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', margin: 0, padding: 0 }}>
    <Canvas dpr={[1, 1.5]} shadows camera={{ position: [-15, 15, 18], fov: 35 }} gl={{ alpha: false }}>
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
        <Text fontSize={2} color="#ffffff" position={[0, posY, 4]}>
          Andrew Murphy
        </Text>
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


