import Section from "./Section";
import AnimatedCard from "./AnimatedCard";
import { StarIcon } from "./Icons";

export default function TestimonialsSection() {
  const testimonials = [
    {
      stars: 4,
      quote: "The ability to ask powerful questions... transformed me as a leader.",
      name: "Melissa Uribe Gil",
      title: "EVP, Costex Tractor Parts",
      bgClass: "bg-white"
    },
    {
      stars: 5,
      quote: "Our business grew by 130%, leadership team is aligned, clarity and vision like never before.",
      name: "Francesco Pagano",
      title: "President, Interpreters and Translators, Inc.",
      bgClass: "bg-white"
    },
    {
      stars: 5,
      quote: "Raj taught me how to profile the 'WHY' behind our actions using data... goes beyond theories.",
      name: "Lara Cattaneo",
      title: "Clinical Psychologist",
      bgClass: "bg-white"
    }
  ];

  return (
    <Section>
      <AnimatedCard animationType="fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What leaders say after working with Rajesh</h2>
      </AnimatedCard>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <AnimatedCard key={index} animationType="fadeIn" delay={(index + 1) * 100}>
            <div className={`glass ${testimonial.bgClass} rounded-2xl p-8 shadow-lg hover:shadow-glow border border-gray-200 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 ${testimonial.bgClass.includes('gradient') ? 'text-white' : ''}`}>
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400" filled />
                ))}
              </div>
              <p className={`${testimonial.bgClass.includes('gradient') ? 'text-white' : 'text-gray-700'} mb-6 text-lg leading-relaxed flex-1`}>
                "{testimonial.quote}"
              </p>
              <p className={`text-sm font-semibold ${testimonial.bgClass.includes('gradient') ? 'text-white' : 'text-gray-900'}`}>
                {testimonial.name}
              </p>
              <p className={`text-sm ${testimonial.bgClass.includes('gradient') ? 'text-red-200' : 'text-gray-600'}`}>
                {testimonial.title}
              </p>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  );
}

