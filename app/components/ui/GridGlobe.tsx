"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import * as THREE from 'three';

const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
});

const GridGlobe = () => {
  const globeRef = useRef(null);
  const [data, setData] = useState(sampleArcs);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [gl, setGl] = useState<THREE.WebGLRenderer | null>(null);
  const camera = useRef<THREE.PerspectiveCamera>(new THREE.PerspectiveCamera());

  useEffect(() => {
    if (globeRef.current && data.length > 0) {
      // ... existing code ...
    }
  }, [data, data.length]);

  useEffect(() => {
    if (globeRef.current && gl) {
      gl.setSize(size.width, size.height);
    }
  }, [gl, size.height, size.width]);

  return (
    <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
};

export default GridGlobe;