'use client';

import { SplineScene } from "@/components/ui/splite";
import { Header } from "@/components/header";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import { LiveStream } from "@/components/live-stream";
import { ArtifactGallery } from "@/components/artifact-gallery";
import { LogicStack } from "@/components/logic-stack";
import { Architecture } from "@/components/architecture";
import { NeuralSandbox } from "@/components/neural-sandbox";
import { Manifesto } from "@/components/manifesto";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      <Header />
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          {/* Text Content */}
          <motion.div 
            className="absolute left-0 top-0 bottom-0 w-full md:w-1/2 flex flex-col justify-center pl-8 md:pl-12 lg:pl-16 pr-8 z-10 pointer-events-none"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#FF6B00] mb-4 tracking-tight pointer-events-auto drop-shadow-lg whitespace-nowrap">
              Beyond Human Scale.
            </h1>
            <p className="text-sm md:text-base text-white pointer-events-auto leading-relaxed drop-shadow-md">
              <span className="whitespace-nowrap">Accelerating the boundaries of what’s possible</span><br />
              <span className="whitespace-nowrap">through generative systems and autonomous logic.</span>
            </p>
          </motion.div>

          {/* 3D Scene */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            initial={{ x: 0 }}
            animate={{ x: "25%" }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
          >
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </motion.div>
        </section>

        {/* Live Stream Section */}
        <LiveStream />

        {/* Artifact Gallery Section */}
        <ArtifactGallery />

        {/* Logic Stack Section */}
        <LogicStack />

        {/* Architecture Process Section */}
        <Architecture />

        {/* Neural Sandbox Section */}
        <NeuralSandbox />

        {/* Manifesto Section */}
        <Manifesto />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
