import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Detailed } from '@react-three/drei';
import { Frame } from './GithubPortal';
import Model from './Model';

export default function LOD({ setMeshArray, meshArray, active, setActive }) {
  const { scene } = useThree();
  useEffect(() => {

    const allMeshCoordinates = [];

    for (let j = 0; j < 20; j++) {
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
  }, [scene]);

  return (
    <group>
      {meshArray.map((x, i) => (
        <Frame key={i+"_key"} bg="#000000" name={i+"_name"} active={active} setActive={setActive} meshArgs={[100, 16]}>
          <Model />
        </Frame>
      ))}
    </group>
  )
}