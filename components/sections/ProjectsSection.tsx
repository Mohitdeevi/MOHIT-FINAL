'use client';
import { ProjectCard } from '../ui/ProjectCard';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Autonomous AI Ads Engine',
      description: 'Reduced manual ad operations by 80%, improved ROAS by 35%',
      techStack: 'Next.js, Node.js, OpenAI APIs, Meta Ads API, Google Ads API, Redis, BullMQ',
    },
    {
      title: 'Unibox (Unified Inbox Platform)',
      description: 'Centralized 5+ communication channels, increased response rate by 50%',
      techStack: 'Next.js, PostgreSQL, SSE, Redis, WhatsApp API, LinkedIn integrations',
    },
    {
      title: 'AI Voice Sales Agent (Pine Labs Use Case)',
      description: 'Automated 1000+ calls/day, reduced cost per call by 60%',
      techStack: 'Retell AI, Twilio SIP, OpenAI, Node.js',
    },
    {
      title: 'TURGO.AI (Geo Analytics Platform)',
      description: 'Delivered 13 dashboards with real-time geo insights in 3 weeks',
      techStack: 'Next.js, Mapbox, Python, FastAPI, PostgreSQL',
    },
  ];

  return (
    <section className="px-8 py-16 bg-slate-900">
      <h2 className="text-3xl font-bold text-white">Projects</h2>
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}