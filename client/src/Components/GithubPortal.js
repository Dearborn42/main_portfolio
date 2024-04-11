import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { useFrame, useThree, extend } from '@react-three/fiber'
import { MeshPortalMaterial, CameraControls } from '@react-three/drei';
import { easing, geometry } from 'maath'
extend(geometry)

export function Frame({ bg, children, name, color, active, setActive, meshArgs, ...props }) {
  const portal = useRef()
  useFrame((_state, delta) => {
    const worldOpen = active === name;
    easing.damp(portal.current, "blend", worldOpen ? 1 : 0, 0.2, delta)
  })
  return (
    <group {...props}>
        <mesh name={name} onDoubleClick={() => {
            setActive(active === name ? null : name)
        }}>
          <sphereGeometry args={meshArgs} />
          <MeshPortalMaterial ref={portal} side={THREE.DoubleSide} blend={active === name ? 1 : 0}>
            <color attach="background" args={[bg]} />
            {children}
          </MeshPortalMaterial>
        </mesh>
    </group>
  )
}
