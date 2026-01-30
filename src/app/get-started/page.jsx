"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import AnimatedCard from "@/components/AnimatedCard";
import Footer from "@/components/Footer";
import SkeletonLoader from "@/components/SkeletonLoader";
import StickyHeader from "@/components/StickyHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function GetStartedPage() {
  const [cohortType, setCohortType] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    // Get cohort type from URL params or localStorage
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type') || localStorage.getItem('selectedCohortType');
    if (type) {
      setCohortType(type);
      localStorage.setItem('selectedCohortType', type);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white page-transition">
      <StickyHeader />
      <ScrollIndicator />
      <div className="pt-16 md:pt-20">
        <Breadcrumbs />
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
        {/* Two Column Layout: Image + Form */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: Image Card */}
          <AnimatedCard animationType="slideInLeft">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col group hover:shadow-3xl transition-all duration-300">
              {/* Image Container - Takes remaining space */}
              <div className="relative flex-1 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden min-h-[400px]">
                {imageLoading && (
                  <SkeletonLoader type="image" className="absolute inset-0 z-10" />
                )}
                {/* Rajesh Tedla Image */}
                <Image
                  src="/ver1.jpg"
                  alt="Rajesh Tedla"
                  fill
                  className={`object-cover transition-all duration-500 ${
                    imageLoading ? "blur-sm scale-105" : "blur-0 scale-100"
                  } group-hover:scale-110`}
                  priority
                  onLoad={() => setImageLoading(false)}
                />
              </div>
              
              {/* Text Section - Below image with blur background */}
              <div className="px-4 py-4 bg-black bg-opacity-60 backdrop-blur-md">
                <div className="text-white">
                  <p className="text-base font-semibold mb-1">
                    Want to grow your business by 20% in the next year?
                  </p>
                  <p className="text-sm mb-1">Call us</p>
                  <p className="text-sm font-bold">• Rajesh Tedla</p>
                </div>
              </div>
              
              {/* Button at Bottom - Same position as form button */}
              <button
                onClick={() => {
                  document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="ripple w-full bg-red-600 hover:bg-red-700 text-white text-center px-6 py-4 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] rounded-b-2xl cursor-pointer"
              >
                Book Free 45 Minute Strategy Call
              </button>
            </div>
          </AnimatedCard>

          {/* Right Column: Form */}
          <AnimatedCard animationType="slideInRight">
            <div id="lead-form" className="h-full">
              <LeadForm
                title="Get Started Today"
                subtitle="Join our exclusive program and transform your business"
                cohortType={cohortType}
                onClose={null}
              />
            </div>
          </AnimatedCard>
        </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

