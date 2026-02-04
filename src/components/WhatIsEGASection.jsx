"use client";

import Section from "./Section";
import AnimatedCard from "./AnimatedCard";
import AnimatedCounter from "./AnimatedCounter";

export default function WhatIsEGASection() {
  const metrics = [
    { 
      number: "39+", 
      numberType: "years",
      desc: "of leadership and business experience",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      number: "1,420+", 
      numberType: "entrepreneurs",
      desc: "Coached and mentored to success",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    { 
      number: "$520M+", 
      numberType: "dollars",
      desc: "Millions in economic value generated for clients",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <Section bgColor="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <AnimatedCard animationType="fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            What is <span className="text-red-600">Entrepreneur Growth Alliance™</span>?
          </h2>
        </AnimatedCard>
        <AnimatedCard animationType="fadeIn" delay={100}>
          <p className="text-center text-lg text-gray-700 mb-12">
            EGA is a mentorship program built to help entrepreneurs scale faster by turning strategy into execution through proven processes and hands-on coaching.
          </p>
        </AnimatedCard>
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((item, index) => (
            <AnimatedCard key={index} animationType="fadeIn" delay={index * 100 + 200}>
              <div className="text-center group cursor-pointer bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100 hover:border-red-200">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <p className="text-4xl md:text-5xl font-bold mb-2">
                  <span className="text-red-600">
                    <AnimatedCounter 
                      end={item.number} 
                      duration={2500}
                    />
                  </span>
                </p>
                <p className="text-gray-600 font-medium">{item.desc}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </Section>
  );
}

