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
              {/* LATICRETE */}
              <div className="border-l border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <div className="text-center">
                  <div className="flex gap-1 mb-2 justify-center">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-red-400 border border-gray-300"></div>
                    ))}
                  </div>
                  <p className="text-lg font-bold text-gray-900">LATICRETE</p>
                </div>
              </div>
              
              {/* DE HARO RAMIREZ GROUP */}
              <div className="border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <div className="text-center">
                  <div className="w-12 h-8 bg-teal-600 rounded mb-2 mx-auto"></div>
                  <p className="text-sm font-semibold text-teal-700">DE HARO</p>
                  <p className="text-sm font-semibold text-teal-700">RAMIREZ</p>
                  <p className="text-sm font-semibold text-teal-700">GROUP</p>
                  <p className="text-xs text-gray-500 mt-1">San Francisco, CA</p>
                </div>
              </div>
              
              {/* Interpreters and Translators, Inc. */}
              <div className="border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-700 border border-gray-300 rounded flex items-center justify-center">
                    <span className="text-gray-300 text-xs">ii</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-purple-700">Interpreters and</p>
                    <p className="text-sm font-semibold text-purple-700">Translators, Inc.</p>
                  </div>
                </div>
              </div>
              
              {/* ASH BROKERAGE */}
              <div className="border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-600 rounded mb-2 mx-auto flex items-center justify-center">
                    <span className="text-white text-xs">🌳</span>
                  </div>
                  <p className="text-xl font-bold text-green-600">ASH</p>
                  <p className="text-sm font-semibold text-green-600">BROKERAGE</p>
                </div>
              </div>
              
              {/* CONVEYCO */}
              <div className="border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <div className="text-center">
                  <p className="text-xl font-bold text-red-700">CONVEYCO</p>
                  <p className="text-xs text-red-500 mt-1">Good people. Great solutions.</p>
                </div>
              </div>
              
              {/* Jersey City Medical Center / RWJBarnabas Health */}
              <div className="border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <div className="text-center">
                  <p className="text-sm font-semibold text-red-600">Jersey City Medical Center</p>
                  <div className="flex items-center gap-2 mt-1 justify-center">
                    <span className="text-red-600 font-semibold">RWJBarnabas</span>
                    <span className="text-xs text-red-600">HEALTH</span>
                  </div>
                </div>
              </div>
              
              {/* horizon services company */}
              <div className="border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">☀</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">horizon</p>
                    <p className="text-xs text-gray-600">services company</p>
                  </div>
                </div>
              </div>
              
              {/* Superior Sign & Lighting */}
              <div className="border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <div className="text-center">
                  <p className="text-xl font-bold text-red-600">SUPERIOR</p>
                  <p className="text-xs text-gray-600">SIGN & LIGHTING</p>
                </div>
              </div>
              
              {/* MedPro Group */}
              <div className="border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded"></div>
                  <div>
                    <p className="font-semibold text-gray-700">MedPro Group</p>
                    <p className="text-xs text-gray-500">a Berkshire Hathaway company</p>
                  </div>
                </div>
              </div>
              
              {/* Cynergy */}
              <div className="border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">★</span>
                  </div>
                  <div>
                    <p className="font-bold text-red-700">Cynergy</p>
                  </div>
                </div>
              </div>
              
              {/* STAAMP / South Texas Allergy & Asthma */}
              <div className="border-r border-gray-300 px-12 py-6 flex items-center justify-center min-w-[200px]">
                <div className="text-center">
                  <div className="w-10 h-10 bg-yellow-200 border-2 border-yellow-400 rounded mb-2 mx-auto flex items-center justify-center">
                    <span className="text-green-600 text-xs">🌳</span>
                  </div>
                  <p className="text-lg font-bold text-red-700">STAAMP</p>
                  <p className="text-xs text-red-700">SOUTH TEXAS</p>
                  <p className="text-xs text-red-700">Allergy & Asthma</p>
                  <p className="text-xs text-gray-500 mt-1">MEDICAL PROFESSIONALS</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

