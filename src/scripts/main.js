'use strict';

const inputs = document.querySelectorAll('form input');

/**
 *
 * @param {string} str
 *
 * @returns {string}
 */
const normalize = (str) => {
  let normalizeStr = '';

  for (const char of str) {
    if (!normalizeStr) {
      normalizeStr += char.toUpperCase();
    } else if (char === char.toUpperCase()) {
      normalizeStr += ` ${char}`;
    } else {
      normalizeStr += char;
    }
  }

  return normalizeStr;
};

inputs.forEach((input) => {
  const id = input.getAttribute('id');
  const nameItem = normalize(input.getAttribute('name'));
  const label = document.createElement('label');
  let placeholder = document.createElement('placeholder');

  label.classList.add('field-label');
  label.setAttribute('for', id);
  label.textContent = nameItem;
  placeholder = nameItem;

  input.parentNode.insertBefore(label, input);
  input.setAttribute('placeholder', placeholder);
});
