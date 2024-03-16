import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls';
import * as THREE from 'three';

export default function BrainScene(){
    const { scene, gl } = useThree();
    const controls = useRef();
    var camera;
    useEffect(() => {
        const clock = new THREE.Clock();
        // scene.fog = new THREE.Fog(0xFFFFFFF, 1, 15000);

        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 15000);
        camera.position.z = 1000;



        controls.current = new FlyControls(camera, gl.domElement);
        controls.current.movementSpeed = 1000;
        controls.current.rollSpeed = Math.PI / 10;

        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            gl.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', onWindowResize);

        const animate = () => {
            requestAnimationFrame(animate);
            render();
        };

        const render = () => {
            controls.current.update(clock.getDelta());
            gl.render(scene, camera);
        };

        animate();
        return () => {
            window.removeEventListener('resize', onWindowResize);
            controls.current.dispose();
        };
    }, [camera, scene, gl]);

    return null;
}