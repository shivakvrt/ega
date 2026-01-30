"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function AnimatedCard({ 
  children, 
  className = "", 
  delay = 0,
  animationType = "fadeIn"
}) {
  const [ref, isIntersecting] = useIntersectionObserver();

  const getDelayClass = (delay) => {
    if (delay === 0) return "";
    if (delay === 100) return "animate-delay-100";
    if (delay === 200) return "animate-delay-200";
    if (delay === 300) return "animate-delay-300";
    if (delay === 400) return "animate-delay-400";
    return "";
  };

  const animationClass = isIntersecting 
    ? `animate-${animationType} ${getDelayClass(delay)}` 
    : "opacity-0";

  return (
    <div ref={ref} className={`${className} ${animationClass} transition-opacity duration-300`}>
      {children}
    </div>
  );
}

