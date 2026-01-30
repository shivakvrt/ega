import Section from "./Section";
import AnimatedCard from "./AnimatedCard";

export default function RealProblemSection() {
  return (
    <Section bgColor="bg-gray-50" maxWidth="max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Why EGA™ Exists (The Real Problem)</h2>
      <p className="text-lg mb-6 text-gray-700">
        Most SMB owners don't struggle because they lack intelligence, ambition, or effort.
      </p>
      <p className="text-lg mb-4 font-semibold text-gray-900">They struggle because:</p>
      <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6 text-lg">
        <li>Growth creates complexity faster than systems evolve.</li>
        <li>Execution depends too heavily on the founder.</li>
        <li>Teams are busy, but outcomes are inconsistent.</li>
        <li>Strategy exists, but follow-through breaks down.</li>
        <li>AI and market volatility demand faster, better decisions.</li>
      </ul>
      <AnimatedCard animationType="fadeIn" delay={400}>
        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-2xl shadow-sm">
          <p className="text-xl font-bold text-red-900 mb-2">
            This is not a motivation problem. It is an operating-system problem.
          </p>
          <p className="text-lg text-red-800">
            EGA™ was designed to install that operating system.
          </p>
        </div>
      </AnimatedCard>
    </Section>
  );
}

