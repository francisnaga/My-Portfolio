import React from 'react';

/**
 * Naga Identity Mark — Concept 02: "The Interlocking Keels"
 * Marine engineering hull/keel geometry fused with precision software architecture.
 * Designed for extreme scalability (from 16px favicon to 512px app icon).
 *
 * @param {Object} props
 * @param {number|string} [props.size=24] - Pixel height/size of the mark
 * @param {string} [props.className] - Additional Tailwind or CSS classes
 * @param {'klein'|'mono'|'white'} [props.variant='mono'] - Color variant
 */
export default function Logo({
  size,
  className = '',
  variant = 'mono',
  ...rest
}) {
  const numericSize = size ? (typeof size === 'number' ? size : parseInt(size, 10)) : undefined;
  
  let fill = 'currentColor';
  if (variant === 'klein') {
    fill = '#002FA7';
  } else if (variant === 'white') {
    fill = '#FFFFFF';
  }

  return (
    <svg
      width={numericSize}
      height={numericSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block transition-transform duration-200 group-hover:scale-105 ${className}`}
      role="img"
      aria-label="Naga Logo"
      {...rest}
    >
      {/* Left Keel Pillar (Forward cutting prow) */}
      <path
        d="M16 16H38V48L58 74L42 84H16V16Z"
        fill={fill}
      />
      {/* Right Keel Pillar (Inverted reciprocal wedge) */}
      <path
        d="M84 84H62V52L42 26L58 16H84V84Z"
        fill={fill}
      />
    </svg>
  );
}
