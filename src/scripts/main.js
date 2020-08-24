'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = `${input.id}`;
  label.textContent = `${fromCamelToNormal(input.name)}`;

  input.placeholder = `${fromCamelToNormal(input.name)}`;
  input.before(label);
});

function fromCamelToNormal(str) {
  return str
    .split(/(?=[A-Z])/)
    .map(word => word.codePointAt(0) > 90
      ? word.replace(/^./, l => l.toUpperCase())
      : word.toLowerCase())
    .join(' ');
}
