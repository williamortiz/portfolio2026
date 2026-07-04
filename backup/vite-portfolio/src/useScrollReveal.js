import { useRef, useEffect } from 'react';

export function useScrollReveal(className = 'reveal', options = {}) {
  const ref = useRef();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('revealed');
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
