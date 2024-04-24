import { useRef } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import { MeshPortalMaterial  } from '@react-three/drei';
import { easing, geometry } from 'maath'
extend(geometry)

export function Frame({ bg, children, name, color, active, setActive, meshArgs, ...props }) {
  const portal = useRef();
  useFrame((_state, delta) => {
    const worldOpen = active === name;
    easing.damp(portal.current, "blend", worldOpen ? 1 : 0, 0.2, delta)
  })
  return (
    <mesh {...props} name={name} onDoubleClick={() => {
        setActive(active === name ? null : name)
    }}>
      <sphereGeometry args={meshArgs} />
      <MeshPortalMaterial ref={portal} blend={active === name ? 1 : 0}>
        <color attach="background" args={["#000000"]} />
        {children}
      </MeshPortalMaterial>
    </mesh>
  )
}