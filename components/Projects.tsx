
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Unfold",
      subtitle: "Making sense of the world, one story at a time.",
      description: "I built Unfold because I was tired of drowning in headlines. I realized I was consuming more news than ever, but understanding less about the world. I didn't want another feed that kept me scrolling; I wanted a tool that helped me think. So I designed a quiet space that filters out the noise and connects the dots for you—turning chaos into clear, meaningful history. It’s for anyone who wants to trade anxiety for clarity.",
      link: "https://unfold-news-timeline-analyzer-422400523342.us-west1.run.app/"
    },
    {
      title: "Warmdays",
      subtitle: "Bringing the 'human' back to digital birthdays.",
      description: "Somewhere along the way, wishing a friend 'Happy Birthday' became a chore—a generic notification we swipe away or a copy-pasted text. I wanted to change that. I built Warmdays to replace low-effort pings with intentional connection. It’s a personal experiment in digital intimacy, designed to help us slow down, remember the people who matter, and celebrate them in a way that actually feels warm.",
      link: "https://warmdays-422400523342.us-west1.run.app/"
    }
  ];

  return (
    <section id="projects" className="px-6 md:px-12 py-32 border-t border-[#2E2E5C]/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
        {/* Sticky Label */}
        <div className="lg:sticky lg:top-12 h-fit">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-50">Ongoing Projects</span>
        </div>

        {/* Projects List */}
        <div className="flex flex-col">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
