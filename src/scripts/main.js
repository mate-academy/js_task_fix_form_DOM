'use strict';

const inputs = document.querySelectorAll('form input');

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute = ("for", input.id);

  const text = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  label.textContent = text;

  input.placeholder = text;

  input.parentElement.insertBefore(label, input);
}
