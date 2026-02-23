import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Torus, Icosahedron, Float } from "@react-three/drei";
import { motion } from "framer-motion";

// 1. The Typewriter Component
const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const timeoutRef = useRef(null);
  const runIdRef = useRef(0);
  
  useEffect(() => {
    let i = 0;

    const startTyping = () => {
      runIdRef.current += 1;
      const runId = runIdRef.current;
      i = 0;
      setDisplayText("");
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      const typeNext = () => {
        if (runIdRef.current !== runId) {
          return;
        }
        if (i < text.length) {
          i += 1;
          setDisplayText(text.slice(0, i));
          timeoutRef.current = setTimeout(typeNext, 100);
        } else {
          timeoutRef.current = setTimeout(startTyping, 3500);
        }
      };

      typeNext();
    };

    startTyping();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text]);

  return (
    <span className="text-primary inline-block min-w-[10px]">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// 2. THE NEW DEVELOPER 3D SHAPE
const HackerShape = () => {
  const meshRef = useRef(null);
  const ringRef = useRef(null);

  // Rotate the shapes on every frame
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = -t * 0.2;
      ringRef.current.rotation.y = t * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <group scale={1.8}>
        
        {/* The Inner "Core" (Solid Green) */}
        <Sphere args={[1, 32, 32]} scale={0.5}>
          <meshStandardMaterial 
            color="#10B981" 
            emissive="#10B981"
            emissiveIntensity={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>

        {/* The Wireframe Cage (Structure) */}
        <Icosahedron args={[1.2, 0]} ref={meshRef}>
          <meshStandardMaterial 
            wireframe 
            color="#059669" // Darker Green
            linewidth={2}
            transparent
            opacity={0.6}
          />
        </Icosahedron>

        {/* The Orbiting Ring (Data Flow) */}
        <Torus args={[1.6, 0.05, 16, 100]} ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial 
            color="#34D399" // Lighter Green
            emissive="#34D399"
            emissiveIntensity={0.5}
            roughness={0} 
            metalness={1} 
          />
        </Torus>

      </group>
    </Float>
  );
};

// 3. The Main Hero Component
const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 overflow-hidden relative z-10">
      
      {/* LEFT SIDE: Text Content */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6 z-10 mt-20 md:mt-0"
      >
        {/* Developer Tag */}
        <div className="flex items-center gap-2 mb-4">
            <div className="bg-gray-900 text-green-400 px-3 py-1 rounded-md text-sm font-mono flex items-center gap-2 shadow-lg border border-green-900">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>system_status: online</span>
            </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-dark leading-tight">
          Hi, I'm <br />
          <Typewriter text="Purvanshu Machhi." />
        </h1>
        
        <p className="text-gray-600 text-lg md:w-3/4 leading-relaxed font-mono">
          <span className="text-primary font-bold">{">"}</span> Full Stack Developer <br/>
          <span className="text-primary font-bold">{">"}</span> Specialized in MERN Stack <br/>
          <span className="text-primary font-bold">{">"}</span> Turning ideas into <span className="bg-green-100 px-1 text-primary font-bold">code</span>.
        </p>
        
        <div className="flex gap-4 pt-4">
          <a href="#projects" className="bg-primary text-white px-8 py-3 rounded-md font-mono font-bold shadow-lg hover:bg-green-600 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group">
            <span className="group-hover:animate-bounce">↓</span> Projects
          </a>
          <a href="#contact" className="border-2 border-primary text-primary px-8 py-3 rounded-md font-mono font-bold hover:bg-green-50 transition-all duration-300">
            Let's Talk
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE: 3D Animation */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex-1 h-[50vh] md:h-[600px] w-full relative cursor-grab z-0"
      >
        <Canvas className="absolute inset-0">
          <ambientLight intensity={0.5} />
          {/* Blue light from one side, Green from the other for a "Tech" feel */}
          <pointLight position={[10, 10, 10]} color="#10B981" intensity={2} />
          <pointLight position={[-10, -10, -10]} color="#3B82F6" intensity={1} />
          
          <HackerShape />
          
          <OrbitControls enableZoom={false} />
        </Canvas>
      </motion.div>
    </section>
  );
};

export default Hero;