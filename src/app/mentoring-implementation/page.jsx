"use client";

import { useRouter } from "next/navigation";
import AnimatedCard from "@/components/AnimatedCard";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyHeader from "@/components/StickyHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollIndicator from "@/components/ScrollIndicator";
import { ToolsIcon, UsersIcon, LightningIcon, TargetIcon } from "@/components/Icons";

export default function MentoringImplementationPage() {
  const router = useRouter();
  const assessments = [
    {
      category: "Leadership & Personal Assessments",
      items: [
        "TriMetrix HD (Behaviors, Driving Forces, Competencies, Acumen)",
        "Emotional Intelligence Assessment",
        "TARGET Selling Insights",
        "Team Dynamics Report",
      ],
    },
    {
      category: "Business & Growth Diagnostics",
      items: [
        "27 Business Growth Challenges Assessment",
        "Stage-Specific Non-Negotiables (Stages 1-7)",
        "Builder vs Protector Ratio",
      ],
    },
    {
      category: "Custom Deliverables",
      items: [
        "Personalized 3D Job Description (3D-JD)",
        "Personal Development Plan (PDP)",
        "Project Charters (6–12 month initiatives)",
        "Strategy Execution Calendar",
        "KPIs, owners, timelines, and communication plans",
      ],
    },
  ];

  const commitments = [
    "Daily & Weekly Reflection",
    "Quarterly priorities review",
    "Project charter updates",
    "Team alignment discussions",
    "Article summaries (HBR, leadership, strategy)",
    "Preparation of questions for mentoring sessions",
  ];

  const outcomes = [
    "Faster, clearer decision-making",
    "Consistent execution across teams",
    "Reduced owner dependence",
    "Stronger leadership bench",
    "Higher predictability and resilience",
    "$1M+ in measurable valuation impact",
  ];

  return (
    <div className="min-h-screen bg-white page-transition">
      <StickyHeader />
      <ScrollIndicator />
      <div className="pt-16 md:pt-20">
        <Breadcrumbs />
      {/* Header */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            In-Person: Mentoring & Implementation
          </h1>
          <p className="text-xl text-red-100">10 Months of Growth Alliance</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedCard animationType="fadeIn">
            <p className="text-lg mb-6 text-gray-700">
              This is where EGA™ becomes a true growth alliance. For the next <strong>10 months</strong>, participants will engage in:
            </p>
          </AnimatedCard>
          <AnimatedCard animationType="slideInLeft" delay={100}>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6 text-lg">
              <li><strong>Monthly 3-Hour Live Mentoring Sessions</strong></li>
              <li>Conducted on Zoom</li>
              <li>Combined Online + In-Person cohort members</li>
              <li>Real implementation reviews</li>
              <li>Peer learning and strategic problem-solving</li>
              <li>Accountability and course correction</li>
            </ul>
          </AnimatedCard>
          <AnimatedCard animationType="scaleIn" delay={200}>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-2xl">
              <p className="text-lg font-semibold text-red-900">
                This phase ensures learning turns into <strong>execution</strong>, and execution turns into <strong>measurable results</strong>.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Assessments & Tools */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedCard animationType="fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Assessments, Tools & Resources Included</h2>
          </AnimatedCard>
          <AnimatedCard animationType="fadeIn" delay={100}>
            <p className="text-lg mb-8 text-center text-gray-700">
              Participants receive a comprehensive growth toolkit, including:
            </p>
          </AnimatedCard>
          <div className="grid md:grid-cols-3 gap-8">
            {assessments.map((category, idx) => (
              <AnimatedCard key={idx} animationType="fadeIn" delay={idx * 100 + 200}>
                <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col hover:-translate-y-1 group">
                  <h3 className="text-xl font-bold mb-4 text-red-800">{category.category}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedCard animationType="fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Weekly & Monthly Participant Commitments</h2>
          </AnimatedCard>
          <AnimatedCard animationType="fadeIn" delay={100}>
            <p className="text-lg mb-6 text-center text-gray-700 font-semibold">
              Participants are expected to <strong className="text-red-600">implement</strong>, not just attend.
            </p>
          </AnimatedCard>
          <AnimatedCard animationType="scaleIn" delay={200}>
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-red-800">Ongoing Expectations:</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                {commitments.map((commitment, idx) => (
                  <li key={idx}>{commitment}</li>
                ))}
              </ul>
              <p className="mt-6 text-red-900 font-semibold italic text-lg">
                This is how results compound.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-4 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-6xl mx-auto">
          <AnimatedCard animationType="fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">The Result: Real Business Value</h2>
          </AnimatedCard>
          <AnimatedCard animationType="fadeIn" delay={100}>
            <p className="text-lg mb-8 text-center text-gray-700 max-w-3xl mx-auto">
              When leaders learn and implement <strong>correctly</strong>, EGA™ is designed to help businesses achieve:
            </p>
          </AnimatedCard>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <AnimatedCard animationType="slideInLeft" delay={200}>
              <div className="bg-white border-2 border-red-200 rounded-2xl p-8 shadow-lg h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-red-800">Key Outcomes</h3>
                <ul className="space-y-3 text-gray-700 text-lg">
                  {outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
            <AnimatedCard animationType="slideInRight" delay={200}>
              <div className="bg-white border-2 border-red-200 rounded-2xl p-8 shadow-lg h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-red-800">Value is created through:</h3>
                <ul className="space-y-4 text-gray-700 text-lg">
                  <li className="flex items-center">
                    <ToolsIcon className="w-6 h-6 mr-3 text-red-600" />
                    <span><strong>Systems</strong></span>
                  </li>
                  <li className="flex items-center">
                    <UsersIcon className="w-6 h-6 mr-3 text-red-600" />
                    <span><strong>Leadership depth</strong></span>
                  </li>
                  <li className="flex items-center">
                    <LightningIcon className="w-6 h-6 mr-3 text-red-600" />
                    <span><strong>Execution discipline</strong></span>
                  </li>
                  <li className="flex items-center">
                    <TargetIcon className="w-6 h-6 mr-3 text-red-600" />
                    <span><strong>Strategic clarity</strong></span>
                  </li>
                </ul>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedCard animationType="fadeIn">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-lg mb-6 text-red-100">
                Join EGA™ and start your 12-month growth journey today.
              </p>
            </div>
          </AnimatedCard>
          
          <AnimatedCard animationType="scaleIn" delay={100}>
            <div className="flex justify-center items-center">
              <button
                onClick={() => {
                  localStorage.setItem('selectedCohortType', 'phase2');
                  router.push('/get-started?type=phase2');
                }}
                className="ripple inline-block bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
              >
                Contact Us to Get Started
              </button>
            </div>
          </AnimatedCard>
        </div>
      </section>
      </div>
      <Footer />
      <ScrollToTop color="red" />
    </div>
  );
}

