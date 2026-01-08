
import React from 'react';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, subtitle, description, link }) => {
  return (
    <div className="group border-t border-[#2E2E5C]/10 pt-12 pb-16 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#2E2E5C]">{title}</h3>
        <p className="font-mono text-xs uppercase tracking-widest text-[#2E2E5C]/60 italic">{subtitle}</p>
      </div>
      
      <p className="font-mono text-sm md:text-base leading-relaxed text-[#2E2E5C]/80 max-w-2xl">
        {description}
      </p>
      
      <div className="pt-2">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#2E2E5C] underline underline-offset-8 decoration-[#2E2E5C]/30 hover:decoration-[#2E2E5C] transition-all"
        >
          Test the Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
