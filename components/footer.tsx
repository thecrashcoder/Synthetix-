'use client';

import Link from 'next/link';
import { Github, Twitter, Linkedin, Youtube, ArrowRight, Hexagon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/10 pt-20 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Hexagon className="w-8 h-8 text-[#FF6B00] fill-[#FF6B00]/20" />
              <span className="text-white font-bold text-2xl tracking-tight">Synthetix</span>
            </div>
            <p className="text-neutral-400 mb-6 max-w-sm leading-relaxed">
              Accelerating the boundaries of what&apos;s possible through generative systems and autonomous logic.
            </p>
            <div className="flex items-center gap-2">
              <input 
                type="email" 
                placeholder="Enter email for updates" 
                className="bg-neutral-900 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#FF6B00] transition-colors w-full max-w-[240px]"
              />
              <button className="bg-[#FF6B00] hover:bg-[#ff8533] text-black p-2 rounded-lg transition-colors flex items-center justify-center">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Links: Platform */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-neutral-400 hover:text-[#FF6B00] text-sm transition-colors">Architecture</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FF6B00] text-sm transition-colors">Logic Stack</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FF6B00] text-sm transition-colors">Neural Sandbox</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FF6B00] text-sm transition-colors">Enterprise</Link></li>
            </ul>
          </div>

          {/* Links: Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-neutral-400 hover:text-[#FF6B00] text-sm transition-colors">Documentation</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FF6B00] text-sm transition-colors">API Reference</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FF6B00] text-sm transition-colors">System Status</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FF6B00] text-sm transition-colors">Research Blog</Link></li>
            </ul>
          </div>

          {/* Links: Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-neutral-400 hover:text-[#FF6B00] text-sm transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FF6B00] text-sm transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FF6B00] text-sm transition-colors">Manifesto</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FF6B00] text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
            <span className="text-neutral-400 font-mono text-sm uppercase tracking-widest">System Online</span>
          </div>
          
          <div className="flex items-center gap-6">
            <Link href="#" className="text-neutral-500 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex items-center gap-6 text-xs text-neutral-600 font-mono">
            <Link href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</Link>
            <span>© {new Date().getFullYear()} Synthetix Company.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
