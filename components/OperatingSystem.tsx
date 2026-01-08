
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
    <section id="os" className="px-6 md:px-12 py-32 border-t border-[#2E2E5C]/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
        {/* Sticky Label */}
        <div className="lg:sticky lg:top-12 h-fit">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-50">Operating System</span>
        </div>

        {/* OS Items */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-6">
          {items.map((item, index) => (
            <React.Fragment key={item}>
              <span className="font-mono text-lg md:text-xl font-medium text-[#2E2E5C] hover:opacity-50 transition-opacity cursor-default uppercase tracking-tight">
                {item}
              </span>
              {index < items.length - 1 && (
                <span className="text-[#2E2E5C]/20 font-mono text-xl">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperatingSystem;
