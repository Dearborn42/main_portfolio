"use client";

import { createContext, useMemo } from "react";
import * as THREE from "three"

export const GeometryContext = createContext();

export function GeometryContextWrapper({children}){
    const sceneFog = useMemo(() => new THREE.Fog('#080808', 20, 40), []);
    return (
        <GeometryContext.Provider value={{sceneFog}}>
            {children}
        </GeometryContext.Provider>
    )
}