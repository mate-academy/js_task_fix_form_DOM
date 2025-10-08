'use strict';

function formatName(string) {
  const formatted = string.replace(/([A-Z])/g, ' $1').toLowerCase();

  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

function generateLabels(listInputs) {
  listInputs.forEach((input, index) => {
    if (!input.name) {
      return;
    }

    if (!input.id) {
      const sanitizedId =
        input.name.toLowerCase().replace(/\s+/g, '-') + '-' + index;

      input.id = sanitizedId;
    }

    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = formatName(input.name);
    input.setAttribute('placeholder', formatName(input.name));

    input.before(label);
  });
}

const inputs = document.querySelectorAll('form input');

if (inputs) {
  generateLabels(inputs);
}
