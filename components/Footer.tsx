
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-6 md:px-12 py-32 border-t border-[#2E2E5C]/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
        {/* Sticky Label */}
        <div className="lg:sticky lg:top-12 h-fit">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-50">Connect</span>
        </div>

        <div className="flex flex-col gap-12">
          <p className="font-mono text-lg md:text-xl leading-relaxed text-[#2E2E5C]/80">
            Find me on{' '}
            <a href="https://www.linkedin.com/in/jiangyiwu/" target="_blank" rel="noopener noreferrer" className="text-[#2E2E5C] font-bold underline underline-offset-8 decoration-[#2E2E5C]/20 hover:decoration-[#2E2E5C] transition-all">
              LinkedIn
            </a>
            , check out my code on{' '}
            <a href="https://github.com/sophijw" target="_blank" rel="noopener noreferrer" className="text-[#2E2E5C] font-bold underline underline-offset-8 decoration-[#2E2E5C]/20 hover:decoration-[#2E2E5C] transition-all">
              GitHub
            </a>
            , or shoot me an email{' '}
            <a href="mailto:wujiangyi429@gmail.com" className="text-[#2E2E5C] font-bold underline underline-offset-8 decoration-[#2E2E5C]/20 hover:decoration-[#2E2E5C] transition-all">
              wujiangyi429@gmail.com
            </a>
          </p>
          
          <div className="pt-12 border-t border-[#2E2E5C]/5">
            <p className="font-mono text-[9px] uppercase tracking-[0.5em] text-[#2E2E5C]/30">
              &copy; {new Date().getFullYear()} SOPHIA — ENGINEERED NARRATIVES
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
