import { useThree } from '@react-three/fiber';
import { useMemo } from 'react';
import * as THREE from 'three';

const Scene = ({ width, height }) => {
    const { scene } = useThree();

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
        directionalLight.shadow.mapSize.width = width;
        directionalLight.shadow.mapSize.height = height;
    }, [scene, width, height]);

  return null; // This component doesn't render anything in the DOM
};

export default Scene;
