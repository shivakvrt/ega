"use client";

import { useRouter } from "next/navigation";
import Section from "./Section";
import AnimatedCard from "./AnimatedCard";

export default function ScaleBusinessFasterSection() {
  const router = useRouter();

  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <AnimatedCard animationType="fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="text-red-600">Scale your business faster</span><br />
            <span className="text-gray-900">by fixing the People, Processes, and Strategy holding you back.</span>
          </h2>
        </AnimatedCard>
        <AnimatedCard animationType="fadeIn" delay={100}>
          <p className="text-center text-lg text-gray-700 mb-8">
            VRT Management Group helps USA-focused SMB owners/CEOs turn "stuck" into clear priorities, strong execution, and predictable profit without guessing what to do next.
          </p>
        </AnimatedCard>
        <div className="space-y-4 mb-8">
          <AnimatedCard animationType="fadeIn" delay={200}>
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4 flex items-center gap-4 hover:bg-red-100 hover:border-red-400 transition-all duration-300 hover:shadow-md group">
              <svg className="w-6 h-6 text-red-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <span className="text-gray-700 font-semibold">Online EGA™ Cohort</span>
                <span className="text-gray-700 block text-sm mt-1">Start Date: March 19</span>
              </div>
            </div>
          </AnimatedCard>
          <AnimatedCard animationType="fadeIn" delay={250}>
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4 flex items-center gap-4 hover:bg-red-100 hover:border-red-400 transition-all duration-300 hover:shadow-md group">
              <svg className="w-6 h-6 text-red-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <span className="text-gray-700 font-semibold">In-Person EGA™ Cohort (Premium Immersive)</span>
                <span className="text-gray-700 block text-sm mt-1">Start Dates: April 14–15</span>
              </div>
            </div>
          </AnimatedCard>
          <AnimatedCard animationType="fadeIn" delay={300}>
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4 flex items-center gap-4 hover:bg-red-100 hover:border-red-400 transition-all duration-300 hover:shadow-md group">
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">
                Do you want to scale your business through EGA? <span className="text-red-600 font-semibold cursor-pointer hover:underline transition-all duration-300">Check Eligibility</span>
              </span>
            </div>
          </AnimatedCard>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <AnimatedCard animationType="scaleIn" delay={400}>
            <button
              onClick={() => {
                localStorage.setItem('selectedCohortType', 'online');
                router.push('/get-started?type=online');
              }}
              className="ripple bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              Click Here
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </AnimatedCard>
          <AnimatedCard animationType="scaleIn" delay={500}>
            <button
              onClick={() => {
                document.getElementById('phase-1-overview')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="ripple bg-white border-2 border-gray-300 hover:border-red-500 text-gray-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              See program content
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </AnimatedCard>
        </div>
      </div>
    </Section>
  );
}

