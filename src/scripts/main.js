'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const elementId = input.id;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', elementId);
  label.textContent = input.name;

  const capitalizedPlaceholder =
    input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', capitalizedPlaceholder);

  input.parentNode.appendChild(label);
}
