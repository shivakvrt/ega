"use client";

import Image from "next/image";
import { useState } from "react";
import Section from "./Section";
import AnimatedCard from "./AnimatedCard";
import SkeletonLoader from "./SkeletonLoader";

export default function WhatSuccessLooksLikeSection() {
  const [image1Loading, setImage1Loading] = useState(true);
  const [image2Loading, setImage2Loading] = useState(true);

  const successItems = [
    "A quick diagnosis of where you're stuck (People / Process / Strategy).",
    "The #1 constraint slowing growth right now.",
    "What to fix first (and what to ignore for now).",
    "A practical execution path for the next 30–90 days.",
    "Whether EGA™ mentorship is the right fit for your goals."
  ];

  return (
    <Section bgColor="bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <AnimatedCard animationType="fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What Success Looks Like at <span className="text-red-600">Entrepreneurs Growth Alliance™</span>
          </h2>
        </AnimatedCard>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <AnimatedCard animationType="slideInLeft">
            <div className="space-y-4 h-full flex flex-col">
              {successItems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-red-300 hover:-translate-y-1 cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-lg flex-1 group-hover:text-gray-900 transition-colors">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedCard>
          <AnimatedCard animationType="slideInRight">
            <div className="space-y-4 h-full flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex-1 min-h-[200px] group">
                {image1Loading && (
                  <SkeletonLoader type="image" className="absolute inset-0 z-10" />
                )}
                <Image
                  src="/business-speaker-giving-presentation-to.webp"
                  alt="Business Meeting"
                  fill
                  className={`object-cover transition-all duration-500 ${
                    image1Loading ? "blur-sm scale-105" : "blur-0 scale-100"
                  } group-hover:scale-110`}
                  onLoad={() => setImage1Loading(false)}
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex-1 min-h-[200px] group">
                {image2Loading && (
                  <SkeletonLoader type="image" className="absolute inset-0 z-10" />
                )}
                <Image
                  src="/professional-business-presentation-1.webp"
                  alt="Professional Business Presentation"
                  fill
                  className={`object-cover transition-all duration-500 ${
                    image2Loading ? "blur-sm scale-105" : "blur-0 scale-100"
                  } group-hover:scale-110`}
                  onLoad={() => setImage2Loading(false)}
                />
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </Section>
  );
}

