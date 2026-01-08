
import React from 'react';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="px-6 md:px-12 pt-20 pb-32 max-w-7xl mx-auto">
      <div className="flex flex-col gap-6">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-neutral-900">
          Hello, this is Sophia
        </h1>
        
        <p className="text-xl md:text-2xl font-medium text-neutral-500 max-w-xl">
          A product strategist, builder, and AI explorer.
        </p>

        <div className="mt-12 md:mt-24 flex flex-col md:flex-row gap-12 items-start md:items-end">
          <div className="max-w-2xl flex flex-col gap-6">
            <p className="text-lg md:text-xl leading-relaxed text-neutral-700 font-light max-w-xl">
              It started at NYU, where I mapped the mechanics of influence to understand how ideas spread and stories resonate. But simply telling the story wasn't enough. I wanted to build the vehicle that carries it.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-neutral-700 font-light max-w-xl">
              I discovered a deeper passion for product strategy and collaborative design. I wanted to work with teams to turn abstract ideas into tangible impact. That led me to Yale & HEC Paris, where I pivoted from analyzing narratives to engineering them.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button className="group relative px-8 py-4 bg-neutral-900 text-white rounded-none font-medium flex items-center gap-3 overflow-hidden transition-all hover:pr-10">
              <span className="relative z-10 flex items-center gap-2">
                Download Resume <Download size={18} />
              </span>
              <div className="absolute inset-y-0 right-0 w-0 bg-neutral-700 transition-all group-hover:w-2 group-hover:bg-neutral-800"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
