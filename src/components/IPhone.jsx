import React from 'react';

/**
 * Clean iPhone style device frame: thin bezel, Dynamic Island, iOS status
 * bar and home indicator. The screenshot fills the screen area.
 */
export default function IPhone({ src, alt, className = '', eager = false }) {
  return (
    <figure className={`iphone ${className}`}>
      <div className="iphone-screen">
        <img
          src={src}
          alt={alt}
          width="756"
          height="1720"
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
        <div className="iphone-status" aria-hidden="true">
          <span className="iphone-time">9:41</span>
          <span className="iphone-island" />
          <span className="iphone-icons">
            <svg width="17" height="11" viewBox="0 0 17 11">
              <rect x="0" y="7" width="3" height="4" rx="0.8" />
              <rect x="4.5" y="5" width="3" height="6" rx="0.8" />
              <rect x="9" y="2.5" width="3" height="8.5" rx="0.8" />
              <rect x="13.5" y="0" width="3" height="11" rx="0.8" />
            </svg>
            <svg width="15" height="11" viewBox="0 0 15 11">
              <path d="M7.5 2.2c2.1 0 4 .8 5.5 2.1l1.1-1.1A9.3 9.3 0 0 0 7.5.6 9.3 9.3 0 0 0 .9 3.2L2 4.3a7.8 7.8 0 0 1 5.5-2.1Zm0 3.2c1.2 0 2.3.4 3.2 1.2l1.1-1.1a6.2 6.2 0 0 0-8.6 0l1.1 1.1c.9-.8 2-1.2 3.2-1.2Zm0 3.1c.4 0 .8.2 1.1.4L7.5 10 6.4 8.9c.3-.2.7-.4 1.1-.4Z" />
            </svg>
            <svg width="25" height="12" viewBox="0 0 25 12">
              <rect x="0.5" y="0.5" width="21" height="11" rx="3.2" fill="none" stroke="currentColor" strokeOpacity="0.4" />
              <rect x="2" y="2" width="18" height="8" rx="2" />
              <path d="M23 4v4c.8-.3 1.3-1.1 1.3-2S23.8 4.3 23 4Z" fillOpacity="0.45" />
            </svg>
          </span>
        </div>
        <span className="iphone-home" aria-hidden="true" />
      </div>
    </figure>
  );
}
