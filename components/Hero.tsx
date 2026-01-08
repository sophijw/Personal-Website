
import React from 'react';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="px-6 md:px-12 pt-16 pb-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
        {/* Sticky Label */}
        <div className="lg:sticky lg:top-12 h-fit">
          <span className="font-mono text-xl md:text-2xl uppercase tracking-tight text-[#EA6800]">About</span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight leading-[0.85] text-[#0034D3]">
              Hello, this is Sophia
            </h1>
            <p className="font-mono text-base md:text-lg uppercase tracking-widest text-[#403E3F] mt-4 opacity-80">
              Product Strategist. Builder. AI Explorer.
            </p>
          </div>

          <div className="max-w-4xl flex flex-col gap-10">
            <p className="font-mono text-xl md:text-2xl leading-relaxed text-[#403E3F]">
              It started at NYU, where I mapped the mechanics of influence to understand how ideas spread and stories resonate. But simply telling the story wasn't enough. I wanted to build the vehicle that carries it.
            </p>
            <p className="font-mono text-xl md:text-2xl leading-relaxed text-[#403E3F]">
              I discovered a deeper passion for product strategy and collaborative design. I wanted to work with teams to turn abstract ideas into tangible impact. That led me to Yale & HEC Paris, where I pivoted from analyzing narratives to engineering them.
            </p>
          </div>

          <div className="pt-8">
            <a 
              href="https://docs.google.com/document/d/1_fpT2s4YCbYljWLDyVaZmFFp-4cO6qOYIKkZHQOMNHs/edit?tab=t.d3wtguk0r80b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono text-base uppercase tracking-[0.15em] font-bold text-[#0034D3] border-b-2 border-[#0034D3] pb-3 hover:opacity-60 transition-all inline-flex items-center gap-4 w-fit"
            >
              Download Resume <Download size={20} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
