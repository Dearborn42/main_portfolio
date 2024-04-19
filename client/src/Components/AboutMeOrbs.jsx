"use client";
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { Instance } from "@react-three/drei"

export default function AboutMeOrbs({pos}){
    const sphereRef = useRef();
    const radius = 7;
    const speed = 0.25; 
    const initalX = pos[0];
    const initalZ = pos[2];
    const initialPhase = Math.atan2(initalZ, initalX);
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const phase = initialPhase + speed * time;

        // Update the position of the mesh
        sphereRef.current.position.x = radius * Math.cos(phase);;
        sphereRef.current.position.z = radius * Math.sin(phase);
    }, []);
    return <Instance ref={sphereRef} position={pos} />
}