import { MeshReflectorMaterial } from '@react-three/drei';
import {useMemo} from "react"

export default function MainPagesBackground({strength}){
    const material = useMemo(() => (
        <MeshReflectorMaterial
            blur={[400, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={strength}
            depthScale={10}
            minDepthThreshold={0.85}
            color="#212020"
            metalness={0.8}
            roughness={1}
        />
    ), [strength]);
    return(
        <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            {material}
        </mesh>
    )
}