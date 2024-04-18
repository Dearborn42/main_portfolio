"use client";

import { createContext, useMemo, useContext } from "react";
import * as THREE from "three"

export const GeometryContext = createContext();

export function GeometryContextWrapper({children}){
    const aboutSphereGeom = useMemo(() => new THREE.SphereGeometry(1, 28, 28), []);
    return (
        <GeometryContext.Provider value={{aboutSphereGeom}}>
            {children}
        </GeometryContext.Provider>
    )
}