"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} rotation={[0.9, 0.6, -0.5]} />;
}

export default function Book() {
  return (
    <div className="w-full h-[600px] overflow-hidden">
      <Canvas camera={{ position: [1.5, 1.5, 1.5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Model url="/model/book-model-explort4.glb" />
        <OrbitControls enableZoom={false} enablePan={true} />
      </Canvas>
    </div>
  );
}
