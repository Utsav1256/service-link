"use client";
import { useRef } from "react";

export default function MagneticButton({ children, className = "", ...props }) {
  const ref = useRef(null);
  const onMouseMove = (e) => {
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
  };
  const onMouseLeave = () => { ref.current.style.transform = `translate(0,0)`; };

  return (
    <button
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`rounded-2xl px-6 py-3 font-semibold shadow-lg transition will-change-transform ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
