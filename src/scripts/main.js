'use strict';

const inputs = document.querySelectorAll('.field-text');

const normalizeName = (string) => {
  return string[0].toUpperCase()
        + string.slice(1).replace(/[A-Z]/g, x => ' ' + x);
};

for (const input of [...inputs]) {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.className = 'field-label';
  label.textContent = normalizeName(input.name).toUpperCase();

  input.placeholder = normalizeName(input.name);

  input.parentElement.insertBefore(label, input);
};
