"use client";

import {  useRef } from 'react'
import {  useFrame } from '@react-three/fiber'
import {  useFBX } from '@react-three/drei';


export default function BrainModel(){
    const brain = useFBX("/Brain_Model.fbx");
    const boxRef = useRef();
    useFrame(() => {
        boxRef.current.rotation.y += 0.01;
    });
    return <primitive ref={boxRef} object={brain} scale={5.5} position={[0, -3, 2]}/>
}
