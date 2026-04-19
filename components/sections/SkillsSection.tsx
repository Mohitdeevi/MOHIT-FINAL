'use client';

export function SkillsSection() {
  return (
    <section className="px-8 py-16 bg-slate-950">
      <h2 className="text-3xl font-bold text-white">Skills / Tech Stack</h2>
      <ul className="mt-4 text-lg text-gray-300">
        <li>Frontend: Next.js, React, Tailwind</li>
        <li>Backend: Node.js, FastAPI, PostgreSQL</li>
        <li>AI: OpenAI, LLM workflows, voice AI</li>
        <li>Tools: Redis, BullMQ, Twilio, APIs</li>
      </ul>
    </section>
  );
}