import { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';
import { soundoff, soundon } from '../assets/icons';
// import Sakura from '../assets/sakura.mp3';
import Zelda from '../assets/zelda.mp3';

const Home = () => {
  const audioRef = useRef(new Audio(Zelda));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  // State variables for rotation, current stage, and music playing status
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // Effect to handle music playback based on isPlayingMusic state
  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  // Function to adjust island properties based on screen size
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  // Function to adjust plane properties based on screen size
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  // Destructure the returned values into islandScale, islandPosition, islandRotation
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  // Destructure the returned values into planeScale and planePosition
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      {/* Display HomeInfo component at the top */}
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {/* If currentStage is truthy, render HomeInfo component*/}
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      {/* Canvas for 3D rendering */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        } `}
        camera={{ near: 0.1, far: 1000 }}
      >
        {/* Suspense to handle lazy loading of 3D models */}
        <Suspense fallback={<Loader />}>
          {/* Lights for the 3D scene */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
          {/* 3D models */}
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            scale={planeScale}
            position={planePosition}
            isRotating={isRotating}
            rotation={[0, 20.1, 0]}
          />
        </Suspense>
      </Canvas>

      {/* Music control button */}
      <div className='absolute bottom-25 left-2 md:bottom-2 md:left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;
