"use client";

import { useState, useEffect, useRef } from "react";

export default function AnimatedCounter({ 
  end, 
  duration = 2000, 
  prefix = "", 
  suffix = "",
  decimals = 0,
  className = ""
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounter = () => {
    const startTime = Date.now();
    const startValue = 0;
    
    // Parse the end value based on format
    let endValue = 0;
    let isMillion = false;
    let hasPlus = false;
    let hasDollar = false;
    
    if (typeof end === 'string') {
      hasPlus = end.includes('+');
      isMillion = end.includes('M') || end.includes('m');
      hasDollar = end.includes('$');
      const cleaned = end.replace(/[^0-9.]/g, '');
      endValue = parseFloat(cleaned);
      if (isMillion) {
        endValue = endValue; // Keep as is, we'll add M later
      }
    } else {
      endValue = end;
    }

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (endValue - startValue) * easeOutQuart;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  };

  const formatNumber = (num) => {
    if (decimals === 0) {
      return Math.floor(num).toLocaleString();
    }
    return num.toFixed(decimals).toLocaleString();
  };

  // Determine display format
  let displayValue = '';
  const endStr = typeof end === 'string' ? end : end.toString();
  const hasPlus = endStr.includes('+');
  const isMillion = endStr.includes('M') || endStr.includes('m');
  const hasDollar = endStr.includes('$');
  
  if (hasDollar && isMillion) {
    displayValue = `$${formatNumber(count)}M${hasPlus ? '+' : ''}`;
  } else if (isMillion) {
    displayValue = `${formatNumber(count)}M${hasPlus ? '+' : ''}`;
  } else if (hasPlus) {
    displayValue = `${formatNumber(count)}+`;
  } else if (hasDollar) {
    displayValue = `$${formatNumber(count)}`;
  } else {
    displayValue = `${prefix}${formatNumber(count)}${suffix}`;
  }

  return (
    <span ref={counterRef} className={className}>
      {displayValue}
    </span>
  );
}

