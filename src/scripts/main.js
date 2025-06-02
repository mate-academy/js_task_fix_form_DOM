'use strict';

const inputs = document.querySelectorAll('form input');

for (const input of inputs) {
  const capitalazedName = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = capitalazedName;

  input.placeholder = capitalazedName;

  input.parentElement.appendChild(label);
}
