'use client';

import { useState } from 'react';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Developer",
    description: "Perfect for experimentation and prototyping.",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "10,000 requests per month",
      "Standard latency (50ms)",
      "Community support",
      "1 active project",
      "Basic analytics"
    ],
    highlighted: false,
    cta: "Start Free"
  },
  {
    name: "Scale",
    description: "For production workloads and scaling teams.",
    monthlyPrice: 99,
    annualPrice: 79,
    features: [
      "1,000,000 requests per month",
      "Ultra-low latency (<12ms)",
      "Priority 24/7 support",
      "Unlimited projects",
      "Advanced custom analytics",
      "Custom logic gates"
    ],
    highlighted: true,
    cta: "Initialize Scale"
  },
  {
    name: "Enterprise",
    description: "For mission-critical systems and custom needs.",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    features: [
      "Unlimited requests",
      "Dedicated edge nodes",
      "Dedicated success manager",
      "Custom SLA (99.999%)",
      "On-premise deployment options",
      "SOC2 & HIPAA compliance"
    ],
    highlighted: false,
    cta: "Contact Sales"
  }
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      <Header />
      <main className="flex-1 w-full relative overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <span className="text-xs font-mono text-neutral-300 uppercase tracking-wider">Transparent Pricing</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Scale without <span className="text-[#FF6B00]">Limits.</span>
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed mb-12">
              Scale your autonomous infrastructure without unpredictable costs. Choose the plan that fits your execution needs.
            </p>

            {/* Animated Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-neutral-500'}`}>Monthly</span>
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-16 h-8 rounded-full bg-neutral-800 border border-white/10 p-1 cursor-pointer flex items-center"
                aria-label="Toggle pricing"
              >
                <motion.div 
                  className="w-6 h-6 rounded-full bg-[#FF6B00] shadow-[0_0_10px_rgba(255,107,0,0.5)]"
                  animate={{ x: isAnnual ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={`text-sm font-medium transition-colors flex items-center gap-2 ${isAnnual ? 'text-white' : 'text-neutral-500'}`}>
                Annually 
                <span className="text-[10px] font-bold text-[#FF6B00] bg-[#FF6B00]/10 px-2 py-0.5 rounded-full border border-[#FF6B00]/20 uppercase tracking-wider">
                  Save 20%
                </span>
              </span>
            </div>
          </motion.div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative rounded-3xl p-8 h-full ${
                  plan.highlighted 
                    ? 'bg-neutral-900/80 border border-transparent shadow-[0_0_30px_rgba(255,107,0,0.15)] transform md:-translate-y-4' 
                    : 'bg-neutral-900/40 border border-white/5 hover:border-white/10'
                }`}
              >
                {/* Animated Border for Highlighted Plan */}
                {plan.highlighted && (
                  <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(255,107,0,0.8)_360deg)]"
                    />
                    {/* Inner background to cover the gradient and leave just a border */}
                    <div className="absolute inset-[1px] rounded-[23px] bg-neutral-950 backdrop-blur-xl" />
                  </div>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {plan.highlighted && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#FF6B00] text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      MOST POPULAR
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-neutral-400 mb-6 h-10">{plan.description}</p>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">
                        {typeof plan.monthlyPrice === 'number' 
                          ? `$${isAnnual ? plan.annualPrice : plan.monthlyPrice}` 
                          : plan.monthlyPrice}
                      </span>
                      {typeof plan.monthlyPrice === 'number' && (
                        <span className="text-neutral-500 text-sm">/ month</span>
                      )}
                    </div>
                    {isAnnual && typeof plan.monthlyPrice === 'number' && plan.monthlyPrice > 0 && (
                      <div className="text-xs text-[#FF6B00] mt-2 font-mono">Billed annually</div>
                    )}
                  </div>

                  <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 mb-8 ${
                    plan.highlighted
                      ? 'bg-[#FF6B00] text-black hover:bg-[#ff8533] hover:shadow-[0_0_20px_rgba(255,107,0,0.4)]'
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                  }`}>
                    {plan.cta}
                  </button>

                  <div className="space-y-4 flex-1">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? 'text-[#FF6B00]' : 'text-neutral-500'}`} />
                        <span className="text-sm text-neutral-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
