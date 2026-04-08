'use client';

import Link from "next/link";
import { Hexagon, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-white/5 bg-black/20 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between relative">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <Hexagon className="w-6 h-6 text-white fill-white/20" />
          <span className="text-white font-bold text-xl tracking-tight">Synthetix</span>
        </Link>

        {/* Center: Navigation (Desktop) */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
          <Link href="/features" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/solutions" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Solutions
          </Link>
          <Link href="/resources" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Resources
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Pricing
          </Link>
        </nav>

        {/* Right: Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/sign-in" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Sign In
          </Link>
          <Link href="/sign-up" className="px-4 py-2 text-sm font-medium text-white bg-[#FF6B00] rounded-full hover:bg-[#FF6B00]/90 transition-colors">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 p-2 -mr-2 text-neutral-400 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-full bg-neutral-950 border-b border-white/10 shadow-2xl md:hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              <Link 
                href="/features" 
                className="text-base font-medium text-neutral-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="/solutions" 
                className="text-base font-medium text-neutral-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                href="/resources" 
                className="text-base font-medium text-neutral-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="/pricing" 
                className="text-base font-medium text-neutral-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              
              <div className="h-px bg-white/10 my-2" />
              
              <Link 
                href="/sign-in" 
                className="text-base font-medium text-neutral-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                href="/sign-up" 
                className="text-base font-medium text-black bg-[#FF6B00] text-center transition-colors p-3 rounded-xl hover:bg-[#FF6B00]/90 mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
