import React, {useState, useEffect, useRef, Suspense} from 'react';
import BrainScene from './BrainScene';
import BrainCamera from './BrainCamera';
import { useThree } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
import * as THREE from 'three';
import {Frame } from "./GithubPortal"
import  Model  from './Model';
import LOD from './LOD';
import { Perf } from 'r3f-perf'

export default function BrainCanvas() {
  const [active, setActive] = useState(null);
  const [meshArray, setMeshArray] = useState([]);
  // const controlRef = useRef();
  // const {scene} = useThree();
  // useEffect(() => {
  //   if (active) {
  //     const targetPath = new THREE.Vector3();
  //     scene.getObjectByName(active).getWorldPosition(targetPath);
  //     console.log(controlRef.current);
  //     controlRef.current.setLookAt(
  //       5, 5, 5, targetPath.x, targetPath.y, targetPath.z, true
  //     )
  //   }
  // }, [active]);
  return (
     <>
        <Perf position="top-left" />
        <Suspense fallback={null}>
          <pointLight color={0xff2200} intensity={10} distance={0} decay={0} position={[0, 0, 0]}/>
          <directionalLight color={0xffffff} intensity={3} position={[0, 0, 1]} />
          {/* {active ? 
            <CameraControls 
              ref={controlRef}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 6}
            /> : <BrainCamera />
          } */}

          <BrainCamera />
          <BrainScene />
          <color attach="background" args={['#220011']} />
          <Frame name="test" active={active} setActive={setActive} meshArgs={[100, 16]}>
            <Model />
          </Frame>
          {/* <LOD 
            setMeshArray={setMeshArray} 
            setActive={setActive} 
            active={active} 
            meshArray={meshArray} 
          /> */}
          </Suspense>
    </>
  );
}