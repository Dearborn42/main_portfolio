"use client";
import { useRouter } from 'next/navigation'
import { useRef, useEffect } from 'react'
import { useFrame, extend } from '@react-three/fiber';
import { Instance } from "@react-three/drei"
import { easing, geometry } from 'maath';
extend(geometry)


export default function AboutMeOrbs({pos, name, active, setActive}){
    const router = useRouter();
    const sphereRef = useRef();
    const [radius, speed, initalX, initalZ] = [7, 0.25, pos[0], pos[2]];
    const initialPhase = Math.atan2(initalZ, initalX);
    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime();
        const phase = initialPhase + speed * time;

        // Update the position of the mesh
        sphereRef.current.position.x = radius * Math.cos(phase);
        sphereRef.current.position.z = radius * Math.sin(phase);

        const worldOpen = active === name;
        easing.damp(sphereRef.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
    }, []);
    useEffect(function(){
        if(active){
            router.push(`/path/2/${name}`)
        }
    }, [active]);
    return (
        <Instance 
            ref={sphereRef} 
            position={pos} 
            name={name} 
            onDoubleClick={() => {setActive(active === name ? null : name)}}
            blend={active === name ? 1 : 0}
        />
    )
}