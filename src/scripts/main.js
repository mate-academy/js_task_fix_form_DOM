'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input, index) => {
  if (!input.name) {
    return;
  }

  if (!input.id) {
    input.id = input.name.toLowerCase().replace(/[\s_]+/g, '-');

    if (!input.id) {
      input.id = `field-${index + 1}`;
    }
  }

  const pretty = input.name
    .split(/[-_\s]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = pretty;

  input.placeholder = pretty;

  input.parentNode.insertBefore(label, input);
});
