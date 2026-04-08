'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import Image from 'next/image';

const MotionImage = motion.create(Image);

const artifacts = [
  { id: 9, title: 'Prompt to Reality', src: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop', status: 'DEPLOYED', model: 'SYNTH-CORE V4', latency: '14ms' },
  { id: 14, title: 'Evolving Forms', src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop', status: 'TRAINING', model: 'GEN-LATTICE V2', latency: '8ms' },
  { id: 23, title: 'The Synthesis Lab', src: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800&auto=format&fit=crop', status: 'ACTIVE', model: 'NEURAL-NET V9', latency: '2ms' },
  { id: 42, title: 'Digital DNA', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop', status: 'ARCHIVED', model: 'QUANTUM-X V1', latency: '45ms' },
];

export function ArtifactGallery() {
  return (
    <section className="relative w-full py-32 bg-neutral-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Generated Artifacts. <br className="hidden md:block" />
            <span className="text-[#FF6B00]">Human Refined.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {artifacts.map((artifact, i) => (
            <ArtifactCard key={artifact.id} artifact={artifact} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArtifactCard({ artifact, index }: { artifact: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Obsidian Glass Frame */}
      <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-xl border border-white/5 p-3 transition-colors duration-500 group-hover:border-[#FF6B00]/30 shadow-2xl">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900">
          
          {/* Image with Glitch Effect */}
          <MotionImage
            src={artifact.src}
            alt={artifact.title}
            fill
            referrerPolicy="no-referrer"
            className="object-cover"
            animate={isHovered ? "hover" : "initial"}
            variants={{
              initial: { 
                filter: 'grayscale(100%) contrast(1.2) brightness(0.4)',
                scale: 1 
              },
              hover: {
                filter: [
                  'grayscale(100%) contrast(2) brightness(1.5) invert(1)',
                  'grayscale(0%) contrast(1.5) brightness(1.2) hue-rotate(90deg)',
                  'grayscale(0%) contrast(1.1) brightness(1) hue-rotate(0deg)'
                ],
                x: [0, -5, 5, -2, 2, 0],
                y: [0, 5, -5, 2, -2, 0],
                skewX: [0, 10, -10, 5, -5, 0],
                scale: 1.05,
                transition: { duration: 0.35, ease: "easeInOut" }
              }
            }}
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />

          {/* Title & Meta */}
          <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
            <div className="flex flex-col w-full transform translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-300">
              <div className="text-[#FF6B00] font-mono text-[10px] md:text-xs mb-2 opacity-80">
                ARTIFACT {artifact.id.toString().padStart(2, '0')}
              </div>
              <h3 className="text-2xl md:text-3xl font-sans font-bold text-white tracking-wide uppercase mb-4">
                {artifact.title}
              </h3>
              
              {/* Technical Metadata (Always visible on mobile, revealed on hover on desktop) */}
              <div className="grid grid-cols-3 gap-y-2 gap-x-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100 border-t border-white/10 pt-4 mt-2">
                <div className="flex flex-col">
                  <span className="text-neutral-500 font-mono text-[9px] uppercase tracking-wider mb-1">Status</span>
                  <span className="text-white font-mono text-[10px] md:text-xs">{artifact.status}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-neutral-500 font-mono text-[9px] uppercase tracking-wider mb-1">Model</span>
                  <span className="text-white font-mono text-[10px] md:text-xs">{artifact.model}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-neutral-500 font-mono text-[9px] uppercase tracking-wider mb-1">Latency</span>
                  <span className="text-[#FF6B00] font-mono text-[10px] md:text-xs">{artifact.latency}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
