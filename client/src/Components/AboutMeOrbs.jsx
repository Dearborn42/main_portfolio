"use client";
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { useContext } from "react";
import { GeometryContext } from "./GeometryContext";


export default function AboutMeOrbs({pos}){
    const sphereRef = useRef();
    const { aboutSphereGeom } = useContext(GeometryContext);
    const radius = 6;
    const speed = 0.25; 
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const initalX = pos[0];
        const initalZ = pos[2];
        const initialPhase = Math.atan2(initalZ, initalX);
        const phase = initialPhase + speed * time;
        const x = radius * Math.cos(phase);
        const z = radius * Math.sin(phase);

        // Update the position of the mesh
        sphereRef.current.position.x = x;
        sphereRef.current.position.z = z;
    }, []);
    return (
        <>
            <mesh ref={sphereRef} geometry={aboutSphereGeom} position={pos}/>
        </>
    )
}