import React from 'react';

/**
 * Naga Architectural Monogram Logo
 * 45-degree chamfered precision geometry modeled after HANCORE's mechanical aesthetic.
 *
 * @param {Object} props
 * @param {number|string} [props.size=28] - Pixel height/size of the mark
 * @param {string} [props.className] - Additional Tailwind or CSS classes
 * @param {'duotone'|'mono'|'sand'|'white'} [props.variant='duotone'] - Color variant
 * @param {'n'|'ng'} [props.type='n'] - Monogram type: 'n' (signature faceted monolith) or 'ng' (interlocking sibling)
 */
export default function Logo({
  size = 28,
  className = '',
  variant = 'duotone',
  type = 'n',
  ...rest
}) {
  const numericSize = typeof size === 'number' ? size : parseInt(size, 10) || 28;
  const isNG = type === 'ng';
  const width = Math.round(numericSize * (isNG ? (96 / 80) : (88 / 80)));
  const viewBox = isNG ? '0 0 96 80' : '0 0 88 80';

  let leftFill = 'currentColor';
  let rightFill = '#002FA7';

  if (variant === 'mono') {
    leftFill = 'currentColor';
    rightFill = 'currentColor';
  } else if (variant === 'white') {
    leftFill = '#FFFFFF';
    rightFill = '#002FA7';
  } else if (variant === 'sand') {
    leftFill = '#C9C7B6';
    rightFill = '#EAE8DA';
  }

  return (
    <svg
      width={width}
      height={numericSize}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block transition-transform duration-200 group-hover:scale-105 ${className}`}
      role="img"
      aria-label="Naga Logo"
      {...rest}
    >
      {isNG ? (
        <>
          {/* N Glyph (Left) */}
          <path
            d="M0 12L12 0H16V34L32 12V42L16 60V80H0Z"
            fill={leftFill}
          />
          {/* G Glyph (Right, octagonal contour with mechanical spur) */}
          <path
            d="M52 0H92V16H60L52 24V56L60 64H92V38H68V26H92L78 80H52L36 64V16Z"
            fill={rightFill}
          />
        </>
      ) : (
        <>
          {/* Signature Faceted N // Primary Left Pillar & Lower Diagonal Tongue */}
          <path
            d="M0 14L14 0H22V36L64 80H44L18 46V80H0Z"
            fill={leftFill}
          />
          {/* Signature Faceted N // Secondary Right Pillar & Upper Diagonal Tongue */}
          <path
            d="M88 66L74 80H66V44L24 0H44L70 34V0H88Z"
            fill={rightFill}
          />
        </>
      )}
    </svg>
  );
}
