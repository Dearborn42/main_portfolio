import React, {useState} from 'react';
import { Canvas} from '@react-three/fiber';
import LOD from './LOD';
import BrainScene from './BrainScene';
import { Frame, Rig } from '@/Components/GithubPortal';
import BrainCamera from './BrainCamera';

export default function BrainCanvas() {
  const [meshArray, setMeshArray] = useState([]);
  const [active, setActive] = useState(null);
  return (
     <div style={{ width: '90vw', height: '90vh', overflow: 'hidden' }}>
      <Canvas frameloop="demand" >
        <pointLight color={0xff2200} intensity={10} distance={0} decay={0} position={[0, 0, 0]}/>
        <directionalLight color={0xffffff} intensity={3} position={[0, 0, 1]} />
        <BrainCamera />
        <BrainScene />
        <color attach="background" args={['#220011']} />
        <LOD setMeshArray={setMeshArray} array={meshArray} active={active} setActive={setActive}/>
        <Frame id="01" bg="#e4cdac" name="test" active={active} setActive={setActive} meshArgs={[100, 16]}>
          <mesh>
            <sphereGeometry args={[1, 16, 16]} />
            <meshBasicMaterial color="red" />
          </mesh>
        </Frame>
      </Canvas>
    </div>
  );
}