import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function BrainCamera(){
    const set = useThree((state) => state.set)
    useEffect(() => {
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 15000);
        // camera.position.x = 0;
        camera.position.y = 100;
        camera.position.z = 1000;

        set({camera: camera})
    });
    return null;
}