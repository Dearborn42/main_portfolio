import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Globe(props) {
  return (
    <mesh
      {...props} 
      scale={[1.5, 1.5, 1.5]} 
      matrixAutoUpdate={false}
    >
      <sphereGeometry args={[2, 4, 100]} />
      <meshStandardMaterial color={0xffffff} wireframe />
    </mesh>
  )
}