"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";

function NodeGraph() {
  const groupRef = useRef<THREE.Group>(null);
  const [, setHoveredNode] = useState<string | null>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  const nodes = [
    { id: "MODEL", name: "Multi-LLM Model", pos: [0, 2, 0], color: "#3b82f6" },
    { id: "RAG", name: "RAG Vector Store", pos: [-2, 0.5, 1], color: "#10b981" },
    { id: "AGENT", name: "LangGraph Agent", pos: [2, 0.5, -1], color: "#8b5cf6" },
    { id: "TOOLS", name: "Tool Execution", pos: [0, -1.5, 0], color: "#f59e0b" },
    { id: "EVAL", name: "LLM-as-Judge", pos: [0, 0, -2], color: "#ec4899" },
  ];

  return (
    <group ref={groupRef}>
      {nodes.map((node) => (
        <group key={node.id} position={node.pos as [number, number, number]}>
          <mesh
            onPointerOver={() => setHoveredNode(node.name)}
            onPointerOut={() => setHoveredNode(null)}
          >
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={0.6}
              roughness={0.2}
            />
          </mesh>

          <Html distanceFactor={10} position={[0, 0.5, 0]} center>
            <div className="bg-slate-900/90 text-white text-[10px] font-mono px-2 py-1 rounded border border-slate-700 whitespace-nowrap shadow-md pointer-events-none">
              {node.id}
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}

export function SystemCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-80 flex items-center justify-center border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 font-mono text-xs text-slate-400">
        Loading Interactive AI System Graph...
      </div>
    );
  }

  return (
    <div className="w-full h-[360px] md:h-[420px] relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950/90 overflow-hidden shadow-xl">
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-slate-300">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Interactive AI Orchestration Graph</span>
      </div>

      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <NodeGraph />
        </Float>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
