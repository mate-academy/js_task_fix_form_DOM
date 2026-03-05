'use strict';

const inputs = document.querySelectorAll('input');

/** перша літера велика */
inputs.forEach((input) => {
  const labelText = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  /** label */
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = labelText;

  /** placeholder */
  input.placeholder = labelText;

  input.parentElement.appendChild(label);
});
