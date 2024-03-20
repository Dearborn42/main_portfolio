import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Detailed } from '@react-three/drei';

export default function LOD({ setMeshArray, array }) {
  const { scene } = useThree();
  useEffect(() => {

    const allMeshCoordinates = [];

    for (let j = 0; j < 100; j++) {
      const x = 8000 * (0.5 - Math.random());
      const y = 10000 * (0.5 - Math.random());
      const z = 8000 * (0.5 - Math.random());
      allMeshCoordinates.push({ x, y, z });
    }

    setMeshArray(allMeshCoordinates);

    return () => {
      scene.children.forEach(child => {
        if (child instanceof Detailed) {
          scene.remove(child);
        }
      });
    };
  }, [scene, setMeshArray]);

  return array.map(x => (
      <Detailed distances={[0, 15, 25, 35, 100]} position={[x.x, x.y, x.z]}>
      <mesh>
        <icosahedronGeometry args={[100, 16]} />
        <meshLambertMaterial color={0x0000ff} wireframe />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[100, 8]} />
        <meshLambertMaterial color={0x0000ff} wireframe />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[100, 4]} />
        <meshLambertMaterial color={0x0000ff} wireframe />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[100, 2]} />
        <meshLambertMaterial color={0x0000ff} wireframe />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[100, 1]} />
        <meshLambertMaterial color={0x0000ff} wireframe />
      </mesh>
      <group />
    </Detailed>
    ))
}
