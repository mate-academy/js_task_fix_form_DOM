'use strict';

const forms = document.querySelectorAll('form');

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input, index) => {
    const fieldName = input.name || `field${index}`;

    if (!input.id) {
      input.id = `${fieldName}-input`;
    }

    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = input.id;

    const labelText = capitalize(fieldName);

    label.textContent = labelText;
    input.placeholder = labelText;
    input.parentNode.insertBefore(label, input);
  });
});
