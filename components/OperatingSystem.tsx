
import React from 'react';

const OperatingSystem: React.FC = () => {
  const items = [
    "First Principle Thinking",
    "Rational Optimism",
    "Customer Centricity",
    "Bias for Action",
    "Extreme Ownership"
  ];

  return (
    <section id="os" className="px-6 md:px-12 py-32 max-w-7xl mx-auto border-t border-neutral-100">
      <div className="flex flex-col gap-12">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-400">My Operating System</h2>
        
        <div className="flex flex-wrap items-center gap-x-4 gap-y-4 md:gap-x-8">
          {items.map((item, index) => (
            <React.Fragment key={item}>
              <span className="text-2xl md:text-5xl font-bold tracking-tighter text-neutral-800 hover:text-neutral-400 transition-colors cursor-default">
                {item}
              </span>
              {index < items.length - 1 && (
                <span className="text-neutral-300 text-3xl md:text-6xl font-light leading-none">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperatingSystem;
