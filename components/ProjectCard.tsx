
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, subtitle, description, link }) => {
  return (
    <div className="group border-t border-neutral-200 pt-12 pb-16 flex flex-col gap-6 hover:bg-neutral-50/50 transition-all duration-500 px-4 -mx-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">{title}</h3>
          <p className="text-lg font-medium text-neutral-500 italic">{subtitle}</p>
        </div>
        <div className="h-10 w-10 border border-neutral-200 rounded-full flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all">
          <ArrowUpRight size={20} />
        </div>
      </div>
      
      <p className="text-lg leading-relaxed text-neutral-600 max-w-2xl font-light">
        {description}
      </p>
      
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-sm font-bold uppercase tracking-widest text-neutral-900 hover:text-neutral-500 transition-colors flex items-center gap-2"
      >
        Test the Demo <span className="text-xs">→</span>
      </a>
    </div>
  );
};

export default ProjectCard;
