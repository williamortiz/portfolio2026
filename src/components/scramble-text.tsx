"use client";

import { useState, useEffect, useRef } from "react";

interface Props {
  text: string;
  speed?: number;
  scrambleCount?: number;
  className?: string;
  trigger?: "hover" | "load" | "both";
}

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?-=[]\\;',./";

export function ScrambleText({
  text,
  speed = 30,
  scrambleCount = 3,
  className,
  trigger = "hover"
}: Props) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimating = useRef(false);

  const startScramble = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    
    let frame = 0;
    const maxFrames = text.length * scrambleCount;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      frame++;
      
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          
          // Progress threshold for this character to resolve
          const resolvePoint = (index / text.length) * maxFrames;
          
          if (frame > resolvePoint + scrambleCount) {
            return char; // Settle on the correct character
          }
          
          // Render a random character
          return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        })
        .join("");

      setDisplayText(scrambled);

      if (frame >= maxFrames + scrambleCount) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        isAnimating.current = false;
      }
    }, speed);
  };

  useEffect(() => {
    if (trigger === "load" || trigger === "both") {
      startScramble();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  const handleMouseEnter = () => {
    if (trigger === "hover" || trigger === "both") {
      startScramble();
    }
  };

  return (
    <span
      className={`${className || ""} cursor-default`}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </span>
  );
}
