import { useThree } from '@react-three/fiber'
import { Text, Html } from '@react-three/drei';
import { Box } from "@react-three/flex";
import { useEffect } from "react";
import Link from 'next/link';


export default function LandingText({text, placement, size, button = false}){
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
            {button ? (
                <Html>
                    <div>
                        <Link href="/path" style={{ display: 'none' }}>
                            {text}
                        </Link>
                    </div>
                </Html>
            ) : null}
            {text}
        </Text>
                
        </Box>
    )
}