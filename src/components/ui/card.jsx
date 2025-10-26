import React from 'react';

/**
 * Generic Card component for consistent card layouts
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {'default'|'gradient'|'transparent'|'dark'} [props.variant='default'] - Card style variant
 * @param {'small'|'medium'|'large'} [props.size='medium'] - Card padding size
 * @param {boolean} [props.shadow=true] - Whether to show shadow
 * @param {boolean} [props.border=false] - Whether to show border
 * @param {string} [props.background] - Custom background classes
 * @param {Object} [props.restProps] - Additional props passed to the container
 * @returns {JSX.Element} Card component
 */
const Card = ({
  children,
  className = '',
  variant = 'default',
  size = 'medium',
  shadow = true,
  border = false,
  background,
  ...restProps
}) => {
  const baseClasses = 'rounded-xl';

  const sizeClasses = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  };

  const variantClasses = {
    default: 'bg-white',
    gradient: 'bg-gradient-to-b from-darkBlue-900 via-blue-700 to-blue-400',
    transparent: 'bg-transparent',
    dark: 'bg-darkBlue-900'
  };

  const shadowClasses = shadow ? 'shadow-lg' : '';
  const borderClasses = border ? 'border border-gray-200' : '';
  const backgroundClasses = background || variantClasses[variant];

  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${backgroundClasses}
    ${shadowClasses}
    ${borderClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={combinedClasses} {...restProps}>
      {children}
    </div>
  );
};

export default Card;