"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LeadForm({ 
  title = "Get Started Today", 
  subtitle = "Join our exclusive program and transform your business",
  cohortType = null,
  onClose
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    numberOfEmployees: "",
    website: "",
    cohortType: cohortType || "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [storedData, setStoredData] = useState(null);
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [touched, setTouched] = useState({});
  const router = useRouter();

  // Validation functions
  const validateFullName = (name) => {
    if (!name || name.trim() === "") {
      return "Full Name is required";
    }
    if (name.length > 60) {
      return "Full Name must be 60 characters or less";
    }
    return "";
  };

  const validateEmail = (email) => {
    if (!email || email.trim() === "") {
      return "Email Address is required";
    }
    if (email.startsWith("$") || email.startsWith("#")) {
      return "Email cannot start with $ or #";
    }
    if (!email.includes("@")) {
      return "Email must contain @ symbol";
    }
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validateCompanyName = (company) => {
    if (!company || company.trim() === "") {
      return "Company Name is required";
    }
    if (company.length > 100) {
      return "Company Name must be 100 characters or less";
    }
    return "";
  };

  const validateNumberOfEmployees = (employees) => {
    if (!employees || employees === "") {
      return "Number of Employees is required";
    }
    return "";
  };

  const validateWebsite = (website) => {
    if (website && website.trim() !== "") {
      try {
        new URL(website);
      } catch {
        return "Please enter a valid website URL (e.g., https://www.example.com)";
      }
    }
    return "";
  };

  const validateForm = () => {
    const newErrors = {};
    
    const fullNameError = validateFullName(formData.fullName);
    if (fullNameError) newErrors.fullName = fullNameError;
    
    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;
    
    const companyError = validateCompanyName(formData.companyName);
    if (companyError) newErrors.companyName = companyError;
    
    const employeesError = validateNumberOfEmployees(formData.numberOfEmployees);
    if (employeesError) newErrors.numberOfEmployees = employeesError;
    
    const websiteError = validateWebsite(formData.website);
    if (websiteError) newErrors.website = websiteError;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    
    // Validate individual field on blur
    let error = "";
    switch (name) {
      case "fullName":
        error = validateFullName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "companyName":
        error = validateCompanyName(value);
        break;
      case "numberOfEmployees":
        error = validateNumberOfEmployees(value);
        break;
      case "website":
        error = validateWebsite(value);
        break;
    }
    
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      fullName: true,
      email: true,
      companyName: true,
      numberOfEmployees: true,
      website: true,
    });
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    // Store data locally in component state and localStorage
    const dataToStore = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };
    
    // Store in localStorage
    const existingData = JSON.parse(localStorage.getItem('egaFormSubmissions') || '[]');
    existingData.push(dataToStore);
    localStorage.setItem('egaFormSubmissions', JSON.stringify(existingData));
    
    // Simulate form submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setStoredData(dataToStore);
      setShowToast(true);
      
      // Log stored data
      console.log("Form data stored locally in component state:", dataToStore);
      console.log("Form data stored in localStorage:", existingData);
      console.log("All submissions in localStorage:", localStorage.getItem('egaFormSubmissions'));
      
      // Hide toast after 5 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
      
      // Redirect to main page 2 seconds after toast appears
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          companyName: "",
          numberOfEmployees: "",
          website: "",
          cohortType: cohortType || "",
        });
        setErrors({});
        setTouched({});
        if (onClose) {
          onClose();
        }
        // Redirect to main page
        router.push('/');
      }, 2000);
    }, 1000);
  };

  // Auto-hide toast
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 animate-fadeIn">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-4">We'll be in touch shortly.</p>
          {storedData && (
            <div className="mt-4 p-4 bg-gray-50 rounded-xl text-left text-sm space-y-2">
              <p className="font-semibold mb-3 text-base">Stored Information:</p>
              <p><strong>Name:</strong> {storedData.fullName}</p>
              <p><strong>Email:</strong> {storedData.email}</p>
              <p><strong>Company:</strong> {storedData.companyName}</p>
              <p><strong>Employees:</strong> {storedData.numberOfEmployees}</p>
              <p><strong>Cohort:</strong> {storedData.cohortType || 'Not specified'}</p>
              <p><strong>Submitted At:</strong> {new Date(storedData.submittedAt).toLocaleString()}</p>
              <div className="mt-4 pt-4 border-t border-gray-300">
                <p className="font-semibold text-base mb-2">Storage Location:</p>
                <p className="text-xs text-gray-600">✓ Component State (React useState)</p>
                <p className="text-xs text-gray-600">✓ Browser localStorage (key: 'egaFormSubmissions')</p>
                <p className="text-xs text-gray-600 mt-2">Check browser console for full data details</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Success Toast */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 flex items-center gap-3 min-w-[300px] max-w-md">
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">Form Submitted Successfully!</p>
              <p className="text-xs text-gray-600">Thank you for your submission.</p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close toast"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200 animate-fadeIn h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-sm text-gray-600">{subtitle}</p>
          {cohortType && (
            <p className="text-xs text-red-600 font-semibold mt-2">
              Selected: {cohortType === 'online' ? 'Online Cohort' : cohortType === 'in-person' ? 'In-Person Cohort' : cohortType === 'phase1' ? 'Online Cohort' : cohortType === 'phase2' ? 'In-Person' : cohortType}
            </p>
          )}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            aria-label="Close form"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <input
              type="text"
              name="fullName"
              required
              maxLength={60}
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="John Doe"
              className={`w-full pl-10 pr-4 py-2.5 text-sm border rounded-xl focus:ring-2 focus:ring-red-500 transition-all ${
                errors.fullName ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-red-500"
              }`}
            />
          </div>
          {errors.fullName && touched.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="john@company.com"
              className={`w-full pl-10 pr-4 py-2.5 text-sm border rounded-xl focus:ring-2 focus:ring-red-500 transition-all ${
                errors.email ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-red-500"
              }`}
            />
          </div>
          {errors.email && touched.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Company Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <input
              type="text"
              name="companyName"
              required
              maxLength={100}
              value={formData.companyName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Acme Inc"
              className={`w-full pl-10 pr-4 py-2.5 text-sm border rounded-xl focus:ring-2 focus:ring-red-500 transition-all ${
                errors.companyName ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-red-500"
              }`}
            />
          </div>
          {errors.companyName && touched.companyName && (
            <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Number of Employees <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
                  <select
                    name="numberOfEmployees"
                    required
                    value={formData.numberOfEmployees}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full pl-10 pr-4 py-2.5 text-sm border rounded-xl focus:ring-2 focus:ring-red-500 transition-all appearance-none bg-white ${
                      errors.numberOfEmployees ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-red-500"
                    }`}
                  >
              <option value="">Select range</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201-500">201-500</option>
              <option value="500+">500+</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {errors.numberOfEmployees && touched.numberOfEmployees && (
            <p className="mt-1 text-sm text-red-600">{errors.numberOfEmployees}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Website <span className="text-gray-400 text-xs">(Optional)</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="https://www.company.com"
              className={`w-full pl-10 pr-4 py-2.5 text-sm border rounded-xl focus:ring-2 focus:ring-red-500 transition-all ${
                errors.website ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-red-500"
              }`}
            />
          </div>
          {errors.website && touched.website && (
            <p className="mt-1 text-sm text-red-600">{errors.website}</p>
          )}
        </div>

        <input type="hidden" name="cohortType" value={cohortType || ""} />

        <div className="mt-auto">
          <button
            type="submit"
            disabled={loading}
            className="ripple w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
          >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            <>
              Get Instant Access
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </>
          )}
          </button>
        </div>
      </form>
      </div>
    </>
  );
}

