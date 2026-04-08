'use strict';

const inputFields = document.querySelectorAll('input');

/**
 * Decamelizes a string with a whitespace.
 *
 * @param str String in camelcase
 */
function decamelize(str) {
  if (typeof str !== 'string') {
    return '';
  }

  return str
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1 $2')
    .toLowerCase()
    .replace(/^./, (char) => char.toUpperCase());
}

if (inputFields) {
  for (const input of inputFields) {
    const decamelizedInputName = decamelize(input.name);

    // Create label element
    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = input.id;
    label.textContent = decamelizedInputName;

    // Modify DOM
    input.before(label);
    input.placeholder = decamelizedInputName;
  }
}
