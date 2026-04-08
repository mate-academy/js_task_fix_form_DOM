'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  const formatPlaceholderText = (text) =>
    text
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');

  inputs.forEach((input) => {
    if (!input.name) {
      return;
    }

    if (!input.id) {
      input.id = input.name; // ✅ Assign ID if missing
    }

    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = formatPlaceholderText(input.name);

    input.setAttribute('placeholder', formatPlaceholderText(input.name));

    input.parentNode.insertBefore(label, input);
  });
});
