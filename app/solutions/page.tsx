'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Network, Cpu, Shield, Zap, Database } from "lucide-react";

const solutions = [
  {
    icon: <Brain className="w-8 h-8 text-[#FF6B00]" />,
    title: "Autonomous Agents",
    description: "Deploy self-improving AI agents that handle complex workflows, from data analysis to customer interaction, with zero human oversight."
  },
  {
    icon: <Network className="w-8 h-8 text-[#FF6B00]" />,
    title: "Neural Infrastructure",
    description: "Scale your compute dynamically. Our neural infrastructure adapts to your workload, ensuring optimal performance during peak demands."
  },
  {
    icon: <Cpu className="w-8 h-8 text-[#FF6B00]" />,
    title: "Generative Synthesis",
    description: "Create high-fidelity synthetic data, assets, and code. Train your models faster without compromising privacy or security."
  },
  {
    icon: <Shield className="w-8 h-8 text-[#FF6B00]" />,
    title: "Cognitive Security",
    description: "Protect your neural pathways. Real-time threat detection powered by predictive models that anticipate attacks before they happen."
  },
  {
    icon: <Zap className="w-8 h-8 text-[#FF6B00]" />,
    title: "Real-time Processing",
    description: "Process millions of events per second with sub-millisecond latency. Built for high-frequency trading and live analytics."
  },
  {
    icon: <Database className="w-8 h-8 text-[#FF6B00]" />,
    title: "Semantic Vector Stores",
    description: "Store and retrieve unstructured data with unparalleled accuracy. Our vector databases are optimized for LLM context retrieval."
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      <Header />
      <main className="flex-1 w-full relative overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <span className="text-xs font-mono text-neutral-300 uppercase tracking-wider">Enterprise Grade</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Intelligence at <span className="text-[#FF6B00]">Scale.</span>
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Transform your infrastructure with our suite of autonomous, generative, and predictive neural systems. Built for the next generation of the web.
            </p>
          </motion.div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-[#FF6B00]/30 hover:bg-neutral-900/60 transition-all duration-300 group"
              >
                <div className="mb-6 p-4 bg-black/50 rounded-xl inline-block group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,107,0,0.2)] transition-all duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4 md:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="max-w-4xl mx-auto p-12 md:p-20 rounded-[2.5rem] bg-gradient-to-b from-neutral-900/80 to-black border border-white/10 relative overflow-hidden"
          >
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md bg-[#FF6B00]/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to integrate?</h2>
              <p className="text-neutral-400 mb-10 max-w-xl mx-auto text-lg">
                Deploy our solutions into your existing architecture within minutes. Get access to our API and SDKs today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/sign-up" className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-black bg-[#FF6B00] rounded-full hover:bg-[#ff8533] hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all duration-300">
                  Initialize Deployment
                </Link>
                <button className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300">
                  Read Documentation
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
