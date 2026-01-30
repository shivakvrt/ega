import Section from "./Section";
import AnimatedCard from "./AnimatedCard";
import FAQItem from "./FAQItem";

export default function FAQSSection() {
  const faqs = [
    {
      question: "Is the strategy call really complementary?",
      answer: "Yes. It's a working session designed to deliver clarity and next steps."
    },
    {
      question: "What if I'm not sure what the real problem is?",
      answer: "That's exactly what we diagnose • then we prioritize what matters most."
    },
    {
      question: "Do you work with any industry?",
      answer: "VRT is focused on USA-based SMBs and entrepreneurs. If you're scaling complexity • people, operations, execution • this applies."
    },
    {
      question: "What is included in the workshop?",
      answer: "Comprehensive modules on team building, process optimization, leadership, strategic planning, talent management, and company culture, plus expert assessments and personalized mentorship."
    },
    {
      question: "Will you give me a plan even if I don't join EGA™?",
      answer: "You'll leave the call with clearer priorities and next actions either way."
    }
  ];

  return (
    <Section bgColor="bg-black" textColor="text-white">
      <AnimatedCard animationType="fadeIn">
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">FAQs</h2>
      </AnimatedCard>
      <div className="max-w-3xl mx-auto space-y-0">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </Section>
  );
}

