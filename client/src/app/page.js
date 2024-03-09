"use client"

import ThreeScene from '../Components/ThreeScene';
import Globe from '@/Components/Globe';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { FlyControls } from '@/Components/FlyControls';
import * as THREE from 'three';

export default function Home() {
  let scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x000000, 1, 15000);
  return (
    // <ThreeScene />
    <Canvas
      scene={scene}
    >
      <perspectiveCamera 
        fov={45} 
        aspect={2} 
        near={1} 
        far={15000}
        position={[0, 0, 1000]}
      />
      <directionalLight position={[0, 0, 1]} color={0xff2200} intensity={3} normalize/>
      <pointLight position={[0, 0, 0]} decay={0} intensity={3} distance={0} color={0xff2200}/>
      <lOD>
            
      <Globe position={[1.2, 0, 0]} />
      </lOD>
      <FlyControls />
    </Canvas>
  );
}
