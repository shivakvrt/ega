"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Section from "./Section";
import AnimatedCard from "./AnimatedCard";
import SkeletonLoader from "./SkeletonLoader";
import TrustBadges from "./TrustBadges";

export default function EntrepreneurEdgeSection() {
  const router = useRouter();
  const [imageLoading, setImageLoading] = useState(true);

  const trustBadges = [
    {
      label: "Stanford LBAN",
      tooltip: "Mentor for Stanford LBAN Entrepreneur Workshop since 2018",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      label: "39+ Years",
      tooltip: "39+ years of leadership and business scaling experience",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      label: "1,420+ Clients",
      tooltip: "Personally guided 1,420+ entrepreneurs to success",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      label: "28+ Countries",
      tooltip: "Global reach across 28+ countries worldwide",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      label: "$520M+ Impact",
      tooltip: "Generated over $520 million in measurable business growth",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <Section bgColor="bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimatedCard animationType="slideInLeft">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              {imageLoading && (
                <SkeletonLoader type="image" className="absolute inset-0 w-full h-[600px] z-10" />
              )}
              <Image
                src="/ver1.jpg"
                alt="Rajesh Tedla"
                width={600}
                height={600}
                className={`w-full h-[600px] object-cover transition-all duration-500 ${
                  imageLoading ? "blur-sm scale-105" : "blur-0 scale-100"
                } group-hover:scale-105`}
                priority
                onLoad={() => setImageLoading(false)}
              />
            </div>
          </AnimatedCard>
          <AnimatedCard animationType="slideInRight">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
                Rajesh Tedla
              </h3>
              <p className="text-xl md:text-2xl font-semibold mb-4 text-red-600">
                A Trusted Mentor with 39+ Years of Scaling Businesses
              </p>
              
              {/* Trust Badges */}
              <TrustBadges badges={trustBadges} />
              
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                I'm Rajesh Tedla, Founder and CEO of VRT Management Group, LLC and since 2018 a mentor for the Stanford LBAN Entrepreneur Workshop where I guide growth-focused entrepreneurs from around the world.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                With 39+ years of experience I've dedicated my career to helping business leaders achieve sustainable scalable growth. I've personally guided more than 1,420+ entrepreneurs across 28+ countries through transformative scaling journeys using proven methodologies that have generated over $520 million in measurable business growth.
              </p>
              <button
                onClick={() => {
                  localStorage.setItem('selectedCohortType', 'research');
                  router.push('/get-started?type=research');
                }}
                className="ripple bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
              >
                Book Free 45 Minute Strategy Call
              </button>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </Section>
  );
}

