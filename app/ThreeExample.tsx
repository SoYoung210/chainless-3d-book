"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

function SpinningBox() {
  const meshRef = useRef<Mesh>(null!);
  // Animation handled by react-three-fiber's useFrame, but omitted for brevity
  return (
    <mesh ref={meshRef} rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#4f46e5" />
    </mesh>
  );
}

export default function ThreeExample() {
  return (
    <div className="w-full h-96 bg-gray-100 rounded-xl overflow-hidden">
      <Canvas camera={{ position: [2, 2, 2], fov: 60 }} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <SpinningBox />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
