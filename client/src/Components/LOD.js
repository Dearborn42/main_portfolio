import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function LOD({setMeshArray}) {
  const { scene } = useThree();

  useEffect(() => {
    const IsoGeometry = [
      [new THREE.IcosahedronGeometry(100, 16), 50],
      [new THREE.IcosahedronGeometry(100, 8), 300],
      [new THREE.IcosahedronGeometry(100, 4), 1000],
      [new THREE.IcosahedronGeometry(100, 2), 2000],
      [new THREE.IcosahedronGeometry(100, 1), 8000]
    ];
    const allMeshCoordinates = [];

    const IsoMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff, wireframe: true });

    for (let j = 0; j < 100; j++) {
      const lod = new THREE.LOD();

      for (let i = 0; i < IsoGeometry.length; i++) {
        const mesh = new THREE.Mesh(IsoGeometry[i][0], IsoMaterial);
        mesh.scale.set(1.5, 1.5, 1.5);
        mesh.updateMatrix();
        mesh.matrixAutoUpdate = false;
        lod.addLevel(mesh, IsoGeometry[i][1]);
      }

      lod.position.x = 8000 * (0.5 - Math.random());
      lod.position.y = 10000 * (0.5 - Math.random());
      lod.position.z = 8000 * (0.5 - Math.random());
      allMeshCoordinates.push({
        x: lod.position.x,
        y: lod.position.y,
        z: lod.position.z
      })
      lod.updateMatrix();
      lod.matrixAutoUpdate = false;
      scene.add(lod);
    } 
    setMeshArray(allMeshCoordinates);
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
