"use client";
import React, { useEffect, useRef } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  animationClass: string;
  delay?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animationClass,
  delay = 200,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate");
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(currentElement);

    return () => observer.disconnect();
  }, [animationClass, delay]);

  return (
    <div ref={elementRef} className={`${animationClass} opacity-0`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
