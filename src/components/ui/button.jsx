
/**
 * Reusable Button component with multiple variants and consistent styling
 * @param {Object} props - Component props
 * @param {'primary'|'secondary'|'gradient'|'outline'|'link'} [props.variant='primary'] - Button style variant
 * @param {'small'|'medium'|'large'} [props.size='medium'] - Button size
 * @param {React.ReactNode} props.children - Button content
 * @param {boolean} [props.disabled=false] - Whether button is disabled
 * @param {boolean} [props.loading=false] - Whether button is in loading state
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {string} [props.href] - If provided, renders as anchor tag
 * @param {'button'|'submit'|'reset'} [props.type='button'] - Button type (only for button elements)
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.ariaLabel] - Accessibility label
 * @param {Object} [props.restProps] - Additional props passed to the element
 * @returns {JSX.Element} Button component
 */
const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  disabled = false,
  loading = false,
  className = '',
  href,
  type = 'button',
  onClick,
  ariaLabel,
  ...restProps
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base'
  };

  const variantClasses = {
    primary: 'bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 focus:ring-gray-500',
    gradient: 'group relative p-0.5 font-semibold overflow-hidden rounded-full shadow-blue hover:shadow-none focus:shadow-none',
    outline: 'border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 focus:ring-blue-500',
    link: 'text-blue-600 hover:text-blue-700 underline focus:ring-blue-500 rounded'
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const renderContent = () => {
    if (loading) {
      return (
        <>
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
          {children}
        </>
      );
    }
    return children;
  };

  if (variant === 'gradient') {
    const Element = href ? 'a' : 'button';
    return (
      <Element
        className={combinedClasses}
        disabled={disabled || loading}
        href={href}
        type={href ? undefined : type}
        onClick={onClick}
        aria-label={ariaLabel}
        {...restProps}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-500 group-focus:to-white opacity-40 group-focus:opacity-20 rounded-full"></div>
        <div className="relative z-50 flex items-center py-2 px-4 bg-white group-hover:bg-white/80 group-focus:bg-white/80 rounded-full transition duration-200">
          <span className="text-blue-900">{renderContent()}</span>
        </div>
      </Element>
    );
  }

  const Element = href ? 'a' : 'button';
  return (
    <Element
      className={combinedClasses}
      disabled={disabled || loading}
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      aria-label={ariaLabel}
      {...restProps}
    >
      {renderContent()}
    </Element>
  );
};

export default Button;