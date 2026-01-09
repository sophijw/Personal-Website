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
    <section id="os" className="px-6 md:px-12 py-32 border-t border-[#403E3F]/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
        {/* Sticky Label */}
        <div className="lg:sticky lg:top-12 h-fit">
          <span className="font-mono text-xl md:text-2xl uppercase tracking-tight text-[#EA6800]">How I operate</span>
        </div>

        {/* OS Items */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-8">
          {items.map((item, index) => (
            <React.Fragment key={item}>
              <span className="font-mono text-xl md:text-3xl font-medium text-[#403E3F] hover:text-[#0034D3] transition-colors cursor-default uppercase tracking-tighter">
                {item}
              </span>
              {index < items.length - 1 && (
                <span className="text-[#EA6800] font-mono text-2xl opacity-40">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperatingSystem;