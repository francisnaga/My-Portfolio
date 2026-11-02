import React from 'react';

/**
 * Clean, authentic product screen showcase.
 * Displays real production screenshots with natural display curvature and subtle depth,
 * without artificial bezels, fake status bars, or forced device shells.
 */
export default function IPhone({
  src,
  alt,
  className = '',
  eager = true,
}) {
  return (
    <figure className={`device-frame ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className="device-img"
      />
    </figure>
  );
}
