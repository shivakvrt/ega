"use client";

import { useState } from "react";

export default function FAQItem({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 px-4 flex justify-between items-center text-left hover:bg-gray-900 transition-all duration-300 cursor-pointer group"
      >
        <span className="text-lg font-medium group-hover:text-white transition-colors duration-300">{question}</span>
        <span className="text-2xl text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">{isOpen ? '^' : 'v'}</span>
      </button>
      {isOpen && answer && (
        <div className="px-4 pb-6 text-gray-300">
          {answer}
        </div>
      )}
    </div>
  );
}

