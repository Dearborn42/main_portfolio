import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function BrainLines(){
    const { scene } = useThree();
    useEffect(function(){
        // const path = new THREE.Path();

        // path.lineTo( 0, 0.8 );
        // path.quadraticCurveTo( 0, 1, 0.2, 1 );
        // path.lineTo( 1, 1 );

        // const points = path.getPoints();

        // const geometry = new THREE.BufferGeometry().setFromPoints( points );
        // const material = new THREE.LineBasicMaterial( { color: 0xffffff } );

        // const line = new THREE.Line( geometry, material );
        // scene.add( line );
        class CustomSinCurve extends THREE.Curve {

            constructor( scale = 1 ) {
                super();
                this.scale = scale;
            }

            getPoint( t, optionalTarget = new THREE.Vector3() ) {

                const tx = t * 3 - 1.5;
                const ty = Math.sin( 2 * Math.PI * t );
                const tz = 0;

                return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );
            }
        }

        const path = new CustomSinCurve( 10 );
        const geometry = new THREE.TubeGeometry( path, 20, 2, 8, false );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );
        const axesHelper = new THREE.AxesHelper( 5 );
        scene.add( axesHelper );
    })
    return null;
}