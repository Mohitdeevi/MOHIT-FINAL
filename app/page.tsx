'use client';
import { HeroSection, AboutSection, ProjectsSection, SkillsSection, ContactSection, Footer } from '../components/sections';

export default function HomePage() {
  return (
    <main className="space-y-16">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}