import Section from "./Section";
import AnimatedCard from "./AnimatedCard";

export default function AssessmentsForGrowthSection() {
  const assessments = [
    {
      title: "TriMetrix HD Assessment",
      description: "You can't fix what you can't clearly see. TriMetrix HD helps create a clear, shared understanding of communication, decision-making, strengths, stress behaviors, and role alignment, leading to better hiring, stronger leadership, and smoother execution."
    },
    {
      title: "Emotional Intelligence Assessment",
      description: "The Emotional Quotient (EQ) Assessment measures how effectively you understand and manage emotions, both yours and others'. It uncovers your self-awareness, empathy, and ability to connect under pressure. By developing these emotional skills, leaders strengthen trust, make better decisions, and build teams that perform with confidence, clarity, and collaboration."
    },
    {
      title: "TARGET Selling Insights",
      description: "The Target Selling Insights (TSI) Assessment helps you understand how well you know and use the strategies behind successful selling. It shows where your strengths and gaps are, so leaders and organizations can coach better, build stronger sales teams, and achieve greater results."
    },
    {
      title: "Stages of Growth Assessment",
      description: "Identifies your current business growth stage and its hidden challenges, so you can focus on solving the right problems at the right time with the right leadership approach."
    }
  ];

  return (
    <Section bgColor="bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedCard animationType="fadeIn">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-center text-gray-900">Assessments for Your Growth</h2>
        </AnimatedCard>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {assessments.map((assessment, index) => (
            <AnimatedCard key={index} animationType="fadeIn" delay={(index + 1) * 100}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-red-400 hover:-translate-y-1 cursor-pointer group h-full">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-gray-900 group-hover:text-red-600 transition-colors">
                  {assessment.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  {assessment.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </Section>
  );
}

