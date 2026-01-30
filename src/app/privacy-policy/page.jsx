"use client";

import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ScrollToTop from "@/components/ScrollToTop";
import StickyHeader from "@/components/StickyHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 page-transition">
      <StickyHeader />
      <ScrollIndicator />
      <div className="pt-16 md:pt-20">
        <Breadcrumbs />
      {/* Header Section */}
      <div className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-red-100">Your privacy is important to us</p>
        </div>
      </div>

      <Section bgColor="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-10 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to Your Privacy</h2>
                <div className="h-1 w-20 bg-red-600 rounded-full mb-4"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At VRT Management Group, we respect your privacy. We collect personal information such as your name, email address, phone number, or company details solely to provide you with the resources you've requested. This may include our "Hiring Guide," business guides, or invitations to events and strategy sessions.
                </p>
              </div>
            </div>
          </div>

          {/* Information Cards */}
          <div className="space-y-8">
            {/* Communication Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Communications</h3>
                  <div className="h-1 w-16 bg-red-600 rounded-full mb-4"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We may occasionally send you helpful updates or insights about leadership, business growth, and hiring best practices. You can unsubscribe at any time by clicking the unsubscribe link in our emails.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-red-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-semibold">Easy unsubscribe option available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Protection Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Data Protection & Security</h3>
                  <div className="h-1 w-16 bg-green-600 rounded-full mb-4"></div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    We never sell, rent, or share your personal information with third parties. Your data is stored securely and used only for communication directly related to VRT Management Group services.
                  </p>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-green-800 font-bold text-lg">
                        Your information is safe with us
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-red-50 via-red-100 to-red-50 rounded-3xl shadow-xl p-8 md:p-10 border-2 border-red-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Questions About Your Data?</h3>
                  <div className="h-1 w-16 bg-red-600 rounded-full mb-4"></div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    If you have any questions about how we handle your data, we're here to help.
                  </p>
                  <a 
                    href="mailto:coachrajesh@vrt9.com" 
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Contact Us: coachrajesh@vrt9.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gray-100 rounded-xl p-6 text-center">
              <p className="text-sm text-gray-600 mb-1">Last Updated</p>
              <p className="text-base font-semibold text-gray-800">
                {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </Section>
      </div>
      <Footer />
      <ScrollToTop color="red" />
    </div>
  );
}

