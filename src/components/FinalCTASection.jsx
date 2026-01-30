"use client";

import { useRouter } from "next/navigation";
import Section from "./Section";

export default function FinalCTASection() {
  const router = useRouter();

  return (
    <Section bgColor="bg-red-600" textColor="text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Final Call to Action</h2>
      <p className="text-2xl md:text-3xl font-semibold mb-6">
        Growth Is No Longer About Working Harder • It's About Working Differently
      </p>
      <p className="text-lg mb-8 text-red-100">
        If your business has outgrown your current way of operating, <strong>EGA™</strong> was built for this moment.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => {
            localStorage.setItem('selectedCohortType', 'online');
            router.push('/get-started?type=online');
          }}
          className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-colors shadow-lg text-lg cursor-pointer"
        >
          Join Online EGA™ Cohort • Starts March 19
        </button>
        <button
          onClick={() => {
            localStorage.setItem('selectedCohortType', 'in-person');
            router.push('/get-started?type=in-person');
          }}
          className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-colors text-lg cursor-pointer"
        >
          Apply for In-Person EGA™ Cohort • Starts April 14-15
        </button>
      </div>
    </Section>
  );
}

