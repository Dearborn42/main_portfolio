// import { useEffect } from 'react';
// import { useThree } from '@react-three/fiber';
// import { Detailed } from '@react-three/drei';
// import { Frame, GithubPage } from './GithubPortal';

// export default function LOD({ setMeshArray, meshArray, active, setActive }) {
//   const { scene } = useThree();
//   useEffect(() => {

//     const allMeshCoordinates = [];

//     for (let j = 0; j < 20; j++) {
//       const x = 8000 * (0.5 - Math.random());
//       const y = 10000 * (0.5 - Math.random());
//       const z = 8000 * (0.5 - Math.random());
//       allMeshCoordinates.push({ x, y, z });
//     }

//     setMeshArray(allMeshCoordinates);

//     return () => {
//       scene.children.forEach(child => {
//         if (child instanceof Detailed) {
//           scene.remove(child);
//         }
//       });
//     };
//   }, []);

//   return (
//     <group>
//       {meshArray.map((x, i) => (
//         <Frame key={i + `_key_id`} bg="#000000" name={`${i}_id`} active={active} setActive={setActive} meshArgs={[100, 16]} position={[x.x, x.y, x.z]}>
//           <GithubPage />
//         </Frame>
//       ))}
//     </group>
//   )
// }