/**
 * Loading component with different variants for various use cases
 * @param {Object} props - Component props
 * @param {'spinner'|'skeleton'|'dots'|'pulse'} [props.variant='spinner'] - Loading animation variant
 * @param {'small'|'medium'|'large'} [props.size='medium'] - Loading component size
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {string} [props.message] - Loading message to display
 * @param {string} [props.color='blue'] - Color theme for the loader
 * @param {boolean} [props.overlay=false] - Whether to show as overlay
 * @returns {JSX.Element} Loading component
 */
const Loading = ({
  variant = 'spinner',
  size = 'medium',
  className = '',
  message,
  color = 'blue',
  overlay = false
}) => {
  const sizeClasses = {
    small: { spinner: 'h-4 w-4', container: 'gap-2', text: 'text-sm' },
    medium: { spinner: 'h-8 w-8', container: 'gap-3', text: 'text-base' },
    large: { spinner: 'h-12 w-12', container: 'gap-4', text: 'text-lg' }
  };

  const colorClasses = {
    blue: 'text-blue-500',
    white: 'text-white',
    gray: 'text-gray-500'
  };

  const containerClasses = `flex items-center justify-center ${sizeClasses[size].container} ${className}`;
  const textClasses = `${sizeClasses[size].text} ${colorClasses[color]}`;

  const renderSpinner = () => (
    <svg
      className={`animate-spin ${sizeClasses[size].spinner} ${colorClasses[color]}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  const renderDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`${sizeClasses[size].spinner.includes('h-4') ? 'h-2 w-2' : sizeClasses[size].spinner.includes('h-8') ? 'h-3 w-3' : 'h-4 w-4'} ${colorClasses[color]} bg-current rounded-full animate-pulse`}
          style={{
            animationDelay: `${index * 0.2}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  );

  const renderPulse = () => (
    <div className={`${sizeClasses[size].spinner} ${colorClasses[color]} bg-current rounded-full animate-pulse`} />
  );

  const renderSkeleton = () => (
    <div className="animate-pulse space-y-2">
      <div className={`h-4 ${colorClasses[color]} bg-current rounded opacity-30`} />
      <div className={`h-4 ${colorClasses[color]} bg-current rounded opacity-30 w-3/4`} />
      <div className={`h-4 ${colorClasses[color]} bg-current rounded opacity-30 w-1/2`} />
    </div>
  );

  const renderVariant = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'skeleton':
        return renderSkeleton();
      default:
        return renderSpinner();
    }
  };

  const content = (
    <div className={containerClasses} role="status" aria-live="polite">
      {renderVariant()}
      {message && (
        <span className={textClasses}>
          {message}
        </span>
      )}
      <span className="sr-only">Loading...</span>
    </div>
  );

  if (overlay) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white/10 rounded-lg p-6">
          {content}
        </div>
      </div>
    );
  }

  return content;
};

export default Loading;