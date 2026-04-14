'use client';

import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, ContactShadows, Float, useAnimations, Center } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url }: { url: string }) {
  const { scene, animations } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);
  const { actions } = useAnimations(animations, modelRef);

  // Set initial standing rotation
  useEffect(() => {
    // if (modelRef.current) {
    //   modelRef.current.rotation.y = 0 * (Math.PI / 180); // 30 deg left
    //   modelRef.current.rotation.x = 0 * (Math.PI / 180); // 20 deg up
    //   modelRef.current.rotation.z = 0 * (Math.PI / 180); // 20 deg up
    // }
    
    // Play all animations by default
    if (actions) {
      Object.values(actions).forEach(action => action?.play());
    }
  }, [actions]);

  return <primitive ref={modelRef} object={scene} scale={2.6} />;
}

function PlaceholderBox() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#4f46e5" roughness={0.5} metalness={1} />
    </mesh>
  );
}

export default function LogoModel() {
  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#56DFCF" />
        
        <Suspense>
          {/* <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}> */}
            <Center>
              <Model url="/assets/logo_model.gltf" />
            </Center>
          {/* </Float> */}
          <ContactShadows position={[0, -1.4, 0]} opacity={0.4} scale={30} blur={2.5} far={4} />
          <Environment preset="city" />
        </Suspense>
        
        <OrbitControls makeDefault enableZoom={false} enablePan={false} enableRotate={true} />
      </Canvas>
    </div>
  );
}
