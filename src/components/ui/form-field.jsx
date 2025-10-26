import Input from './input';

/**
 * FormField component that combines label and input with consistent spacing and styling
 * @param {Object} props - Component props
 * @param {string} props.label - Label text for the input
 * @param {string} [props.id] - Input ID for label association
 * @param {'text'|'email'|'password'|'number'|'tel'|'url'} [props.type='text'] - Input type
 * @param {string} [props.value=''] - Input value
 * @param {Function} props.onChange - Change handler function
 * @param {string} [props.placeholder=''] - Placeholder text
 * @param {boolean} [props.required=false] - Whether input is required
 * @param {boolean} [props.disabled=false] - Whether input is disabled
 * @param {string} [props.className=''] - Additional CSS classes for the container
 * @param {string} [props.inputClassName=''] - Additional CSS classes for the input
 * @param {string} [props.labelClassName=''] - Additional CSS classes for the label
 * @param {string} [props.name] - Input name attribute
 * @param {boolean} [props.showPasswordToggle=false] - Show password visibility toggle for password inputs
 * @param {string} [props.error] - Error message to display
 * @param {string} [props.hint] - Hint text to display below the input
 * @param {Object} [props.restProps] - Additional props passed to Input component
 * @returns {JSX.Element} FormField component
 */
const FormField = ({
  label,
  id,
  type = 'text',
  value = '',
  onChange,
  placeholder = '',
  required = false,
  disabled = false,
  className = '',
  inputClassName = '',
  labelClassName = '',
  name,
  showPasswordToggle = false,
  error,
  hint,
  ...restProps
}) => {
  const fieldId = id || name || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`mb-6 ${className}`}>
      <label
        className={`block text-sm mb-2 text-white font-medium ${labelClassName}`}
        htmlFor={fieldId}
      >
        {label}
        {required && (
          <span className="text-red-400 ml-1" aria-label="required">
            *
          </span>
        )}
      </label>

      <Input
        id={fieldId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={inputClassName}
        name={name || fieldId}
        showPasswordToggle={showPasswordToggle}
        error={error}
        ariaLabel={label}
        {...restProps}
      />

      {hint && !error && (
        <p className="mt-2 text-sm text-white text-opacity-70">
          {hint}
        </p>
      )}
    </div>
  );
};

export default FormField;