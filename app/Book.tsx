"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useState, useEffect } from "react";
import * as THREE from "three";

function Model({ url, onLoad }: { url: string; onLoad: () => void }) {
  const { scene } = useGLTF(url);

  useEffect(() => {
    if (scene) {
      onLoad();
    }
  }, [scene, onLoad]);

  return <primitive object={scene} rotation={[0.9, 0.6, -0.5]} />;
}

export default function Book() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleModelLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="w-full h-[600px] overflow-hidden">
      <div
        className={`w-full h-full transition duration-300 ease-in-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
      >
        <Canvas
          camera={{ position: [1.5, 1.5, 1.5], fov: 60 }}
          gl={{
            alpha: false,
            antialias: true,
          }}
          onCreated={({ gl }) => {
            gl.setClearColor(new THREE.Color("#272924"));
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Model
            url="/model/book-model-explort4.glb"
            onLoad={handleModelLoad}
          />
          <OrbitControls enableZoom={false} enablePan={true} />
        </Canvas>
      </div>
    </div>
  );
}
