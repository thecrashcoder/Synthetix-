'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const steps = [
  {
    id: '01',
    title: 'Ingestion',
    description: 'Raw data, context, and intent parameters are securely ingested into the neural framework. We map the boundaries of the problem space.',
  },
  {
    id: '02',
    title: 'Synthesis',
    description: 'Autonomous logic processes the inputs. Generative models iterate rapidly, identifying optimized pathways and structuring the solution.',
  },
  {
    id: '03',
    title: 'Deployment',
    description: 'The synthesized architecture is executed at scale. A seamless transition from abstract intent to concrete, production-ready reality.',
  }
];

export function Architecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Animate the height of the active line based on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        <div className="mb-24 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4"
          >
            The <span className="text-[#FF6B00]">Architecture.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 max-w-2xl text-lg"
          >
            Demystifying the process. How we transform raw intent into executed reality.
          </motion.p>
        </div>

        <div ref={containerRef} className="relative max-w-3xl mx-auto">
          {/* Background Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
          
          {/* Animated Active Line */}
          <motion.div 
            className="absolute left-[27px] md:left-1/2 top-0 w-px bg-[#FF6B00] md:-translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.id} className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
                  
                  {/* Desktop: Left Content (Empty for odd, Content for even) */}
                  <div className={`hidden md:block w-1/2 pr-16 text-right ${!isEven ? 'md:invisible' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-100px" }}
                    >
                      <div className="text-[#FF6B00] font-mono text-sm mb-2">{step.id}.</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-neutral-400 leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-14 h-14 bg-neutral-950 z-10">
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="w-4 h-4 rounded-full border-2 border-[#FF6B00] bg-neutral-950 group-hover:bg-[#FF6B00] group-hover:shadow-[0_0_15px_rgba(255,107,0,0.5)] transition-all duration-300"
                    />
                  </div>

                  {/* Desktop: Right Content (Content for odd, Empty for even) */}
                  <div className={`hidden md:block w-1/2 pl-16 text-left ${isEven ? 'md:invisible' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-100px" }}
                    >
                      <div className="text-[#FF6B00] font-mono text-sm mb-2">{step.id}.</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-neutral-400 leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Mobile Content (Always on the right of the line) */}
                  <div className="md:hidden pl-20 w-full">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-100px" }}
                    >
                      <div className="text-[#FF6B00] font-mono text-sm mb-2">{step.id}.</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-neutral-400 leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
