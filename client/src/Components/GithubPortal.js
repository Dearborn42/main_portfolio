import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { useFrame, useThree, extend } from '@react-three/fiber'
import { MeshPortalMaterial, CameraControls } from '@react-three/drei'
import { useRoute } from 'wouter'
import { easing, geometry } from 'maath'
extend(geometry)

export function Frame({ id, name, bg, active, setActive, meshArgs, children, ...props }) {
  const portal = useRef()
  useFrame((_state, delta) => {
    const worldOpen = active === name;
    easing.damp(portal.current, "blend", worldOpen ? 1 : 0, 0.2, delta)
  })
  return (
    <group {...props}>
        <mesh name={id} onDoubleClick={() => {
            setActive(active === name ? null : name)
        }}>
        <sphereGeometry args={meshArgs}/>
        <MeshPortalMaterial ref={portal} side={THREE.DoubleSide}>
            <color attach="background" args={[bg]} />
            {children}
        </MeshPortalMaterial>
        </mesh>
    </group>
  )
}

export function Rig({ position = new THREE.Vector3(0, 0, 2), focus = new THREE.Vector3(0, 0, 0) }) {
  const { controls, scene } = useThree()
  const [, params] = useRoute('/item/:id')
  useEffect(() => {
    const active = scene.getObjectByName(params?.id)
    if (active) {
      active.parent.localToWorld(position.set(0, 0.5, 0.25))
      active.parent.localToWorld(focus.set(0, 0, -2))
    }
    controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)
  })
  return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
}
