'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = camelCaseToSpace(input.name).toUpperCase();

  input.placeholder = capitalize(camelCaseToSpace(input.name));
  input.parentNode.insertBefore(label, input);
});

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function camelCaseToSpace(text) {
  return text.replace(/([A-Z])/g, ' $1').trim();
}
