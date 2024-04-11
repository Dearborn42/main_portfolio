import React, {useState, useEffect, useRef} from 'react';
import LOD from './LOD';
import BrainScene from './BrainScene';
import { Frame, Rig } from '@/Components/GithubPortal';
import BrainCamera from './BrainCamera';
import { useThree } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
import * as THREE from 'three';

export default function BrainCanvas() {
  const [meshArray, setMeshArray] = useState([]);
  const [active, setActive] = useState(null);
  const controlRef = useRef();
  const scene = useThree((state) => state.scene)
  useEffect(() => {
    if (active) {
      const targetPath = new THREE.Vector3();
      scene.getObjectByName(active).getWorldPosition(targetPath);
      console.log(controlRef.current);
      controlRef.current.setLookAt(
        0, 0, 5, targetPath.x, targetPath.y, targetPath.z, true
      )
    }
  }, [active]);
  return (
     <>
        <pointLight color={0xff2200} intensity={10} distance={0} decay={0} position={[0, 0, 0]}/>
        <directionalLight color={0xffffff} intensity={3} position={[0, 0, 1]} />
        {active ? 
          <CameraControls 
            ref={controlRef}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 6}
          /> : <BrainCamera />
        }
        <BrainScene />
        <color attach="background" args={['#220011']} />
        <Frame bg="#e4cdac" name="test" active={active} setActive={setActive} meshArgs={[100, 16]}>
          <mesh>
            <sphereGeometry args={[1, 16, 16]} />
            <meshBasicMaterial color="red" />
          </mesh>
        </Frame>
    </>
  );
}