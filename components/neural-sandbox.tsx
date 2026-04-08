'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Terminal, Send, Zap, Activity } from 'lucide-react';

export function NeuralSandbox() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<{ text: string; type: 'user' | 'system' | 'error' }[]>([
    { text: "SYSTEM INITIALIZED. AWAITING INPUT...", type: 'system' }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [computeLevel, setComputeLevel] = useState(50);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const userPrompt = input.trim();
    setInput('');
    setIsProcessing(true);
    setOutput(prev => [...prev, { text: `> ${userPrompt}`, type: 'user' }]);

    let step = 0;
    const steps = [
      `ALLOCATING ${computeLevel}% COMPUTE RESOURCES...`,
      "ANALYZING SEMANTIC VECTORS...",
      "ALIGNING NEURAL PATHWAYS...",
      `INTENT RECOGNIZED: "${userPrompt.toUpperCase()}"`,
      "SYNTHESIZING EXECUTION PROTOCOL...",
      "OUTPUT GENERATED SUCCESSFULLY."
    ];

    // The higher the compute level, the faster the "processing"
    const speed = Math.max(100, 800 - (computeLevel * 6));

    const interval = setInterval(() => {
      if (step < steps.length) {
        const currentText = steps[step];
        setOutput(prev => [...prev, { text: currentText, type: 'system' }]);
        step++;
      } else {
        clearInterval(interval);
        setIsProcessing(false);
      }
    }, speed);
  };

  useEffect(() => {
    if (output.length > 1) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [output]);

  return (
    <section className="relative w-full py-32 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      {/* Dynamic Background Glow based on Compute Level */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none transition-all duration-700 ease-out blur-[120px]"
        style={{
          background: `radial-gradient(circle, rgba(255, 107, 0, ${computeLevel / 500}) 0%, transparent 70%)`,
          transform: `translate(-50%, -50%) scale(${0.5 + (computeLevel / 100)})`
        }}
      />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Interact with the <span className="text-[#FF6B00]">Intelligence.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 max-w-2xl mx-auto"
          >
            The Neural Sandbox. Adjust compute allocation and provide an intent to see the system synthesize a response in real-time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
          
          {/* Controls Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-8">
              <Activity className="w-5 h-5 text-[#FF6B00]" />
              <h3 className="text-white font-semibold">System Controls</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-mono text-neutral-400">Compute Allocation</label>
                <span className="text-sm font-mono text-[#FF6B00]">{computeLevel}%</span>
              </div>
              
              <input 
                type="range" 
                min="1" 
                max="100" 
                value={computeLevel}
                onChange={(e) => setComputeLevel(Number(e.target.value))}
                className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
              />
              
              <p className="text-xs text-neutral-500 mt-4 leading-relaxed">
                Higher compute allocation accelerates semantic vector analysis and neural pathway alignment.
              </p>
            </div>
          </motion.div>

          {/* Terminal Window */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="flex flex-col h-[500px] rounded-2xl bg-[#050505] border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 border-b border-white/10 bg-neutral-900/30">
              <div className="flex gap-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                <Terminal className="w-3 h-3" />
                <span>sys_kernel_v9.2.sh</span>
              </div>
            </div>

            {/* Terminal Output */}
            <div className="flex-1 p-6 overflow-y-auto font-mono text-sm space-y-3">
              {output.map((msg, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`${
                    msg.type === 'user' ? 'text-white' : 'text-[#FF6B00]'
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              {isProcessing && (
                <motion.div 
                  animate={{ opacity: [1, 0.5, 1] }} 
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="text-[#FF6B00] inline-block"
                >
                  █
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Terminal Input */}
            <form 
              onSubmit={handleSubmit}
              className="p-4 border-t border-white/10 bg-neutral-900/30 flex gap-4"
            >
              <div className="flex-1 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[#FF6B00]">&gt;</span>
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isProcessing}
                  placeholder={isProcessing ? "Processing..." : "Enter execution prompt..."}
                  className="w-full bg-black border border-white/10 rounded-lg py-3 pl-8 pr-4 text-white font-mono text-sm focus:outline-none focus:border-[#FF6B00]/50 transition-colors disabled:opacity-50"
                />
              </div>
              <button 
                type="submit"
                disabled={isProcessing || !input.trim()}
                className="px-6 py-3 bg-[#FF6B00] hover:bg-[#ff8533] disabled:bg-neutral-800 disabled:text-neutral-500 text-black font-bold rounded-lg transition-colors flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                <span className="hidden sm:inline">Execute</span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
