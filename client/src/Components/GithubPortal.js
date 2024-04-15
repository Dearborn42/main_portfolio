import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import { MeshPortalMaterial, Html, useGLTF } from '@react-three/drei';
import { easing, geometry } from 'maath'
extend(geometry)


export function Frame({ bg, children, name, color, active, setActive, meshArgs, ...props }) {
  const portal = useRef();
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


export function GithubPage(){
  const group = useRef()
  // Load model
  const { nodes } = useGLTF('/mac-draco.glb')
  // Make it float
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.1)
  })
  // The jsx graph was auto-generated by: https://github.com/pmndrs/gltfjsx
  return (
    <group ref={group} position={[-200, -200, -200]} dispose={null}>
      <group rotation-x={-0.425} position={[200, 0, 0]}>
        <group position={[100, 200, 0]} rotation={[Math.PI / 2, 0, 0]}>
         <mesh geometry={nodes['Cube008_2'].geometry} position={[0, 0, 0]} scale={[40, 40, 40]}>
            {/* Drei's HTML component can "hide behind" canvas geometry */}
            <Html className="content" rotation-x={-Math.PI / 2} position={[110, 0, 0]} scale={[50, 50, 50]} transform occlude>
              {/* <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                <HeroPage />
              </div> */}
            </Html>
          </mesh>
        </group>
      </group>
    </group>
  )
}

