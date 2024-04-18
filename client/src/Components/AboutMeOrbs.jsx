"use client";
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { useContext } from "react";
import { GeometryContext } from "./GeometryContext";


export default function AboutMeOrbs({pos}){
    const sphereRef = useRef();
    const { aboutSphereGeom } = useContext(GeometryContext);
    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        const radius = 4; // Adjust the radius of the circle as needed
        const speed = 0.25; // Adjust the speed of the movement

        // Calculate x and z positions using trigonometric functions
        const x = pos[0] + radius * Math.cos(speed * time);
        const z = pos[2] + radius * Math.sin(speed * time);

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