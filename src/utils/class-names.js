/**
 * Utility function to conditionally join classNames together
 * @param {...(string|undefined|null|false)} classes - Class names to join
 * @returns {string} Joined class names
 */
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default classNames;