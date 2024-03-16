
export default function BrainLight({array}){
    return (
        <group position={[0, 0, 0]} dispose={null}>
            <mesh>
                <sphereGeometry args={[100, 32, 32]} />
                <meshStandardMaterial toneMapped={true} emissive="hotpink" color="red" emissiveIntensity={1000} />
            </mesh>
        </group>
    )
}