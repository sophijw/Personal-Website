
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full px-6 md:px-12 py-8 flex justify-between items-center bg-transparent z-50">
      <div className="text-xl font-bold tracking-tighter">SOPHIA.</div>
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-tight">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 transition-colors uppercase tracking-widest text-[10px] font-bold">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 transition-colors uppercase tracking-widest text-[10px] font-bold">GitHub</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 transition-colors uppercase tracking-widest text-[10px] font-bold">Instagram</a>
      </div>
    </nav>
  );
};

export default Navbar;
