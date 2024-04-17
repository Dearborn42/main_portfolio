import { useThree } from '@react-three/fiber'
import { Text, Html } from '@react-three/drei';
import { Box } from "@react-three/flex";
import { useEffect } from "react";


export default function LandingText({text, placement, size, children}){
    const { viewport } = useThree();
    useEffect(() => {return null}, [viewport.width, viewport.height]);
    return (
        <Box centerAnchor>
        <Text 
            fontSize={
                viewport.width > viewport.height ? 
                viewport.width / size : 
                viewport.height / size
            } 
            color="#ffffff" 
            position={placement}
            maxWidth={
                viewport.width > viewport.height ? 
                viewport.width / 2 : 
                viewport.height / 2.5
            }
        >
            {text}
            {children}
        </Text>
                
        </Box>
    )
}