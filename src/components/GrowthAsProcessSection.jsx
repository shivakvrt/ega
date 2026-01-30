import Section from "./Section";
import AnimatedCard from "./AnimatedCard";

export default function GrowthAsProcessSection() {
  const items = [
    { title: "Clear priorities", desc: "What matters now" },
    { title: "Aligned execution", desc: "Who owns what" },
    { title: "Consistent operating rhythms", desc: "How results happen every week" },
    { title: "Measurable progress", desc: "Scorecards, accountability, follow-through" }
  ];

  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <AnimatedCard animationType="fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Growth isn't a personality trait.<br />
            <span className="text-red-600">It's a process.</span>
          </h2>
        </AnimatedCard>
        <AnimatedCard animationType="fadeIn" delay={100}>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Growth As A Process is the core of EGA™: when you install the right process, growth becomes repeatable not dependent on heroic effort, luck, or the CEO doing everything.
          </p>
        </AnimatedCard>
        <AnimatedCard animationType="fadeIn" delay={200}>
          <h3 className="text-2xl font-bold mb-8 text-center">What that means:</h3>
        </AnimatedCard>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <AnimatedCard key={index} animationType="scaleIn" delay={index * 100 + 300}>
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-red-500 hover:shadow-xl transition-all cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </Section>
  );
}

