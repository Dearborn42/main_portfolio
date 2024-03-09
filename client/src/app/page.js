"use client"

import ThreeScene from '../Components/ThreeScene';
import Globe from '@/Components/Globe';
import { Canvas } from '@react-three/fiber';

export default function Home() {
  return (
    // <ThreeScene />
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Globe position={[1.2, 0, 0]} />
    </Canvas>
  );
}
