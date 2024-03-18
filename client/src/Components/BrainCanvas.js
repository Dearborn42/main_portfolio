import * as THREE from 'three'
import React, {useState} from 'react';
import { Canvas, } from '@react-three/fiber';
import { EffectComposer, Bloom, BrightnessContrast, HueSaturation} from '@react-three/postprocessing';
import LOD from './LOD';
import BrainScene from './BrainScene';
import BrainLight from './BrainLight';
import { Frame, Rig } from '@/Components/GithubPortal';

export default function BrainCanvas() {
  const [meshArray, setMeshArray] = useState([]);
  return (
     <div style={{ width: '90vw', height: '90vh', overflow: 'hidden' }}>
      <Canvas frameloop="demand" >
        <BrainScene />
        <pointLight color={0xff2200} intensity={10} distance={0} decay={0} position={[0, 0, 0]}/>
        <directionalLight color={0xffffff} intensity={3} position={[0, 0, 1]} />
        <LOD setMeshArray={setMeshArray}/>
        <color attach="background" args={['#220011']} />
        {/* <BrainLight /> */}
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={.5} intensity={10000} radius={100000000000} />
          <BrightnessContrast brightness={10000000} contrast={10000000} />
          <HueSaturation hue={100000} saturation={-10000} />
        </EffectComposer>
        <Frame 
          id="01" 
          bg="#e4cdac"
        />
      </Canvas>
    </div>
  );
}