import React from 'react';

/**
 * Slim, standard iPhone 16 Pro style frame: ultra-thin bezel, concentric
 * circular corners, sleek Dynamic Island, iOS status bar and home indicator.
 */
export default function IPhone({
  src,
  alt,
  className = '',
  statusLight = false,
  eager = false,
}) {
  return (
    <figure className={`iphone ${className}`}>
      <div className="iphone-screen">
        <img
          src={src}
          alt={alt}
          width="920"
          height="2048"
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
        <div
          className={`iphone-status${statusLight ? ' is-light' : ''}`}
          aria-hidden="true"
        >
          <span className="iphone-time">9:41</span>
          <span className="iphone-island" />
          <span className="iphone-icons">
            <svg viewBox="0 0 17 11">
              <rect x="0" y="7" width="2.8" height="4" rx="0.7" />
              <rect x="4.5" y="5" width="2.8" height="6" rx="0.7" />
              <rect x="9" y="2.5" width="2.8" height="8.5" rx="0.7" />
              <rect x="13.5" y="0" width="2.8" height="11" rx="0.7" />
            </svg>
            <svg viewBox="0 0 15 11">
              <path d="M7.5 2.2c2.1 0 4 .8 5.5 2.1l1.1-1.1A9.3 9.3 0 0 0 7.5.6 9.3 9.3 0 0 0 .9 3.2L2 4.3a7.8 7.8 0 0 1 5.5-2.1Zm0 3.2c1.2 0 2.3.4 3.2 1.2l1.1-1.1a6.2 6.2 0 0 0-8.6 0l1.1 1.1c.9-.8 2-1.2 3.2-1.2Zm0 3.1c.4 0 .8.2 1.1.4L7.5 10 6.4 8.9c.3-.2.7-.4 1.1-.4Z" />
            </svg>
            <svg viewBox="0 0 25 12">
              <rect
                x="0.6"
                y="0.6"
                width="21"
                height="10.8"
                rx="3"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.4"
                strokeWidth="1.1"
              />
              <rect x="2.2" y="2.2" width="17.8" height="7.6" rx="1.8" />
              <path
                d="M23 4v4c.8-.3 1.3-1.1 1.3-2S23.8 4.3 23 4Z"
                fillOpacity="0.45"
              />
            </svg>
          </span>
        </div>
        <span className="iphone-home" aria-hidden="true" />
      </div>
    </figure>
  );
}
