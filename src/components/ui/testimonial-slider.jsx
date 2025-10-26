'use client';

import { useState, useEffect } from 'react';

/**
 * Reusable TestimonialSlider component with navigation dots
 * @param {Object} props - Component props
 * @param {Array} props.testimonials - Array of testimonial objects or strings
 * @param {boolean} [props.autoPlay=false] - Whether to auto-advance slides
 * @param {number} [props.autoPlayInterval=5000] - Auto-play interval in milliseconds
 * @param {string} [props.className=''] - Additional CSS classes for container
 * @param {string} [props.slideClassName=''] - Additional CSS classes for slides
 * @param {'simple'|'card'} [props.variant='simple'] - Testimonial display variant
 * @param {Function} [props.renderTestimonial] - Custom render function for testimonials
 * @returns {JSX.Element} TestimonialSlider component
 */
const TestimonialSlider = ({
  testimonials = [],
  autoPlay = false,
  autoPlayInterval = 5000,
  className = '',
  slideClassName = '',
  variant = 'simple',
  renderTestimonial
}) => {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setActiveSlide(prev => (prev >= testimonials.length ? 1 : prev + 1));
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, testimonials.length]);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const handleDotClick = (index) => {
    setActiveSlide(index + 1);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleDotClick(index);
    }
  };

  const renderSimpleTestimonial = (testimonial, index) => {
    if (typeof testimonial === 'string') {
      return (
        <div key={index} className={`inline-block w-full whitespace-normal ${slideClassName}`}>
          <p className="text-white mb-10 max-w-sm">"{testimonial}"</p>
        </div>
      );
    }

    return (
      <div key={index} className={`inline-block w-full whitespace-normal ${slideClassName}`}>
        <p className="text-white mb-10 max-w-sm">"{testimonial.text || testimonial.quote}"</p>
        {(testimonial.name || testimonial.author) && (
          <>
            <p className="text-white font-semibold mb-1">{testimonial.name || testimonial.author}</p>
            {(testimonial.title || testimonial.position) && (
              <p className="text-white text-opacity-50 mb-10">{testimonial.title || testimonial.position}</p>
            )}
          </>
        )}
      </div>
    );
  };

  const renderCardTestimonial = (testimonial, index) => {
    const content = typeof testimonial === 'string' ? testimonial : (testimonial.text || testimonial.quote);

    return (
      <h2
        key={index}
        className={`text-white text-3xl md:text-4xl font-medium ${
          activeSlide === index + 1 ? 'block' : 'hidden'
        } ${slideClassName}`}
      >
        {content}
      </h2>
    );
  };

  const defaultRender = variant === 'card' ? renderCardTestimonial : renderSimpleTestimonial;
  const renderFunction = renderTestimonial || defaultRender;

  return (
    <div className={`testimonial-slider ${className}`}>
      {variant === 'simple' && (
        <div className="overflow-hidden">
          <div
            className="whitespace-nowrap transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(activeSlide - 1) * 100.5}%)` }}
          >
            {testimonials.map((testimonial, index) => renderFunction(testimonial, index))}
          </div>
        </div>
      )}

      {variant === 'card' && (
        <div className="testimonial-content">
          {testimonials.map((testimonial, index) => renderFunction(testimonial, index))}
        </div>
      )}

      {/* Navigation Dots */}
      <div className="flex gap-2 mt-6" role="tablist" aria-label="Testimonial navigation">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`rounded-3xl h-1 w-8 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
              activeSlide === index + 1 ? 'bg-white' : 'bg-white/10'
            }`}
            onClick={() => handleDotClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            aria-selected={activeSlide === index + 1}
            aria-label={`Go to testimonial ${index + 1}`}
            role="tab"
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;