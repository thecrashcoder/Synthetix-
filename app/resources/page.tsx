'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import { BookOpen, Code2, PlayCircle, Users, ArrowRight, FileText, Terminal } from "lucide-react";
import Link from "next/link";

const resourceCategories = [
  {
    title: "Documentation",
    description: "Comprehensive guides, concepts, and architectural overviews of the Synthetix platform.",
    icon: <BookOpen className="w-6 h-6 text-[#FF6B00]" />,
    href: "#"
  },
  {
    title: "API Reference",
    description: "Detailed endpoint specifications, request/response models, and authentication flows.",
    icon: <Code2 className="w-6 h-6 text-[#FF6B00]" />,
    href: "#"
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step visual guides for building and deploying autonomous agents.",
    icon: <PlayCircle className="w-6 h-6 text-[#FF6B00]" />,
    href: "#"
  },
  {
    title: "Community Hub",
    description: "Join thousands of developers. Share knowledge, ask questions, and collaborate.",
    icon: <Users className="w-6 h-6 text-[#FF6B00]" />,
    href: "#"
  }
];

const latestArticles = [
  {
    title: "Optimizing Vector Search for Low Latency",
    category: "Engineering",
    date: "Apr 02, 2026",
    readTime: "8 min read"
  },
  {
    title: "Building Autonomous Agents with Next.js",
    category: "Tutorial",
    date: "Mar 28, 2026",
    readTime: "12 min read"
  },
  {
    title: "The Future of Generative Synthesis",
    category: "Research",
    date: "Mar 15, 2026",
    readTime: "5 min read"
  }
];

export default function ResourcesPage() {
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
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <span className="text-xs font-mono text-neutral-300 uppercase tracking-wider">Knowledge Base</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Developer <span className="text-[#FF6B00]">Resources.</span>
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Everything you need to build, deploy, and scale with Synthetix. From foundational concepts to advanced API integrations.
            </p>
          </motion.div>
        </section>

        {/* Categories Grid */}
        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={category.href} className="block p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-[#FF6B00]/30 hover:bg-neutral-900/60 transition-all duration-300 group h-full">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-black/50 rounded-xl border border-white/5 group-hover:border-[#FF6B00]/20 transition-colors shrink-0">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF6B00] transition-colors flex items-center gap-2">
                        {category.title}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">{category.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Latest Articles & CLI */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Articles List */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                className="flex items-center gap-3 mb-8"
              >
                <FileText className="w-5 h-5 text-[#FF6B00]" />
                <h2 className="text-2xl font-bold text-white">Latest Research & Guides</h2>
              </motion.div>
              
              <div className="space-y-4">
                {latestArticles.map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-neutral-900/20 border border-white/5 hover:bg-neutral-900/40 transition-colors group cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider">{article.category}</span>
                          <span className="text-xs text-neutral-600 font-mono">•</span>
                          <span className="text-xs text-neutral-500 font-mono">{article.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-[#FF6B00] transition-colors">{article.title}</h3>
                      </div>
                      <div className="text-sm text-neutral-500 font-mono shrink-0">
                        {article.date}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CLI Quickstart */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="lg:col-span-1"
            >
              <div className="p-8 rounded-3xl bg-gradient-to-b from-neutral-900/80 to-black border border-white/10 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Terminal className="w-5 h-5 text-[#FF6B00]" />
                  <h3 className="text-xl font-bold text-white">Quickstart CLI</h3>
                </div>
                <p className="text-sm text-neutral-400 mb-6">
                  Initialize a new Synthetix project in seconds using our official CLI tool.
                </p>
                <div className="bg-black border border-white/10 rounded-lg p-4 font-mono text-sm text-neutral-300 relative group">
                  <div className="absolute top-0 left-0 w-full h-full bg-[#FF6B00]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />
                  <span className="text-[#FF6B00] mr-2">$</span>
                  npx create-synthetix@latest
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <Link href="#" className="text-sm text-white hover:text-[#FF6B00] transition-colors flex items-center gap-2">
                    View CLI Documentation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
