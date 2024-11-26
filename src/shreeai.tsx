import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import Navbar from './components/Navbar';

const features = [
  {
    title: "Neural Enhancement",
    description: "Advanced cognitive augmentation through AI-powered neural interfaces",
    color: "#4F46E5"
  },
  {
    title: "Quantum Processing",
    description: "Revolutionary quantum computing integration for unprecedented processing power",
    color: "#7C3AED"
  },
  {
    title: "Biosynth Integration",
    description: "Seamless fusion of biological and synthetic intelligence",
    color: "#EC4899"
  },
  {
    title: "Temporal Analysis",
    description: "Predictive modeling across multiple temporal dimensions",
    color: "#8B5CF6"
  },
  {
    title: "Consciousness Mapping",
    description: "Advanced algorithms for mapping and understanding consciousness",
    color: "#06B6D4"
  },
  {
    title: "Reality Augmentation",
    description: "Enhanced perception of reality through AI-powered sensory augmentation",
    color: "#10B981"
  }
];

function BrainParticles() {
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={5000}
          array={new Float32Array(15000).map(() => (Math.random() - 0.5) * 10)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#ffffff" sizeAttenuation transparent opacity={0.6} />
    </points>
  );
}

function FeatureBubble({ feature, index }: { feature: typeof features[0]; index: number }) {
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bubbleRef.current) return;

    gsap.fromTo(
      bubbleRef.current,
      {
        opacity: 0,
        scale: 0,
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        duration: 1,
        delay: index * 0.3,
        ease: "elastic.out(1, 0.5)",
        yoyo: true,
        repeat: -1,
        repeatDelay: 5
      }
    );
  }, [index]);

  return (
    <motion.div
      ref={bubbleRef}
      className="absolute p-6 rounded-full backdrop-blur-lg"
      style={{
        backgroundColor: `${feature.color}33`,
        border: `2px solid ${feature.color}`,
        left: `${(index % 3) * 33 + Math.random() * 10}%`,
        top: `${Math.floor(index / 3) * 33 + Math.random() * 10}%`,
      }}
    >
      <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
      <p className="text-sm text-gray-200 max-w-[200px]">{feature.description}</p>
    </motion.div>
  );
}

function ShreeAI() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particles = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
    }));

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx || !containerRef.current) return;

    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    containerRef.current.appendChild(canvas);

    function animate() {
      if (!ctx) return;
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > window.innerWidth) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > window.innerHeight) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff22';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-10">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <BrainParticles />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>

        <div className="relative z-20 pt-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Shree AI
            </h1>
            <p className="text-xl text-gray-300">
              The Future of Human-AI Symbiosis
            </p>
          </motion.div>

          <div className="relative h-[800px]">
            {features.map((feature, index) => (
              <FeatureBubble key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShreeAI;