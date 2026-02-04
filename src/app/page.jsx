"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import EntryPaths from "@/components/EntryPaths";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import AnimatedCard from "@/components/AnimatedCard";
import RealProblemSection from "@/components/RealProblemSection";
import ProgramOverviewSection from "@/components/ProgramOverviewSection";
import WhatSuccessLooksLikeSection from "@/components/WhatSuccessLooksLikeSection";
import GrowthAsProcessSection from "@/components/GrowthAsProcessSection";
import ScaleBusinessFasterSection from "@/components/ScaleBusinessFasterSection";
import EntrepreneurEdgeSection from "@/components/EntrepreneurEdgeSection";
import WhatIsEGASection from "@/components/WhatIsEGASection";
import Banner2026Section from "@/components/Banner2026Section";
import CompaniesHelpedSection from "@/components/CompaniesHelpedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSSection from "@/components/FAQSSection";
import FinalCTASection from "@/components/FinalCTASection";
import PaymentSection from "@/components/PaymentSection";
import ScrollToTop from "@/components/ScrollToTop";
import StickyHeader from "@/components/StickyHeader";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-white page-transition">
      <StickyHeader />
      <ScrollIndicator />
      <div className="pt-16 md:pt-20">
      <HeroSection />
      <ValueProposition />
      <RealProblemSection />
      <ProgramOverviewSection />
      <EntryPaths />
      <PaymentSection />
      <WhatSuccessLooksLikeSection />
      <GrowthAsProcessSection />
      <ScaleBusinessFasterSection />
      <EntrepreneurEdgeSection />

      {/* The EGA Growth Journey */}
      <Section id="growth-journey">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">The EGA™ Growth Journey</h2>
        <p className="text-center text-xl text-gray-600 mb-12 font-medium">
          How the Program Works
        </p>
        <AnimatedCard animationType="fadeIn" delay={200}>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border-2 border-gray-200">
            <p className="text-xl text-center text-gray-800 font-semibold mb-8">
              EGA™ is intentionally designed in <strong className="text-red-600 text-2xl">two phases</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedCard animationType="scaleIn" delay={300}>
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <div className="text-4xl font-bold text-red-600 mb-2">Online Cohort</div>
                  <h3 className="text-xl font-bold mb-3">Growth System Installation</h3>
                  <p className="text-gray-700 mb-4">Core Learning & Alignment</p>
                  <p className="text-sm text-gray-600">10 Weeks (Online) or 4 Days (In-Person)</p>
                  <Link href="/growth-system-installation" className="inline-block mt-4 text-red-600 font-semibold hover:underline cursor-pointer">
                    Learn More →
                  </Link>
                </div>
              </AnimatedCard>
              <AnimatedCard animationType="scaleIn" delay={400}>
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <div className="text-4xl font-bold text-red-600 mb-2">In-Person</div>
                  <h3 className="text-xl font-bold mb-3">Mentoring & Implementation</h3>
                  <p className="text-gray-700 mb-4">10 Months of Growth Alliance</p>
                  <p className="text-sm text-gray-600">Monthly sessions, peer learning, accountability</p>
                  <Link href="/mentoring-implementation" className="inline-block mt-4 text-red-600 font-semibold hover:underline cursor-pointer">
                    Learn More →
                  </Link>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </AnimatedCard>
      </Section>

      {/* Online Cohort Overview */}
      <Section id="phase-1-overview" bgColor="bg-gray-50">
        <AnimatedCard animationType="fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">Online Cohort: Growth System Installation</h2>
        </AnimatedCard>
        <AnimatedCard animationType="fadeIn" delay={100}>
          <p className="text-center text-lg text-gray-600 mb-8 font-medium">Core Learning & Alignment</p>
        </AnimatedCard>
        <AnimatedCard animationType="fadeIn" delay={200}>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto text-gray-700 leading-relaxed">
            This phase installs the <strong className="text-red-600">foundational leadership and execution systems</strong> every scaling business needs.
          </p>
        </AnimatedCard>
        <AnimatedCard animationType="fadeIn" delay={300}>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Core Focus Areas (Top 10 Models)</h3>
            <p className="text-gray-700 mb-2 text-lg">These are not academic frameworks.</p>
            <p className="text-gray-700 font-semibold text-lg">They are <strong className="text-red-600">practical operating tools</strong> applied directly to your business.</p>
          </div>
        </AnimatedCard>
        
        {/* Quick Preview of 10 Models */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { num: 1, title: "Change or Die • Learn | Unlearn | Relearn" },
            { num: 2, title: "Stages of Growth (SOG)" },
            { num: 3, title: "Vision, Purpose, Values, Accountabilities & Norms" },
            { num: 4, title: "Trust as an Execution Multiplier" },
            { num: 5, title: "Dynamic Communication & TriMetrix HD" },
            { num: 6, title: "One-Year & Three-Year Strategic Planning" },
            { num: 7, title: "SWOT with Strategic Anchors" },
            { num: 8, title: "GRPI (Goals, Roles, Process, Interpersonal Relations)" },
            { num: 9, title: "Execution Cadence & Strategy Execution Calendar" },
            { num: 10, title: "Reflection, Emotional Intelligence & Leadership Discipline" },
          ].map((module, index) => (
            <AnimatedCard key={module.num} animationType="fadeIn" delay={100 + (index * 50)}>
              <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start space-x-4 hover:shadow-md transition-shadow duration-200">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm font-bold shadow-sm">
                  {module.num}
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed pt-1">{module.title}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/growth-system-installation"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-lg cursor-pointer"
          >
            View All 10 Core Models →
          </Link>
        </div>
      </Section>

      {/* In-Person Overview */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">In-Person: Mentoring & Implementation</h2>
        <p className="text-center text-lg text-gray-600 mb-8 font-medium">10 Months</p>
        <p className="text-lg mb-6 text-center max-w-3xl mx-auto text-gray-700 leading-relaxed">
          This is where EGA™ becomes a true growth alliance. For the next <strong className="text-red-600">10 months</strong>, participants will engage in:
        </p>
        <AnimatedCard animationType="fadeIn" delay={300}>
          <div className="bg-red-50 border-l-4 border-red-600 p-8 rounded-2xl mb-8 max-w-3xl mx-auto shadow-md">
            <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg md:text-xl">
              <li><strong className="text-gray-900">Monthly 3-Hour Live Mentoring Sessions</strong></li>
              <li>Conducted on Zoom</li>
              <li>Combined Online + In-Person cohort members</li>
              <li>Real implementation reviews</li>
              <li>Peer learning and strategic problem-solving</li>
              <li>Accountability and course correction</li>
            </ul>
          </div>
        </AnimatedCard>
        <AnimatedCard animationType="fadeIn" delay={400}>
          <p className="text-lg text-center font-semibold max-w-3xl mx-auto text-gray-800 leading-relaxed">
            This phase ensures learning turns into <strong className="text-red-600">execution</strong>, and execution turns into <strong className="text-red-600">measurable results</strong>.
          </p>
        </AnimatedCard>
        <AnimatedCard animationType="fadeIn" delay={400}>
          <div className="text-center mt-8">
            <Link
              href="/mentoring-implementation"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-lg cursor-pointer"
            >
              Learn More About In-Person →
            </Link>
          </div>
        </AnimatedCard>
      </Section>

      {/* Assessments & Tools Section */}
      <Section bgColor="bg-gradient-to-br from-red-50 to-red-100">
        <AnimatedCard animationType="fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">Assessments, Tools & Resources Included</h2>
        </AnimatedCard>
        <AnimatedCard animationType="fadeIn" delay={100}>
          <p className="text-center text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Participants receive a comprehensive growth toolkit, including:
          </p>
        </AnimatedCard>
        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedCard animationType="fadeIn" delay={200}>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-red-200 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-red-800">Leadership & Personal Assessments</h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span>TriMetrix HD (Behaviors, Driving Forces, Competencies, Acumen)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span>Emotional Intelligence Assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span>TARGET Selling Insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span>Team Dynamics Report</span>
                </li>
              </ul>
            </div>
          </AnimatedCard>
          <AnimatedCard animationType="fadeIn" delay={300}>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-red-200 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-red-800">Business & Growth Diagnostics</h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span>27 Business Growth Challenges Assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span>Stage-Specific Non-Negotiables (Stages 1-7)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span>Builder vs Protector Ratio</span>
                </li>
              </ul>
            </div>
          </AnimatedCard>
          <AnimatedCard animationType="fadeIn" delay={400}>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-red-200 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-red-800">Custom Deliverables</h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span>Personalized 3D Job Description (3D-JD)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span>Personal Development Plan (PDP)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span>Project Charters (6–12 month initiatives)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span>Strategy Execution Calendar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span>KPIs, owners, timelines, and communication plans</span>
                </li>
              </ul>
            </div>
          </AnimatedCard>
        </div>
      </Section>

      {/* Participant Commitments */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">Weekly & Monthly Participant Commitments</h2>
        <p className="text-xl mb-6 text-center text-gray-700 font-semibold">
          Participants are expected to <strong className="text-red-600">implement</strong>, not just attend.
        </p>
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8 shadow-md animate-fadeIn">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Ongoing Expectations:</h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
            <li>Daily & Weekly Reflection</li>
            <li>Quarterly priorities review</li>
            <li>Project charter updates</li>
            <li>Team alignment discussions</li>
            <li>Article summaries (HBR, leadership, strategy)</li>
            <li>Preparation of questions for mentoring sessions</li>
          </ul>
          <p className="mt-6 text-gray-800 font-semibold italic text-lg">
            This is how results compound.
          </p>
        </div>
      </Section>

      {/* The Result Section */}
      <Section bgColor="bg-gradient-to-br from-green-50 to-red-50">
        <AnimatedCard animationType="fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">The Result: Real Business Value</h2>
        </AnimatedCard>
        <AnimatedCard animationType="fadeIn" delay={100}>
          <p className="text-lg mb-8 text-center text-gray-700 max-w-3xl mx-auto leading-relaxed">
            When leaders learn and implement <strong>correctly</strong>, EGA™ is designed to help businesses achieve:
          </p>
        </AnimatedCard>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <AnimatedCard animationType="slideInLeft" delay={200}>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-green-200 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-green-800">Key Outcomes</h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span>Faster, clearer decision-making</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span>Consistent execution across teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span>Reduced owner dependence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span>Stronger leadership bench</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span>Higher predictability and resilience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span><strong>$1M+ in measurable valuation impact</strong></span>
                </li>
              </ul>
            </div>
          </AnimatedCard>
          <AnimatedCard animationType="slideInRight" delay={200}>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-red-200 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-red-800">Value is created through:</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-center">
                  <span className="text-3xl mr-4">🔧</span>
                  <span><strong>Systems</strong></span>
                </li>
                <li className="flex items-center">
                  <span className="text-3xl mr-4">👥</span>
                  <span><strong>Leadership depth</strong></span>
                </li>
                <li className="flex items-center">
                  <span className="text-3xl mr-4">⚡</span>
                  <span><strong>Execution discipline</strong></span>
                </li>
                <li className="flex items-center">
                  <span className="text-3xl mr-4">🎯</span>
                  <span><strong>Strategic clarity</strong></span>
                </li>
              </ul>
            </div>
          </AnimatedCard>
        </div>
      </Section>

      {/* Who EGA Is For */}
      <Section>
        <AnimatedCard animationType="fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Who EGA™ Is For</h2>
        </AnimatedCard>
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedCard animationType="slideInLeft" delay={100}>
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 shadow-md h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-green-800">EGA™ Is Built For:</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>SMB Owners, Founders, CEOs</li>
                <li>Entrepreneur-led companies</li>
                <li>Leaders ready to install systems</li>
                <li>Businesses serious about execution and value creation</li>
              </ul>
            </div>
          </AnimatedCard>
          <AnimatedCard animationType="slideInRight" delay={100}>
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 shadow-md h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-red-800">EGA™ Is Not For:</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Passive learners</li>
                <li>Shortcut seekers</li>
                <li>Leaders unwilling to change how they operate</li>
              </ul>
            </div>
          </AnimatedCard>
        </div>
      </Section>

      {/* 2030 Vision */}
      <Section bgColor="bg-gradient-to-br from-red-600 to-red-800" textColor="text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our 2030 Vision</h2>
        <div className="space-y-6 text-lg max-w-3xl mx-auto">
          <p>
            The <strong>VRT Entrepreneur Growth Alliance (EGA)</strong> exists to help entrepreneur-led companies grow with clarity, discipline, and confidence • so the business becomes less dependent on the owner and more capable of scaling.
          </p>
          <p>
            Through the <strong>VRT EGA® Growth Journey</strong>, members install the leadership, operating systems, and execution cadence required for sustained, profitable growth.
          </p>
          <AnimatedCard animationType="fadeIn" delay={200}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
              <p className="text-2xl font-bold text-center mb-2">
                By <strong>2030, EGA™</strong> will partner with <strong className="text-3xl">1,000</strong> entrepreneurs and SMBs
              </p>
              <p className="text-xl text-center">
                to build scalable, resilient, high-value companies • creating <strong>$1M+</strong> in measurable financial value per business and unlocking <strong>$1B+</strong> in total value.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </Section>

      <WhatIsEGASection />
      <Banner2026Section />
      <CompaniesHelpedSection />

      {/* How to Get Started */}
      <Section bgColor="bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">How to Get Started</h2>
        <AnimatedCard animationType="fadeIn" delay={200}>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
            <ol className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="font-bold text-red-600 mr-3">1.</span>
                <span>Choose <strong>Online (March 19, 2026)</strong> or <strong>In-Person (April 15, 2026)</strong></span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-600 mr-3">2.</span>
                <span>Register or apply via email: <a href="mailto:coachrajesh@vrt9.com" className="text-red-600 hover:underline font-semibold cursor-pointer">coachrajesh@vrt9.com</a></span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-600 mr-3">3.</span>
                <span>Complete diagnostics & onboarding</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-600 mr-3">4.</span>
                <span>Begin the <strong>12-month EGA™ Growth Journey</strong></span>
              </li>
            </ol>
          </div>
        </AnimatedCard>
      </Section>

      <TestimonialsSection />
      <FAQSSection />
      <PaymentSection />
      <FinalCTASection />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
