"use client";

import { useRouter } from "next/navigation";
import Section from "./Section";
import AnimatedCard from "./AnimatedCard";

export default function Banner2026Section() {
  const router = useRouter();

  return (
    <Section bgColor="bg-gradient-to-r from-pink-100 via-purple-100 to-red-100">
      <div className="max-w-4xl mx-auto text-center mt-12">
        <AnimatedCard animationType="fadeIn">
          <p className="text-red-600 font-semibold mb-4">Limited Spots Available - Register Now!</p>
        </AnimatedCard>
        <AnimatedCard animationType="fadeIn" delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-red-600">Make 2026 the Year of</span><br />
            <span className="text-purple-600">Unstoppable</span><br />
            <span className="text-purple-700">Growth for Your</span> <span className="text-red-600">Business</span>
          </h2>
        </AnimatedCard>
        <AnimatedCard animationType="fadeIn" delay={200}>
          <p className="text-gray-700 mb-8 text-lg">
            Join a select group of SMB leaders committed to scaling their businesses with proven strategies and expert mentorship - starting <span className="text-red-600 font-semibold">Cohort 2601 on 19th Feb 2026!</span>
          </p>
        </AnimatedCard>
        <AnimatedCard animationType="scaleIn" delay={300}>
          <button
            onClick={() => {
              localStorage.setItem('selectedCohortType', 'online');
              router.push('/get-started?type=online');
            }}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-xl transition-colors shadow-xl text-lg cursor-pointer"
          >
            Secure Your Spot Now
          </button>
        </AnimatedCard>
      </div>
    </Section>
  );
}

