'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = normalizeString(input.name);
  input.parentElement.append(label);
  input.setAttribute('placeholder', normalizeString(input.name));
});

function normalizeString(str) {
  const normal = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();

  return normal[0].toUpperCase() + normal.slice(1);
}
