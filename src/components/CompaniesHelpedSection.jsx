import Section from "./Section";
import AnimatedCard from "./AnimatedCard";

export default function CompaniesHelpedSection() {
  return (
    <Section>
      <AnimatedCard animationType="fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-red-900">Companies We've Helped</h2>
      </AnimatedCard>
      <AnimatedCard animationType="fadeIn" delay={100}>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          We've empowered entrepreneurs and small business owners worldwide to scale their businesses with our innovative services and proven growth strategies.
        </p>
      </AnimatedCard>
      <div className="overflow-hidden bg-gray-50 py-8">
        <div className="flex animate-scroll">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex flex-shrink-0">
              {/* 001 */}
              <div className="border-l border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <img
                  src="/001.png"
                  alt="Company logo 001"
                  className="h-16 md:h-20 object-contain"
                />
              </div>
              
              {/* 002 */}
              <div className="border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <img
                  src="/002.png"
                  alt="Company logo 002"
                  className="h-16 md:h-20 object-contain"
                />
              </div>
              
              {/* 004 */}
              <div className="border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <img
                  src="/004.png"
                  alt="Company logo 004"
                  className="h-16 md:h-20 object-contain"
                />
              </div>
              
              {/* 005 */}
              <div className="border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <img
                  src="/005.png"
                  alt="Company logo 005"
                  className="h-16 md:h-20 object-contain"
                />
              </div>
              
              {/* 007 */}
              <div className="border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <img
                  src="/007.png"
                  alt="Company logo 007"
                  className="h-16 md:h-20 object-contain"
                />
              </div>
              
              {/* 009 */}
              <div className="border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <img
                  src="/009.png"
                  alt="Company logo 009"
                  className="h-16 md:h-20 object-contain"
                />
              </div>
              
              {/* 010 */}
              <div className="border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <img
                  src="/010.png"
                  alt="Company logo 010"
                  className="h-16 md:h-20 object-contain"
                />
              </div>
              
              {/* 015 */}
              <div className="border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <img
                  src="/015.png"
                  alt="Company logo 015"
                  className="h-16 md:h-20 object-contain"
                />
              </div>
              
              {/* 027 */}
              <div className="border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <img
                  src="/027.png"
                  alt="Company logo 027"
                  className="h-16 md:h-20 object-contain"
                />
              </div>
              
              {/* Cynergy */}
              <div className="border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <img
                  src="/Cynergy-Logo-1.png"
                  alt="Cynergy logo"
                  className="h-16 md:h-20 object-contain"
                />
              </div>
              
              {/* STAAMP / South Texas Allergy & Asthma */}
              <div className="border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <img
                  src="/STAAMP-Logo-2.png"
                  alt="STAAMP logo"
                  className="h-16 md:h-20 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

