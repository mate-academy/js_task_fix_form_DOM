'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input, index) => {
    const label = document.createElement('label');

    label.classList.add('field-label');

    if (!input.id) {
      input.id = `input-${index}-${input.name || 'field'}`;
    }

    label.htmlFor = input.id;
    label.textContent = input.name || 'Field';

    const parentInput = input.parentElement;

    if (parentInput) {
      parentInput.prepend(label);
    }

    const placeholderText = input.name
      ? input.name.charAt(0).toUpperCase() + input.name.slice(1)
      : 'Field';

    input.placeholder = placeholderText;
  });
});
