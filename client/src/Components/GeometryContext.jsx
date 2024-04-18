"use client";

import { createContext, useMemo } from "react";
import * as THREE from "three"

export const GeometryContext = createContext();

export function GeometryContextWrapper({children}){
    const aboutSphereGeom = useMemo(() => new THREE.SphereGeometry(2, 32, 16), []);
    return (
        <GeometryContext.Provider value={{aboutSphereGeom}}>
            {children}
        </GeometryContext.Provider>
    )
}