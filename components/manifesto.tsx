'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export function Manifesto() {
  const targetRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  
  useEffect(() => {
    const updateRange = () => {
      if (textRef.current) {
        // Calculate the exact pixel distance to scroll
        // Total width of the text container MINUS the viewport width
        const range = textRef.current.scrollWidth - window.innerWidth;
        setScrollRange(range > 0 ? range : 0);
      }
    };
    
    updateRange();
    // Re-measure after a short delay to ensure fonts are fully loaded
    const timeout = setTimeout(updateRange, 150);
    window.addEventListener('resize', updateRange);
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', updateRange);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Apply a spring physics smoothing to the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform the horizontal position using exact pixel values for perfectly smooth interpolation
  const x = useTransform(smoothProgress, [0, 0.8], [0, -scrollRange]);
  
  // Fade out during the last 20% of the scroll to transition to the next section
  const opacity = useTransform(smoothProgress, [0.8, 1], [1, 0]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#1c1c1c]">
      <motion.div 
        style={{ opacity }}
        className="sticky top-0 h-screen flex items-center overflow-hidden"
      >
        <motion.div 
          ref={textRef}
          style={{ x }} 
          className="flex gap-12 md:gap-24 pl-[5vw] pr-[10vw] whitespace-nowrap items-center w-max"
        >
          <h2 className="text-[15vw] font-black tracking-tighter text-white uppercase leading-none">
            We don&apos;t just build tools;
          </h2>
          <h2 className="text-[15vw] font-black tracking-tighter text-white uppercase leading-none">
            we build the bridges
          </h2>
          <h2 className="text-[15vw] font-black tracking-tighter text-white uppercase leading-none">
            between intent
          </h2>
          <h2 className="text-[15vw] font-black tracking-tighter text-[#FF6B00] uppercase leading-none">
            and execution.
          </h2>
        </motion.div>
      </motion.div>
    </section>
  );
}
