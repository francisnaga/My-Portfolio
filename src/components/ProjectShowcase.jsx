import React, { useState, useRef, useCallback } from 'react';
import IPhone from './IPhone';

/**
 * Swipable, interactive mobile showcase deck.
 * Supports touch swipe gestures on mobile, mouse drag on desktop,
 * keyboard arrows, and clickable pagination controls.
 */
export default function ProjectShowcase({ screens = [], projectName = '' }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const total = screens.length;
  if (!total) return null;

  const current = screens[index];
  const next = total > 1 ? screens[(index + 1) % total] : null;

  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 35; // minimum px for swipe
    if (diff > threshold) {
      goNext();
    } else if (diff < -threshold) {
      goPrev();
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
    touchEndX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 40;
    if (diff > threshold) {
      goNext();
    } else if (diff < -threshold) {
      goPrev();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
    }
  };

  return (
    <div
      className="project-visual"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${projectName} interactive screenshots`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="project-deck">
        <IPhone
          src={current.src}
          alt={current.alt}
          className="phone-front"
          eager={true}
        />
        {next && (
          <IPhone
            src={next.src}
            alt={next.alt}
            className="phone-back"
            eager={false}
            onClick={goNext}
            title="Click to view next screen"
          />
        )}
      </div>

      {total > 1 && (
        <div className="project-controls-wrap">
          <div className="project-controls" aria-label="Carousel controls">
            <button
              type="button"
              className="ctrl-btn"
              onClick={goPrev}
              aria-label="Previous screen"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="screen-dots">
              {screens.map((s, idx) => (
                <button
                  key={s.src}
                  type="button"
                  className={`dot${idx === index ? ' is-active' : ''}`}
                  onClick={() => setIndex(idx)}
                  aria-label={`Go to screen ${idx + 1}: ${s.title || s.alt}`}
                  aria-current={idx === index ? 'true' : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              className="ctrl-btn"
              onClick={goNext}
              aria-label="Next screen"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <span className="ctrl-counter">
              {index + 1}/{total}
            </span>
          </div>

          {current.title && (
            <div className="screen-caption" aria-live="polite">
              {current.title}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
