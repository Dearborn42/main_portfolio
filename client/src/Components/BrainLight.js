import React, { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const BrainLight = ({ array }) => {
    const { scene } = useThree();

    useEffect(() => {


    }, [array, scene]);

    return null;
};

export default BrainLight;
