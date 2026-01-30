"use client";

import AnimatedCounter from "./AnimatedCounter";

export default function ValueProposition() {
  return (
    <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white py-6 px-4 animate-fadeIn animate-delay-100 shadow-lg">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
          <AnimatedCounter 
            end="$1M+" 
            duration={2000}
            className="inline-block"
          /> in measurable business valuation impact through stronger systems, leadership depth, and execution discipline.
        </p>
      </div>
    </section>
  );
}

