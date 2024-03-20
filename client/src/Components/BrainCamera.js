import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls';
import * as THREE from 'three';

export default function BrainCamera(){
    const set = useThree((state) => state.set)
    useEffect(() => {
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 15000);
        camera.position.z = 1000;

        set({camera: camera})
    });
    return null;
}