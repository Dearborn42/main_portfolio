"use client"

import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Canvas, useFrame } from '@react-three/fiber'
import { useCursor, Image, Text, Environment } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing } from 'maath'
import getUuid from 'uuid-by-string'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa6'

const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: "https://res.cloudinary.com/dkilzmi3w/image/upload/v1714033388/Screenshot_2024-04-25_012251_pwhhft.png", link: "https://github.com/Dearborn42/FBLA-App" },
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: "https://res.cloudinary.com/dkilzmi3w/image/upload/v1714034088/Screenshot_2024-04-25_013359_gr4t2s.png", link: "https://github.com/Dearborn42/mern-blueprint" },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: "https://res.cloudinary.com/dkilzmi3w/image/upload/v1714033733/Screenshot_2024-03-24_230537_fdpwxz.png", link: "https://scurtisphd.com/home" },
  // Left
  { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: "https://res.cloudinary.com/dkilzmi3w/image/upload/v1714075480/Screenshot_2024-04-25_130410_nbm1m4.png", link: "https://github.com/Dearborn42/React-TopDown-Platormer" },
  { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: "https://res.cloudinary.com/dkilzmi3w/image/upload/v1714075900/Screenshot_2024-04-25_130951_aguxht.png", link: "https://github.com/Dearborn42/Wack-A-Mole" },
  { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: "https://res.cloudinary.com/dkilzmi3w/image/upload/v1714076992/Screenshot_2024-04-25_132929_n8xmyz.png", link: "https://github.com/Dearborn42/Homepage" },
  // Right
  { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: "https://res.cloudinary.com/dkilzmi3w/image/upload/v1714076322/Screenshot_2024-04-25_131821_etfha1.png", link: "https://github.com/Dearborn42/tourApp" },
  { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: "https://res.cloudinary.com/dkilzmi3w/image/upload/v1714076608/Screenshot_2024-04-25_132149_zyiu52.png", link: "https://github.com/Dearborn42/QuiktekComputers" },
  { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: "https://res.cloudinary.com/dkilzmi3w/image/upload/v1714076762/Screenshot_2024-04-25_132547_dtwkfz.png", link: "https://github.com/Dearborn42/Next_Auth_Login" }
]

const GOLDENRATIO = 1.61803398875

export default function App(){
  return(
    <div className='fixed top-0 bottom-0 right-0 left-0'>
      <div className="fixed top-0 right-0 z-10 flex justify-between">
        <Link href="/path" className="fixed top-12 text-sm sm:text-4xl left-24">
          <FaArrowLeft />
        </Link>
      </div>
      <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
        <color attach="background" args={['#191920']} />
        <fog attach="fog" args={['#191920', 0, 15]} />
        <group position={[0, -0.5, 0]}>
          <Frames images={images} />
        </group>
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const ref = useRef()
  const clicked = useRef()
  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation();
  const [active, setActive] = useState(null)
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id)
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true)
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
      clicked.current.parent.getWorldQuaternion(q)
    } else {
      p.set(0, 0, 5.5)
      q.identity()
    }
  })
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt)
    easing.dampQ(state.camera.quaternion, q, 0.4, dt)
  })
  return (
    <group
      ref={ref}
      onClick={(e) => {
        setActive(e.object.name)
        return(e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))
      }}
      onPointerMissed={() => {
        setActive(null);
        setLocation('/path/1')
      }}>
      {images.map((props) => <Frame key={props.url} {...props} link={props.link} active={active}/> /* prettier-ignore */)}
    </group>
  )
}

function Frame({ url, active, link,  c = new THREE.Color(), ...props }) {
  const router = useRouter()
  const image = useRef()
  const frame = useRef()
  const [hovered, hover] = useState(false)
  const name = getUuid(url);
  useCursor(hovered);
  return (
    <>
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        onDoubleClick={() => {
          if(active === name){
            router.push(link)
          }
        }}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
        
      >
        <boxGeometry />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
      </mesh>
      <Text maxWidth={0.1} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.025}>
        {name.split('-').join(' ')}
      </Text>
    </group>
    </>
  )
}
