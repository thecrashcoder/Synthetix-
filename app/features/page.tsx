'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import { Cpu, Shield, Zap, Layers, Globe, Code2, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Global Edge Network",
    description: "Deploy your neural models across 275+ edge locations worldwide. Achieve sub-10ms latency for 99% of your user base.",
    icon: <Globe className="w-6 h-6 text-[#FF6B00]" />,
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-neutral-900/80 to-neutral-950"
  },
  {
    title: "Zero-Trust Security",
    description: "Every request is cryptographically verified. End-to-end encryption for all generative payloads.",
    icon: <Shield className="w-6 h-6 text-[#FF6B00]" />,
    colSpan: "md:col-span-1",
    bg: "bg-neutral-900/50"
  },
  {
    title: "Dynamic Context",
    description: "Infinite context windows powered by our proprietary vector compression algorithms.",
    icon: <Layers className="w-6 h-6 text-[#FF6B00]" />,
    colSpan: "md:col-span-1",
    bg: "bg-neutral-900/50"
  },
  {
    title: "Autonomous Healing",
    description: "Self-correcting infrastructure that detects anomalies and reroutes traffic before failure occurs.",
    icon: <Cpu className="w-6 h-6 text-[#FF6B00]" />,
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-tr from-neutral-900/80 to-neutral-950"
  }
];

const deepDives = [
  {
    title: "Real-time Synthesis Engine",
    description: "Our core engine processes multimodal inputs simultaneously. Whether it's text, audio, or visual data, the synthesis engine correlates and generates outputs with unprecedented coherence.",
    icon: <Zap className="w-8 h-8 text-[#FF6B00]" />,
    metrics: [
      { label: "Throughput", value: "100k req/s" },
      { label: "Latency", value: "< 12ms" },
      { label: "Uptime", value: "99.999%" }
    ]
  },
  {
    title: "Programmable Logic Gates",
    description: "Define custom routing rules for your AI agents using our intuitive TypeScript SDK. Intercept, modify, and validate generative outputs before they reach your users.",
    icon: <Code2 className="w-8 h-8 text-[#FF6B00]" />,
    metrics: [
      { label: "SDK Size", value: "12kb" },
      { label: "Type Safety", value: "100%" },
      { label: "Integration", value: "2 mins" }
    ]
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      <Header />
      <main className="flex-1 w-full relative overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <span className="text-xs font-mono text-neutral-300 uppercase tracking-wider">Core Capabilities</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
              Engineered for <br className="hidden md:block" />
              <span className="text-[#FF6B00]">Absolute Performance.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto">
              Discover the technical foundation that powers the next generation of autonomous applications. Built from the ground up for speed, security, and scale.
            </p>
          </motion.div>
        </section>

        {/* Bento Grid Section */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`p-8 rounded-3xl border border-white/5 hover:border-[#FF6B00]/30 transition-colors duration-500 group ${feature.colSpan} ${feature.bg}`}
              >
                <div className="mb-6 p-4 bg-black/50 rounded-2xl inline-block border border-white/5 group-hover:border-[#FF6B00]/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Deep Dive Section */}
        <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <div className="space-y-32">
            {deepDives.map((item, index) => (
              <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}>
                
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 !== 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                  className="flex-1"
                >
                  <div className="mb-6 p-4 bg-white/5 rounded-2xl inline-block border border-white/10">
                    {item.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">{item.title}</h2>
                  <p className="text-lg text-neutral-400 leading-relaxed mb-10">
                    {item.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                    {item.metrics.map((metric, mIndex) => (
                      <div key={mIndex}>
                        <div className="text-2xl md:text-3xl font-bold text-white mb-1">{metric.value}</div>
                        <div className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Visual Placeholder (Abstract Data Representation) */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 w-full aspect-square md:aspect-auto md:h-[500px] rounded-[2.5rem] bg-neutral-900/30 border border-white/10 relative overflow-hidden flex items-center justify-center group"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Abstract shapes */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full border border-[#FF6B00]/20 absolute animate-[spin_10s_linear_infinite]" />
                    <div className="w-60 h-60 rounded-full border border-white/10 absolute animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="w-80 h-80 rounded-full border border-white/5 absolute animate-[spin_20s_linear_infinite]" />
                    <div className="w-20 h-20 bg-[#FF6B00]/10 backdrop-blur-xl rounded-2xl border border-[#FF6B00]/30 rotate-45 group-hover:rotate-90 transition-transform duration-700" />
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 px-4 md:px-8 text-center relative z-10 border-t border-white/5 bg-black/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Experience the difference.</h2>
            <p className="text-neutral-400 mb-8">Stop worrying about infrastructure. Start building the future.</p>
            <button className="px-8 py-4 text-sm font-bold text-black bg-white rounded-full hover:bg-neutral-200 transition-colors inline-flex items-center gap-2 group">
              Start Building Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
