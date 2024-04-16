import { useGLTF  } from '@react-three/drei';

export default function Model() {
  const { nodes } = useGLTF('/untitled.glb');
  return (
    <group position={[-200, -200, -200]} dispose={null}>
      <group position={[200, 0, 0]}>
        <group position={[100, 200, 0]} rotation={[0.014, 0, 0]}>
          <mesh
            geometry={nodes.screen.geometry}
            position={[0, 0, 0]} 
            scale={[40, 40, 40]}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/untitled.glb')