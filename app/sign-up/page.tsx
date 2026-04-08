'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Mail } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      <Header />
      <main className="flex-1 w-full relative flex items-center justify-center py-20 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md px-4 relative z-10"
        >
          <div className="p-8 rounded-3xl bg-neutral-900/40 border border-white/10 backdrop-blur-xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Create Account</h1>
              <p className="text-neutral-400 text-sm">Deploy your first autonomous agent today.</p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 text-white font-sans text-sm focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="you@example.com"
                  className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 text-white font-sans text-sm focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 text-white font-sans text-sm focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
                />
              </div>

              <button 
                type="button"
                className="w-full py-3 mt-4 bg-[#FF6B00] hover:bg-[#ff8533] text-black font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,107,0,0.4)]"
              >
                Initialize Deployment
              </button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-xs font-mono text-neutral-500 uppercase">Or continue with</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-sm font-medium transition-colors">
                <Github className="w-4 h-4" />
                GitHub
              </button>
              <button className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-sm font-medium transition-colors">
                <Mail className="w-4 h-4" />
                Google
              </button>
            </div>

            <p className="text-center text-sm text-neutral-400 mt-8">
              Already have an account?{' '}
              <Link href="/sign-in" className="text-white hover:text-[#FF6B00] transition-colors font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
