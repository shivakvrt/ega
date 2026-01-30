import Section from "./Section";
import AnimatedCard from "./AnimatedCard";

export default function ProgramOverviewSection() {
  return (
    <Section>
      <AnimatedCard animationType="fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Program Overview at a Glance</h2>
      </AnimatedCard>
      <div className="grid md:grid-cols-2 gap-8">
        <AnimatedCard animationType="fadeIn" delay={100}>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Program Length</h3>
            <p className="text-3xl font-semibold mb-2 text-gray-900">12 Months</p>
            <p className="text-gray-700">Cohort-Based (Online or In-Person entry)</p>
          </div>
        </AnimatedCard>
        <AnimatedCard animationType="fadeIn" delay={200}>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Core Installation</h3>
            <p className="text-lg mb-2 text-gray-900">
              <strong className="text-2xl">10 Weeks</strong> (Online) OR <strong className="text-2xl">4 Immersive Days</strong> (In-Person)
            </p>
            <p className="text-gray-700">Implementation & Mentoring: 10 Months</p>
          </div>
        </AnimatedCard>
        <AnimatedCard animationType="fadeIn" delay={300}>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Focus</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              <li>Leadership</li>
              <li>Strategy</li>
              <li>Execution</li>
              <li>Value Creation</li>
            </ul>
          </div>
        </AnimatedCard>
        <AnimatedCard animationType="fadeIn" delay={400}>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Outcome</h3>
            <p className="text-2xl font-semibold text-red-600 mb-2">
              $1M+ in measurable business valuation impact
            </p>
            <p className="text-gray-700">Through stronger systems, leadership depth, and execution discipline</p>
          </div>
        </AnimatedCard>
      </div>
    </Section>
  );
}

