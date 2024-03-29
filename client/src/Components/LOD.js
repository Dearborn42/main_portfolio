import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Detailed } from '@react-three/drei';
import { Frame } from './GithubPortal';

export default function LOD({ setMeshArray, array, active, setActive }) {
  const { scene } = useThree();
  useEffect(() => {

    const allMeshCoordinates = [];

    for (let j = 0; j < 30; j++) {
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

  return array.map((x, i) => (
      <Frame id={i} bg="#e4cdac" name="test" active={active} setActive={setActive} meshArgs={[100, 16]} position={[x.x, x.y, x.z]}>
        <mesh>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="red" />
        </mesh>
      </Frame>
  ));
}