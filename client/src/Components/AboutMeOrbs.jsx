"use client";

import * as THREE from "three"
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber';

const sphere = new THREE.SphereGeometry(1, 28, 28)

export default function AboutMeOrbs(){
    const sphereRef = useRef();
    useFrame(() => {
        sphereRef.current.rotation.y += 0.01;
        sphereRef.current.rotation.x -= 0.01;
    });
    return (
        <group>
            <mesh ref={sphereRef} geometry={sphere} position={[0, 0, -4]}/>
            <mesh ref={sphereRef} geometry={sphere} position={[0, 0, 4]}/>
            <mesh ref={sphereRef} geometry={sphere} position={[4, 0, -1]}/>
            <mesh ref={sphereRef} geometry={sphere} position={[-4, 0, -1]}/>
            <mesh ref={sphereRef} geometry={sphere} position={[4, 0, 2.5]}/>
            <mesh ref={sphereRef} geometry={sphere} position={[-4, 0, 2.5]}/>
        </group>
    )
}