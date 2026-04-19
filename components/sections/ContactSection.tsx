'use client';

export function ContactSection() {
  return (
    <section className="px-8 py-16 bg-slate-900">
      <h2 className="text-3xl font-bold text-white">Contact</h2>
      <p className="mt-4 text-lg text-gray-300">Let’s build something powerful</p>
      <div className="mt-8 space-x-4">
        <a href="mailto:mohit.deevi@example.com" className="text-indigo-400 hover:underline">Email</a>
        <a href="https://linkedin.com/in/mohitdeevi" className="text-indigo-400 hover:underline">LinkedIn</a>
        <a href="https://github.com/mohitdeevi" className="text-indigo-400 hover:underline">GitHub</a>
        <a href="https://twitter.com/mohitdeevi" className="text-indigo-400 hover:underline">Twitter</a>
      </div>
    </section>
  );
}