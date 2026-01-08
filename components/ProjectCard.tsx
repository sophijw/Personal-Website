
import React from 'react';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, subtitle, description, link }) => {
  return (
    <div className="group border-t border-[#403E3F]/10 pt-16 pb-20 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#0034D3]">{title}</h3>
        <p className="font-mono text-base md:text-lg uppercase tracking-widest text-[#EA6800] font-semibold">{subtitle}</p>
      </div>
      
      <p className="font-mono text-xl md:text-2xl leading-relaxed text-[#403E3F] max-w-4xl">
        {description}
      </p>
      
      <div className="pt-4">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-mono text-[14px] font-bold uppercase tracking-widest text-[#0034D3] underline underline-offset-[12px] decoration-[#0034D3]/30 hover:decoration-[#0034D3] transition-all"
        >
          Test the Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
