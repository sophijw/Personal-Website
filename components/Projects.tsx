
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Unfold",
      subtitle: "Making sense of the world, one story at a time.",
      description: "I built Unfold because I was tired of drowning in headlines. I realized I was consuming more news than ever, but understanding less about the world. I didn't want another feed that kept me scrolling; I wanted a tool that helped me think. So I designed a quiet space that filters out the noise and connects the dots for you—turning chaos into clear, meaningful history. It’s for anyone who wants to trade anxiety for clarity.",
      link: "#"
    },
    {
      title: "Warmdays",
      subtitle: "Bringing the 'human' back to digital birthdays.",
      description: "Somewhere along the way, wishing a friend 'Happy Birthday' became a chore—a generic notification we swipe away or a copy-pasted text. I wanted to change that. I built Warmdays to replace low-effort pings with intentional connection. It’s a personal experiment in digital intimacy, designed to help us slow down, remember the people who matter, and celebrate them in a way that actually feels warm.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="px-6 md:px-12 py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Ongoing <br/>Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
