'use client';

import { useState } from 'react';

/**
 * Reusable Input component with consistent styling and validation
 * @param {Object} props - Component props
 * @param {'text'|'email'|'password'|'number'|'tel'|'url'} [props.type='text'] - Input type
 * @param {string} [props.value=''] - Input value
 * @param {Function} props.onChange - Change handler function
 * @param {string} [props.placeholder=''] - Placeholder text
 * @param {boolean} [props.required=false] - Whether input is required
 * @param {boolean} [props.disabled=false] - Whether input is disabled
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {string} [props.id] - Input ID for label association
 * @param {string} [props.name] - Input name attribute
 * @param {boolean} [props.showPasswordToggle=false] - Show password visibility toggle for password inputs
 * @param {string} [props.error] - Error message to display
 * @param {string} [props.ariaLabel] - Accessibility label
 * @param {Object} [props.restProps] - Additional input props
 * @returns {JSX.Element} Input component
 */
const Input = ({
  type = 'text',
  value = '',
  onChange,
  placeholder = '',
  required = false,
  disabled = false,
  className = '',
  id,
  name,
  showPasswordToggle = false,
  error,
  ariaLabel,
  ...restProps
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = type === 'password' && showPasswordToggle && showPassword ? 'text' : type;

  const baseClasses = 'px-4 py-3 rounded-full border text-sm transition-all duration-200 outline-none w-full';
  const styleClasses = 'border-white/10 bg-white/5 placeholder-white placeholder-opacity-50 text-white';
  const focusClasses = 'focus:border-white/50';
  const errorClasses = error ? 'border-red-500/70' : '';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const combinedClasses = `${baseClasses} ${styleClasses} ${focusClasses} ${errorClasses} ${disabledClasses} ${className}`;

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  if (type === 'password' && showPasswordToggle) {
    return (
      <div className="relative">
        <div className={`rounded-full border flex items-center ${styleClasses} ${focusClasses} ${errorClasses} ${isFocused ? 'border-white/50' : 'border-white/10'}`}>
          <input
            className="flex-1 bg-transparent text-sm placeholder-white placeholder-opacity-50 text-white transition duration-200 outline-none px-4 py-3"
            type={inputType}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            id={id}
            name={name}
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-label={ariaLabel}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${id}-error` : undefined}
            {...restProps}
          />
          <button
            type="button"
            className="px-4 py-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-full"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            tabIndex={0}
          >
            <svg
              className="w-4 h-4 text-white opacity-50 hover:opacity-70 transition-opacity"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g opacity="0.5">
                <path d="M13.7445 6.36839L13.7446 6.36857C14.0157 6.79424 14.1663 7.3838 14.1663 7.99912C14.1663 8.61458 14.0157 9.20179 13.7454 9.62345L13.7447 9.62455C13.0069 10.7821 12.1122 11.6786 11.1304 12.2878C10.1493 12.8899 9.08596 13.2066 7.99967 13.2066C5.83421 13.2066 3.72502 11.9415 2.25517 9.62537L2.25473 9.62468C1.98347 9.1988 1.83301 8.61081 1.83301 7.99662C1.83301 7.3825 1.98344 6.79456 2.25465 6.36869C2.99243 5.21114 3.88718 4.31462 4.86891 3.70547C5.85008 3.10332 6.91339 2.78662 7.99967 2.78662C10.1646 2.78662 12.2742 4.05784 13.7445 6.36839ZM4.80634 7.99995C4.80634 9.76196 6.22939 11.1933 7.99967 11.1933C9.76996 11.1933 11.193 9.76196 11.193 7.99995C11.193 6.23795 9.76996 4.80662 7.99967 4.80662C6.22939 4.80662 4.80634 6.23795 4.80634 7.99995Z" fill="currentColor" stroke="currentColor"></path>
                <path d="M7.99961 6.09326C6.95294 6.09326 6.09961 6.94659 6.09961 7.99993C6.09961 9.04659 6.95294 9.89993 7.99961 9.89993C9.04628 9.89993 9.90628 9.04659 9.90628 7.99993C9.90628 6.95326 9.04628 6.09326 7.99961 6.09326Z" fill="currentColor"></path>
              </g>
            </svg>
          </button>
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-400" id={`${id}-error`} role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <input
        className={combinedClasses}
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        id={id}
        name={name}
        aria-label={ariaLabel}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        {...restProps}
      />
      {error && (
        <p className="mt-2 text-sm text-red-400" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;