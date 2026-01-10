
import React from 'react';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 pt-12 sm:pt-16 pb-24 sm:pb-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 sm:gap-12 lg:gap-40">
        {/* Sticky Label with Photo */}
        <div className="lg:sticky lg:top-12 h-fit flex flex-col gap-6 sm:gap-10 items-center lg:items-start">
          <span className="font-mono text-lg sm:text-xl md:text-2xl uppercase tracking-tight text-[#EA6800] mb-2">About</span>
          {/* Photo under About label */}
          <div className="w-full aspect-[4/5] max-w-[200px] sm:max-w-[240px] lg:max-w-[280px]">
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-xl sm:shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 transform hover:scale-[1.02]">
              <img 
                src="/assets/profile-photo.jpg" 
                alt="Sophia" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center center' }}
                onError={(e) => {
                  // Fallback to SVG placeholder if .jpg doesn't exist
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('.svg')) {
                    target.src = '/assets/profile-photo.svg';
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-8 sm:gap-12">
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Title Section */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight leading-[0.85] text-[#0034D3]">
                Hello, this is Sophia
              </h1>
              <p className="font-mono text-sm sm:text-base md:text-lg uppercase tracking-widest text-[#403E3F] mt-2 sm:mt-4 opacity-80">
                Product Strategist. Builder. AI Explorer.
              </p>
            </div>
          </div>

          <div className="max-w-4xl flex flex-col gap-6 sm:gap-8 md:gap-10">
            <p className="font-mono text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-[#403E3F]">
              It started at NYU, where I mapped the mechanics of influence to understand how ideas spread and stories resonate. But simply telling the story wasn't enough. I wanted to build the vehicle that carries it.
            </p>
            <p className="font-mono text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-[#403E3F]">
              I discovered a deeper passion for product strategy and collaborative design. I wanted to work with teams to turn abstract ideas into tangible impact. That led me to Yale & HEC Paris, where I pivoted from analyzing narratives to engineering them.
            </p>
          </div>

          <div className="pt-6 sm:pt-8">
            <a 
              href="https://docs.google.com/document/d/1_fpT2s4YCbYljWLDyVaZmFFp-4cO6qOYIKkZHQOMNHs/edit?tab=t.d3wtguk0r80b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono text-sm sm:text-base uppercase tracking-[0.15em] font-bold text-[#0034D3] border-b-2 border-[#0034D3] pb-2 sm:pb-3 hover:opacity-60 transition-all inline-flex items-center gap-3 sm:gap-4 w-fit"
            >
              Download Resume <Download size={18} strokeWidth={2.5} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
