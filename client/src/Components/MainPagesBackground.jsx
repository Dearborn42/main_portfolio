import { MeshReflectorMaterial } from '@react-three/drei';

export default function MainPagesBackground({strength}){
    return(
        <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
                blur={[400, 100]}
                resolution={1024}
                mixBlur={1}
                mixStrength={strength}
                depthScale={10}
                minDepthThreshold={0.85}
                color="#212020"
                metalness={0.6}
                roughness={1}
            />
        </mesh>
    )
}