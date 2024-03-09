import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Globe(props) {
  return (
    <mesh
      {...props}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="0xffffff" />
    </mesh>
  )
}