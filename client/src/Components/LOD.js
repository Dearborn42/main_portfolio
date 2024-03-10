import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function LOD() {
  const { scene } = useThree();

  useEffect(() => {
    const geometry = [
      [new THREE.IcosahedronGeometry(100, 16), 50],
      [new THREE.IcosahedronGeometry(100, 8), 300],
      [new THREE.IcosahedronGeometry(100, 4), 1000],
      [new THREE.IcosahedronGeometry(100, 2), 2000],
      [new THREE.IcosahedronGeometry(100, 1), 8000]
    ];

    const material = new THREE.MeshLambertMaterial({ color: 0xffffff, wireframe: true });

    for (let j = 0; j < 1000; j++) {
      const lod = new THREE.LOD();

      for (let i = 0; i < geometry.length; i++) {
        const mesh = new THREE.Mesh(geometry[i][0], material);
        mesh.scale.set(1.5, 1.5, 1.5);
        mesh.updateMatrix();
        mesh.matrixAutoUpdate = false;
        lod.addLevel(mesh, geometry[i][1]);
      }

      lod.position.x = 10000 * (0.5 - Math.random());
      lod.position.y = 7500 * (0.5 - Math.random());
      lod.position.z = 10000 * (0.5 - Math.random());
      lod.updateMatrix();
      lod.matrixAutoUpdate = false;
      scene.add(lod);
    }

    return () => {
      scene.children.forEach(child => {
        if (child instanceof THREE.LOD) {
          scene.remove(child);
        }
      });
    };
  }, [scene]);

  return null;
}
