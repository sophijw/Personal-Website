
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-6 md:px-12 py-32 border-t border-[#403E3F]/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
        {/* Sticky Label */}
        <div className="lg:sticky lg:top-12 h-fit">
          <span className="font-mono text-xl md:text-2xl uppercase tracking-tight text-[#EA6800]">Connect</span>
        </div>

        <div className="flex flex-col gap-16">
          <p className="font-mono text-xl md:text-3xl leading-snug text-[#403E3F] max-w-4xl">
            Find me on{' '}
            <a href="https://www.linkedin.com/in/jiangyiwu/" target="_blank" rel="noopener noreferrer" className="text-[#0034D3] font-bold underline underline-offset-[10px] decoration-[#0034D3]/20 hover:decoration-[#0034D3] transition-all">
              LinkedIn
            </a>
            , check out my code on{' '}
            <a href="https://github.com/sophijw" target="_blank" rel="noopener noreferrer" className="text-[#0034D3] font-bold underline underline-offset-[10px] decoration-[#0034D3]/20 hover:decoration-[#0034D3] transition-all">
              GitHub
            </a>
            , or shoot me an email{' '}
            <a href="mailto:wujiangyi429@gmail.com" className="text-[#0034D3] font-bold underline underline-offset-[10px] decoration-[#0034D3]/20 hover:decoration-[#0034D3] transition-all">
              wujiangyi429@gmail.com
            </a>
          </p>
          
          <div className="pt-12 border-t border-[#403E3F]/5">
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#EA6800]">
              &copy; {new Date().getFullYear()} SOPHIA — ENGINEERED NARRATIVES
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
