'use strict';

function formatName(string) {
  if (!string) {
    return '';
  }

  const formatted = string.replace(/([A-Z])/g, ' $1').toLowerCase();

  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

const inputs = document.querySelectorAll('form input');

if (inputs) {
  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = formatName(input.name).toUpperCase();
    input.setAttribute('placeholder', formatName(input.name));

    input.before(label);
  });
}
