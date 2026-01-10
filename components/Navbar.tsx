import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-10 flex justify-between items-center bg-transparent z-50 max-w-7xl mx-auto">
      <div className="text-lg sm:text-xl font-serif font-bold tracking-tight text-[#0034D3]">SOPHIA.</div>
      <div className="flex gap-3 sm:gap-4 md:gap-6 text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-widest text-[#403E3F]">
        <a 
          href="https://www.linkedin.com/in/jiangyiwu/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#0034D3] transition-colors"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/sophijw" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#0034D3] transition-colors"
        >
          GitHub
        </a>
        <a 
          href="https://www.instagram.com/sophwujiangyi/?igsh=cGM3ZGx1dWJjNHc1&utm_source=qr#" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#0034D3] transition-colors"
        >
          Instagram
        </a>
      </div>
    </nav>
  );
};

export default Navbar;