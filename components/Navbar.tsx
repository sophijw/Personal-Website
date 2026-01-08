
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full px-6 md:px-12 py-10 flex justify-between items-center bg-transparent z-50 max-w-7xl mx-auto">
      <div className="text-xl font-serif font-bold tracking-tight text-[#2E2E5C]">SOPHIA.</div>
      <div className="flex gap-6 text-[11px] font-mono font-medium uppercase tracking-widest text-[#2E2E5C]">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">GitHub</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">Instagram</a>
      </div>
    </nav>
  );
};

export default Navbar;
