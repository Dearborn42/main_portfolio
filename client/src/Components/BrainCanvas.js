import React, {useState} from 'react';
import { Canvas } from '@react-three/fiber';
import LOD from './LOD';
import BrainScene from './BrainScene';
import BrainLines from './BrainLines';
import DelaunayVisualization from './DelaunayVisualozation';

export default function BrainCanvas() {
  const [meshArray, setMeshArray] = useState([]);
  return (
     <div style={{ width: '90vw', height: '90vh', overflow: 'hidden' }}>
      <Canvas frameloop="demand">
        <BrainScene />
        <pointLight color={0xff2200} intensity={3} distance={0} decay={0} position={[0, 0, 0]}/>
        <directionalLight color={0xffffff} intensity={3} position={[0, 0, 1]} />
        <LOD setMeshArray={setMeshArray}/>
        <DelaunayVisualization array={meshArray}/>
        <BrainLines />
      </Canvas>

    </div>
  );
}