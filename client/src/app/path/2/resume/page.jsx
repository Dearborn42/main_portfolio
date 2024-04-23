"use client";

import { Canvas, useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect, Suspense } from "react";
import fragmentShader from '@/glsl/fragmentShader.glsl';
import vertextShader from '@/glsl/vertexShader.glsl';

const SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;

let particles, count = 0;

let mouseX = 0, mouseY = 0;



function Render() {
    const { gl, camera, scene } = useThree();
    camera.position.x += ( mouseX - camera.position.x ) * .05;
    camera.position.y += ( - mouseY - camera.position.y ) * .05;
    camera.lookAt( scene.position );

    useFrame(()=>{
        const positions = particles.geometry.attributes.position.array;
        const scales = particles.geometry.attributes.scale.array;

        let i = 0, j = 0;
        for ( let ix = 0; ix < AMOUNTX; ix ++ ) {
            for ( let iy = 0; iy < AMOUNTY; iy ++ ) {
                positions[ i + 1 ] = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
                scales[ j ] = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 20 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 20;
                i += 3;
                j ++;
            }
        }

        particles.geometry.attributes.position.needsUpdate = true;
        particles.geometry.attributes.scale.needsUpdate = true;
    });

    gl.render( scene, camera );
    return null;
}

function Scene() {
    const { size, set, camera } = useThree();

    useEffect(() => {
        const newCamera = new THREE.PerspectiveCamera(75, size.width / size.height, 1, 10000);
        set({ newCamera });
        camera.position.y = 4;
        camera.position.z = 70;
    }, [size, set]);

    return null;
}

function PointSetUp(){
    const { scene } = useThree();
    const numParticles = AMOUNTX * AMOUNTY;

    const positions = new Float32Array( numParticles * 3 );
    const scales = new Float32Array( numParticles );

    let i = 0, j = 0;

    for(let ix=0; ix<AMOUNTX; ix++){
        for(let iy=0; iy<AMOUNTY; iy++){
            positions[i] = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 ); // x
            positions[i+1] = 0; // y
            positions[i+2] = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 ); // z
            scales[j] = 1;
            i+=3;
            j++;
        }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
    geometry.setAttribute( 'scale', new THREE.BufferAttribute( scales, 1 ) );

    const material = new THREE.ShaderMaterial( {
        uniforms: {
            color: { value: new THREE.Color( 0xffffff ) },
        },
        vertexShader: vertextShader,
        fragmentShader: fragmentShader
    });

    particles = new THREE.Points( geometry, material );
    scene.add( particles );

    return null;
}



function Animate() {
    const { gl, camera, scene } = useThree();

    camera.position.y = 30;
    camera.position.z = 70;

    useEffect(() => {
        const positions = particles.geometry.attributes.position.array;
        const scales = particles.geometry.attributes.scale.array;

        const updateParticles = () => {
            count += 0.1;

            let i = 0, j = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    positions[i + 1] = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
                    scales[j] = (Math.sin((ix + count) * 0.3) + 1) * 20 + (Math.sin((iy + count) * 0.5) + 1) * 20;
                    i += 3;
                    j++;
                }
            }

            particles.geometry.attributes.position.needsUpdate = true;
            particles.geometry.attributes.scale.needsUpdate = true;

        };

        const animate = () => {
            updateParticles();
            requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animate);
    }, [gl, camera, scene, particles, mouseX, mouseY]);
    return null;
}

export default function Resume(){
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0'>
            <Canvas>
                <Scene />
                <Suspense fallback={false}>
                    <PointSetUp />
                </Suspense>
                <Animate />
            </Canvas>
        </div>
    )
}