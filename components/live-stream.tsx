'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function LiveStream() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const generateCoord = () => {
    const lat = (Math.random() * 180 - 90).toFixed(4);
    const lng = (Math.random() * 360 - 180).toFixed(4);
    const node = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
    const load = (Math.random() * 100).toFixed(1);
    return `NODE_${node} // LAT:${lat} LNG:${lng} // LOAD:${load}% // ACTIVE`;
  };

  const [coords, setCoords] = useState<string[]>([]);

  // Canvas Neural Network Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };

    const initNodes = () => {
      nodes = [];
      // Adjust density based on screen size
      const numNodes = Math.floor((canvas.width * canvas.height) / 12000);
      for (let i = 0; i < numNodes; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Warm Orange: #FF6B00
      ctx.fillStyle = '#FF6B00';
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#FF6B00';

      // Update and draw nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw thin connecting lines
      ctx.lineWidth = 0.3; // Very thin lines
      ctx.shadowBlur = 0; // Remove shadow for lines to keep them crisp
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 107, 0, ${1 - dist / 120})`;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Scrolling Coordinates Logic
  useEffect(() => {
    // Initial fill on client to avoid hydration mismatch
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCoords(Array.from({ length: 40 }, generateCoord));

    // Rapidly update coordinates to simulate a live data stream
    const interval = setInterval(() => {
      setCoords(prev => [generateCoord(), ...prev].slice(0, 40));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center border-t border-white/5">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />
      
      {/* Scrolling Coordinates Overlay */}
      <div 
        className="absolute right-4 md:right-8 top-0 bottom-0 w-80 overflow-hidden flex flex-col justify-start pt-8 pb-8 pointer-events-none opacity-40"
        style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}
      >
        {coords.map((c, i) => (
          <div key={i} className="text-[#FF6B00] font-mono text-[10px] md:text-xs leading-tight mb-1 whitespace-nowrap">
            {c}
          </div>
        ))}
      </div>

      {/* Center Copy */}
      <div className="z-10 text-center px-4 pointer-events-none">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-2xl"
        >
          Processing the future <br/>
          <span className="text-[#FF6B00] drop-shadow-[0_0_15px_rgba(255,107,0,0.5)]">in real-time.</span>
        </motion.h2>
      </div>
      
      {/* Gradient Overlays for blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-black pointer-events-none opacity-50" />
    </section>
  );
}
