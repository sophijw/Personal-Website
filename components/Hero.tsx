
import React from 'react';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="px-6 md:px-12 pt-16 pb-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
        {/* Sticky Label */}
        <div className="lg:sticky lg:top-12 h-fit">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-50">About</span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight leading-[0.85] text-[#2E2E5C]">
              Hello, this is Sophia
            </h1>
            <p className="font-mono text-sm md:text-base uppercase tracking-widest text-[#2E2E5C]/70 mt-4">
              Product Strategist. Builder. AI Explorer.
            </p>
          </div>

          <div className="max-w-3xl flex flex-col gap-8">
            <p className="font-mono text-base md:text-lg leading-relaxed text-[#2E2E5C]">
              It started at NYU, where I mapped the mechanics of influence to understand how ideas spread and stories resonate. But simply telling the story wasn't enough. I wanted to build the vehicle that carries it.
            </p>
            <p className="font-mono text-base md:text-lg leading-relaxed text-[#2E2E5C]">
              I discovered a deeper passion for product strategy and collaborative design. I wanted to work with teams to turn abstract ideas into tangible impact. That led me to Yale & HEC Paris, where I pivoted from analyzing narratives to engineering them.
            </p>
          </div>

          <div className="pt-8">
            <button className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#2E2E5C] border-b-2 border-[#2E2E5C] pb-2 hover:opacity-50 transition-all flex items-center gap-3">
              Download Resume <Download size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
