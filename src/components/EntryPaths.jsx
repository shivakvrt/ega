"use client";

import { useRouter } from "next/navigation";
import EntryPathCard from "./EntryPathCard";
import AnimatedCard from "./AnimatedCard";

export default function EntryPaths() {
  const router = useRouter();

  const handleButtonClick = (type) => {
    // Store cohort type in localStorage and redirect to form page
    localStorage.setItem('selectedCohortType', type);
    router.push(`/get-started?type=${type}`);
  };

  return (
    <section id="register" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <AnimatedCard animationType="fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Choose Your Entry Path into EGA™</h2>
        </AnimatedCard>
        <AnimatedCard animationType="fadeIn" delay={100}>
          <p className="text-center text-lg text-gray-600 mb-12">
            The EGA™ Growth Journey is intentionally designed in <strong>two phases</strong>.
          </p>
        </AnimatedCard>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <AnimatedCard animationType="slideInLeft" delay={200}>
            <EntryPathCard
              type="online"
              title="OPTION 1: Online EGA™ Cohort"
              startDate="Start Date: March 19"
              schedule={{
                title: "Weekly Schedule (First 10 Weeks):",
                time: "11:00 AM – 1:00 PM EST",
                location: "Live on Zoom",
                duration: "3 hours per week"
              }}
              bestFor="Owners who want structured weekly momentum, flexibility, and live interaction without travel."
              borderColor="border-red-200"
              hoverBorderColor="hover:border-red-400"
              bgColor="text-red-600"
              buttonText="Register for Online Cohort"
              buttonColor="bg-red-600"
              buttonHoverColor="hover:bg-red-700"
              emailSubject="Online EGA Cohort Registration"
              onButtonClick={() => handleButtonClick('online')}
            />
          </AnimatedCard>
          <AnimatedCard animationType="slideInRight" delay={200}>
            <EntryPathCard
              type="in-person"
              title="OPTION 2: In-Person EGA™ Cohort (Premium Immersive)"
              startDate="Start Dates: April 14–15"
              schedule={{
                title: "Daily Schedule:",
                time: "9:00 AM – 5:00 PM (Includes lunch & snack breaks)"
              }}
              bestFor="Owners who want deep immersion, faster breakthroughs, and in-room collaboration."
              borderColor="border-red-200"
              hoverBorderColor="hover:border-red-400"
              bgColor="text-red-600"
              buttonText="Apply for In-Person Cohort"
              buttonColor="bg-red-600"
              buttonHoverColor="hover:bg-red-700"
              emailSubject="In-Person EGA Cohort Application"
              onButtonClick={() => handleButtonClick('in-person')}
            />
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
