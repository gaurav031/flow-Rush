'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor({ count = 8, size = 18 }) {
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const positions = useRef(Array.from({ length: count }, () => ({ x: 0, y: 0 })));
  const [isTouch, setIsTouch] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isTouchDevice =
      'ontouchstart' in window ||
      (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);

    if (isTouchDevice) {
      setIsTouch(true);
      return;
    }

    const handleMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const hoverSelectors = 'a, button, input, textarea, select, [data-cursor-hover]';

    const handleOver = (e) => {
      if (e.target.closest(hoverSelectors)) {
        containerRef.current?.classList.add('cursor-hover');
      }
    };

    const handleOut = (e) => {
      if (e.target.closest(hoverSelectors)) {
        containerRef.current?.classList.remove('cursor-hover');
      }
    };

    const animate = () => {
      const speed = 0.6;

      // Lead circle
      positions.current[0].x += (mouse.current.x - positions.current[0].x) * (speed + 0.25);
      positions.current[0].y += (mouse.current.y - positions.current[0].y) * (speed + 0.25);

      // Trailing circles
      for (let i = 1; i < positions.current.length; i++) {
        const prev = positions.current[i - 1];
        const dampening = speed - i * 0.05;
        positions.current[i].x += (prev.x - positions.current[i].x) * dampening;
        positions.current[i].y += (prev.y - positions.current[i].y) * dampening;
      }

      if (containerRef.current) {
        const nodes = containerRef.current.children;
        for (let i = 0; i < nodes.length && i < positions.current.length; i++) {
          const { x, y } = positions.current[i];
          nodes[i].style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [count, visible]);

  if (isTouch) return null;

  const dots = Array.from({ length: count }, (_, i) => {
    const dotSize = Math.max(4, size - i * 2);
    const opacity = Math.max(0.1, 1 - i * 0.15);

    return (
      <div
        key={i}
        className={`absolute rounded-full pointer-events-none transition-all duration-200 ease-out will-change-transform ${
          i === 0 ? 'cursor-lead bg-white' : 'cursor-trail bg-white'
        }`}
        style={{
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          opacity,
          boxShadow: i === 0 ? '0 4px 12px rgba(0,0,0,0.25)' : '0 2px 6px rgba(0,0,0,0.15)',
        }}
      />
    );
  });

  return (
    <div
      ref={containerRef}
      className={`custom-cursor fixed left-0 top-0 z-[9999] pointer-events-none ${
        visible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300`}
      aria-hidden="true"
    >
      {dots}
    </div>
  );
}
