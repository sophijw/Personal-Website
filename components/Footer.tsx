
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-6 md:px-12 py-32 border-t border-neutral-100 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <p className="text-lg md:text-xl font-light text-neutral-600 leading-relaxed">
          Find me on{' '}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-900 font-medium underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-all">
            LinkedIn
          </a>
          , check out my code on{' '}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neutral-900 font-medium underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-all">
            GitHub
          </a>
          , or shoot me an email{' '}
          <a href="mailto:wujiangyi429@gmail.com" className="text-neutral-900 font-medium underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-all">
            wujiangyi429@gmail.com
          </a>
        </p>
        <p className="mt-12 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-300">
          &copy; {new Date().getFullYear()} Sophia — Swiss Minimalist Strategy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
