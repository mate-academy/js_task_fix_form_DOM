'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = `field-label`;
  label.htmlFor = input.id;
  label.textContent = toOrdinaryText(input.name);

  input.parentElement.append(label);
  input.placeholder = toOrdinaryText(input.name);
});

function toOrdinaryText(camelCase) {
  const result = camelCase.replace(/([A-Z])/g, ' $1');

  return result[0].toUpperCase() + result.substring(1).toLowerCase();
}
