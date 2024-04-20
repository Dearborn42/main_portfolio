import { useRef, useEffect} from "react";
import { useThree } from '@react-three/fiber';
import { useMemo } from 'react';
import { CameraControls } from "@react-three/drei";
import * as THREE from 'three';

const Scene = ({ active = null }) => {
    const { scene, viewport } = useThree();
    const controlRef = useRef();

    useMemo(() => {
        scene.fog = new THREE.Fog('#080808', 20, 40);
        scene.background = new THREE.Color("#080808");
        scene.add(new THREE.AmbientLight(0xffffff, 1));
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(10, 6, 6);
        directionalLight.castShadow = true;
        scene.add(directionalLight);

        const shadowCamera = new THREE.OrthographicCamera(-20, 20, 20, -20, 0.1, 100);
        directionalLight.shadow.camera = shadowCamera;
        directionalLight.shadow.mapSize.width = viewport.width;
        directionalLight.shadow.mapSize.height = viewport.height;
    }, [scene, viewport]);
    useEffect(() => {
      const targetPath = new THREE.Vector3();
      if (active) {
        scene.getObjectByName(active).getWorldPosition(targetPath);
        controlRef.current.setLookAt(
          targetPath.x, targetPath.y, targetPath.z, targetPath.x, 0, targetPath.z, true
        )
      }
    }, [active]);
  return (
    active ? <CameraControls ref={controlRef} /> : null
  );
};

export default Scene;
