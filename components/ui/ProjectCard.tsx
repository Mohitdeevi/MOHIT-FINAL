'use client';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string;
}

export function ProjectCard({ title, description, techStack }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-slate-800 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
      <p className="mt-4 text-sm text-gray-500">{techStack}</p>
    </motion.div>
  );
}