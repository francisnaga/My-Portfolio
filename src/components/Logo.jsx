import React from 'react';

/**
 * Naga Identity Mark — Concept 02: "The Interlocking Keels"
 * Marine engineering hull/keel geometry fused with precision software architecture.
 * Designed for extreme scalability (from 16px favicon to 512px app icon).
 *
 * @param {Object} props
 * @param {number|string} [props.size=24] - Pixel height/size of the mark
 * @param {string} [props.className] - Additional Tailwind or CSS classes
 * @param {'duotone'|'mono'|'white'|'sand'} [props.variant='duotone'] - Color variant
 */
export default function Logo({
  size,
  className = '',
  variant = 'duotone',
  ...rest
}) {
  const numericSize = size ? (typeof size === 'number' ? size : parseInt(size, 10)) : undefined;
  
  const colors = {
    duotone: ['#111111', '#002FA7'],
    mono: ['currentColor', 'currentColor'],
    white: ['#FFFFFF', '#FFFFFF'],
    sand: ['#C9C7B6', '#EAE8DA'],
  };
  const [primary, secondary] = colors[variant] || colors.duotone;

  return (
    <svg
      width={numericSize}
      height={numericSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      role="img"
      aria-label="Naga Logo"
      {...rest}
    >
      {/* Left Keel Pillar (Forward cutting prow) */}
      <path
        d="M16 16H38V48L58 74L42 84H16V16Z"
        fill={primary}
      />
      {/* Right Keel Pillar (Inverted reciprocal wedge) */}
      <path
        d="M84 84H62V52L42 26L58 16H84V84Z"
        fill={secondary}
      />
    </svg>
  );
}
