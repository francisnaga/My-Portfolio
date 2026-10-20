import React from 'react';

/**
 * Naga Identity Mark : "The Interlocking Keels"
 * Marine engineering geometry fused with software systems architecture.
 * Pure monochrome representation adapting to theme colors.
 *
 * @param {Object} props
 * @param {number|string} [props.size=24] - Pixel height/size of the mark
 * @param {string} [props.className] - Additional CSS classes
 * @param {'mono'|'duotone'} [props.variant='mono'] - Color variant
 */
export default function Logo({
  size = 24,
  className = '',
  variant = 'mono',
  ...rest
}) {
  const numericSize = typeof size === 'number' ? size : parseInt(size, 10) || 24;
  
  const colors = {
    mono: ['currentColor', 'currentColor'],
    duotone: ['var(--fg)', 'var(--gray)'],
  };
  const [primary, secondary] = colors[variant] || colors.mono;

  return (
    <svg
      width={numericSize}
      height={numericSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Naga Logo"
      {...rest}
    >
      {/* Left Keel Pillar */}
      <path
        d="M16 16H38V48L58 74L42 84H16V16Z"
        fill={primary}
      />
      {/* Right Keel Pillar */}
      <path
        d="M84 84H62V52L42 26L58 16H84V84Z"
        fill={secondary}
      />
    </svg>
  );
}
