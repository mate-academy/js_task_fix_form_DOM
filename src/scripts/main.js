'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const elementId = input.id;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', elementId);

  const labelText = input.name.replace(/([a-z])([A-Z])/g, '$1 $2');

  label.textContent = labelText;

  const capitalizedPlaceholder =
    labelText.charAt(0).toUpperCase() + labelText.slice(1);

  input.setAttribute('placeholder', capitalizedPlaceholder);

  input.parentNode.appendChild(label);
}
