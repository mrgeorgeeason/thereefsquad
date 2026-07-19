"use client";

import { useEffect, useState } from "react";

type Bubble = {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
  opacity: number;
};

export default function BubbleField() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      size: Math.random() * 16 + 4,
      left: Math.random() * 100,
      duration: Math.random() * 18 + 18,
      delay: Math.random() * -30,
      opacity: Math.random() * 0.25 + 0.08,
    }));

    setBubbles(generated);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className="bubble"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
            opacity: bubble.opacity,
          }}
        />
      ))}
    </div>
  );
}