"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface Props {
  children: React.ReactNode;
  range?: number;
  strength?: number;
  className?: string;
}

export function Magnetic({ children, range = 60, strength = 0.35, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      
      // Center coordinates of the element
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const x = clientX - centerX;
      const y = clientY - centerY;
      
      const distance = Math.hypot(x, y);

      if (distance < range) {
        // Stronger pull when closer, decay as it goes out to active range limit
        const ratio = (range - distance) / range;
        gsap.to(el, {
          x: x * strength * ratio,
          y: y * strength * ratio,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.3)",
        });
      }
    };

    const onMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`${className || ""} inline-block`}>
      {children}
    </div>
  );
}
