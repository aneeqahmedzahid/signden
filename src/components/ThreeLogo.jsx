import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Environment, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import logoUrl from '../assets/logo.png';

export default function ThreeLogo({ scrollY }) {
  const meshRef = useRef();
  const groupRef = useRef();

  // Load the custom logo texture provided by the user
  const texture = useTexture(logoUrl);

  useFrame((state, delta) => {
    // Gentle floating and baseline rotation unaffected by scroll
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
    
    // Scroll-based 3D rotation
    if (groupRef.current) {
      // Rotate seamlessly around the Y-axis as the user scrolls
      const targetRotationY = scrollY * 0.005;
      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.05;
      
      const targetRotationX = scrollY * 0.001;
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={meshRef} scale={2.5}>
          {/* Double-sided plane so the logo is seen from both sides while rotating */}
          <planeGeometry args={[2, 2]} />
          <meshStandardMaterial 
            map={texture} 
            transparent={true} 
            side={THREE.DoubleSide} 
            alphaTest={0.05} // Clean transparency edges
            roughness={0.2}
            metalness={0.5}
          />
        </mesh>
      </Float>
      
      {/* Lighting environment to add dynamic highlights if metallic parts exist */}
      <Environment preset="city" />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <ambientLight intensity={0.8} />
    </group>
  );
}
