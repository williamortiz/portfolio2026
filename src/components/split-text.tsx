"use client";

import { useSprings, animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  animationFrom?: any;
  animationTo?: any;
  easing?: string;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right";
  onLetterAnimationComplete?: () => void;
}

export function SplitText({
  text = "",
  className = "",
  delay = 30,
  animationFrom = { opacity: 0, transform: "translate3d(0,30px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0px,0)" },
  easing = "cubic-bezier(0, 0, 0.2, 1)",
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}: SplitTextProps) {
  const words = text.split(" ");
  const letters = words.map((word) => word.split(""));
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // Calculate the total number of letters to animate
  const flatLetters = letters.flat();

  const springs = useSprings(
    flatLetters.length,
    flatLetters.map((_, i) => ({
      from: animationFrom,
      to: inView
        ? async (next: any) => {
            await next(animationTo);
            if (onLetterAnimationComplete && i === flatLetters.length - 1) {
              onLetterAnimationComplete();
            }
          }
        : animationFrom,
      delay: i * delay,
      config: { easing: easing as any },
    }))
  );

  let letterIndex = 0;

  return (
    <p
      ref={ref}
      className={`split-parent ${className}`}
      style={{ textAlign, display: "inline" }}
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {word.split("").map((letter, letterIdx) => {
            const index = letterIndex++;
            return (
              <animated.span
                key={letterIdx}
                style={{
                  ...springs[index],
                  display: "inline-block",
                  willChange: "transform, opacity",
                }}
              >
                {letter}
              </animated.span>
            );
          })}
          {wordIdx < words.length - 1 && (
            <span style={{ display: "inline-block" }}>&nbsp;</span>
          )}
        </span>
      ))}
    </p>
  );
}
