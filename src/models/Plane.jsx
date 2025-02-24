import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import planeScene from '../assets/3d/plane.glb';

const Plane = ({ isRotating, ...props }) => {
  // Reference to the group containing the 3D model
  const ref = useRef();

  // Load the GLTF model and animations
  const { scene, animations } = useGLTF(planeScene);

  // Extract actions from the animations
  const { actions } = useAnimations(animations, ref);

  // Effect to handle animation changes based on isRotating prop
  useEffect(() => {
    if (isRotating) {
      actions['Take 001'].play();
    } else {
      actions['Take 001'].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
