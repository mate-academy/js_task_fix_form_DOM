'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  const fixedText = input.name[0].toUpperCase()
    + input.name.slice(1).replace(/([A-Z])/g, ' $1');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = fixedText;
  input.placeholder = fixedText;
  input.parentElement.append(label);
}
