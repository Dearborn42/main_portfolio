import { useThree } from '@react-three/fiber'
import { Text } from '@react-three/drei';


export default function LandingText({text, placement, size, children}){
    const { viewport } = useThree();
    return (
        <Text
            fontSize={viewport.width / (viewport.width * (size/viewport.width))} 
            color="#ffffff" 
            position={placement}
            anchorX="center"
            maxWidth={
                viewport.width > viewport.height ? 
                viewport.width / 2 : 
                viewport.height / 2.5
            }
        >
            {text}
        </Text>
    )
}