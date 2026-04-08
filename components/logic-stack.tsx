'use client';

import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, Code2, Layers, Braces, Database, Network, Binary } from 'lucide-react';

const stackItems = [
  { name: 'Cursor', description: 'AI-Assisted IDE', details: 'Accelerating development with context-aware code generation and intelligent refactoring.', icon: Code2 },
  { name: 'Python', description: 'Data & ML Pipelines', details: 'Powering robust backend data processing, model training, and complex algorithmic logic.', icon: Terminal },
  { name: 'Custom LLMs', description: 'Neural Processing', details: 'Fine-tuned language models tailored for domain-specific reasoning and autonomous decision making.', icon: Cpu },
  { name: 'Next.js', description: 'React Framework', details: 'Delivering high-performance, edge-rendered user interfaces with seamless server-side integration.', icon: Layers },
  { name: 'TypeScript', description: 'Type-Safe Logic', details: 'Ensuring enterprise-grade reliability and maintainability across the entire full-stack codebase.', icon: Braces },
  { name: 'PostgreSQL', description: 'Relational Data', details: 'Providing ACID-compliant, highly scalable persistent storage for mission-critical application state.', icon: Database },
  { name: 'WebSockets', description: 'Real-time Sync', details: 'Enabling sub-millisecond bidirectional communication for live data streaming and collaborative features.', icon: Network },
  { name: 'WebAssembly', description: 'High-Perf Compute', details: 'Executing computationally intensive tasks at near-native speeds directly within the browser environment.', icon: Binary },
];

export function LogicStack() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative w-full py-32 bg-black border-t border-white/5 overflow-hidden"
    >
      {/* Static Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Reactive Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 ease-in-out"
        style={{ opacity: isHovering ? 1 : 0 }}
      >
        {/* Orange Glow */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 107, 0, 0.08), transparent 40%)`
          }}
        />
        {/* Highlighted Grid */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:40px_40px]"
          style={{
            maskImage: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent 60%)`,
            WebkitMaskImage: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent 60%)`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Built on a Foundation of <br className="hidden md:block" />
            <span className="text-[#FF6B00]">Pure Logic.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stackItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-6 border border-white/10 bg-neutral-950 hover:bg-neutral-900 transition-all duration-300 rounded-xl overflow-hidden hover:shadow-[0_10px_30px_-15px_rgba(255,107,0,0.15)] cursor-default"
            >
              {/* Status Indicator */}
              <div className="absolute top-4 right-4 text-[10px] font-mono text-neutral-600 group-hover:text-[#FF6B00] transition-colors">
                [SYS_OK]
              </div>
              
              {/* Icon */}
              <item.icon 
                className="w-8 h-8 text-neutral-400 mb-8 group-hover:text-white transition-colors" 
                strokeWidth={1.5} 
              />
              
              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                {item.name}
              </h3>
              <p className="font-mono text-xs text-neutral-500 leading-relaxed">
                <span className="text-[#FF6B00] mr-2">&gt;</span>
                {item.description}
              </p>

              {/* Expandable Details */}
              <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out">
                <div className="overflow-hidden">
                  <div className="pt-4 mt-4 border-t border-white/10 text-sm text-neutral-400 leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.details}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
