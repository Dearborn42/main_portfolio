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
            <Html 
              className="content" 
              rotation-x={-Math.PI / 2} 
              position={[0, 0.05, -0.09]} 
              transform 
              
            >
              <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                <iframe title="embed" width={668} height={432} src="https://threejs.org/" className='relative' />
              </div>
            </Html>
          </mesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/untitled.glb')