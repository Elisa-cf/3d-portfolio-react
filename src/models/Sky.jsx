import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import skyScene from '../assets/3d/sky.glb';

const Sky = ({ isRotating }) => {
  // Load the GLTF model
  const sky = useGLTF(skyScene);

  // Reference to the mesh containing the 3D model
  const skyRef = useRef();

  // useFrame hook to update the rotation on each frame
  useFrame((_, delta) => {
    if (isRotating) {
      // Rotate the sky model around the y-axis
      skyRef.current.rotation.y += 0.15 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      {/* Render the GLTF scene */}
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
