import React from 'react';

/**
 * Specialized gradient button component matching the site's design system
 * @param {Object} props - Component props
 * @param {'white'|'blue'} [props.variant='white'] - Gradient button variant
 * @param {React.ReactNode} props.children - Button content
 * @param {boolean} [props.disabled=false] - Whether button is disabled
 * @param {boolean} [props.loading=false] - Whether button is in loading state
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {string} [props.href] - If provided, renders as anchor tag
 * @param {'button'|'submit'|'reset'} [props.type='button'] - Button type
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.ariaLabel] - Accessibility label
 * @param {boolean} [props.fullWidth=false] - Whether button should be full width
 * @param {Object} [props.restProps] - Additional props
 * @returns {JSX.Element} GradientButton component
 */
const GradientButton = ({
  variant = 'white',
  children,
  disabled = false,
  loading = false,
  className = '',
  href,
  type = 'button',
  onClick,
  ariaLabel,
  fullWidth = false,
  ...restProps
}) => {
  const baseClasses = `group relative inline-block p-0.5 font-semibold overflow-hidden rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${fullWidth ? 'w-full' : ''}`;

  const variantStyles = {
    white: {
      outer: 'shadow-blue hover:shadow-none focus:shadow-none focus:ring-blue-500',
      gradient: 'bg-gradient-to-b from-white to-gray-500 group-focus:to-white opacity-40 group-focus:opacity-20',
      inner: 'bg-white group-hover:bg-white/80 group-focus:bg-white/80',
      text: 'text-blue-900'
    },
    blue: {
      outer: 'shadow-blue hover:shadow-none focus:shadow-none focus:ring-blue-500',
      gradient: 'bg-gradient-to-b from-blue-400 to-blue-500',
      inner: 'bg-blue-500 group-hover:bg-blue-600 group-focus:bg-blue-600',
      text: 'text-white'
    }
  };

  const styles = variantStyles[variant];
  const combinedClasses = `${baseClasses} ${styles.outer} ${className}`;

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>{children}</span>
        </div>
      );
    }

    if (typeof children === 'string') {
      return <span>{children}</span>;
    }

    return children;
  };

  const Element = href ? 'a' : 'button';

  return (
    <Element
      className={combinedClasses}
      disabled={disabled || loading}
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      aria-label={ariaLabel}
      role={href ? 'link' : 'button'}
      {...restProps}
    >
      <div className={`absolute inset-0 ${styles.gradient} rounded-full`}></div>
      <div className={`relative z-50 flex items-center justify-center py-2 px-4 ${styles.inner} rounded-full transition duration-200 ${fullWidth ? 'w-full' : ''}`}>
        <span className={styles.text}>{renderContent()}</span>
      </div>
    </Element>
  );
};

export default GradientButton;