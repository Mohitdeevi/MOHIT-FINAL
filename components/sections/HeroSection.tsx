'use client';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-slate-950 to-slate-900">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-5xl font-bold text-white">
        I build AI systems that replace entire workflows
      </motion.h1>
      <p className="mt-4 text-lg text-gray-300">
        AI Engineer crafting automation, SaaS, and growth engines that scale businesses
      </p>
      <div className="mt-8 space-x-4">
        <button className="px-6 py-3 font-semibold text-white transition-all duration-300 ease-out transform bg-indigo-600 rounded-lg hover:-translate-y-0.5 hover:bg-indigo-500">
          View Work
        </button>
        <button className="px-6 py-3 font-semibold text-white transition-all duration-300 ease-out transform bg-indigo-600 rounded-lg hover:-translate-y-0.5 hover:bg-indigo-500">
          Contact Me
        </button>
      </div>
    </section>
  );
}