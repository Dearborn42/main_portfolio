import { useGLTF, Html } from '@react-three/drei';
import { useMemo } from 'react';
import Image from 'next/image';
import code1 from "@/Images/code1.jpg"

export default function Model() {
  const { nodes } = useMemo(() => useGLTF('/untitled.glb'), []);
  return (
    <group position={[-200, -200, -200]} dispose={null}>
      <group position={[200, 0, 0]}>
        <group position={[100, 200, 0]} rotation={[0.014, 0, 0]}>
          <mesh
            geometry={nodes.screen.geometry}
            position={[-20, 0, 0]} 
            scale={[40, 40, 40]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <Html rotation-x={-Math.PI / 2} transform occlude>
              <Image src={code1} alt={"code"} width={40} height={40} />
            </Html>
          </mesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/untitled.glb')