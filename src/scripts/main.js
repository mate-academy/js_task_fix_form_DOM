'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.htmlFor = input.id;
  label.textContent = input.name;
  label.className = 'field-label';

  input.placeholder
    = input.name.charAt(0).toUpperCase()
    + input.name.toLowerCase().slice(1);

  input.parentElement.append(label);
}
