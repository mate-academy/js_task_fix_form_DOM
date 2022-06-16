'use strict';

function normalizeText(string) {
  const spaced = string.split(/(?=[A-Z])/).join(' ');

  return spaced[0].toUpperCase() + spaced.slice(1);
}

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = inputs[i].id;
  label.textContent = normalizeText(inputs[i].name);
  inputs[i].placeholder = normalizeText(inputs[i].name);
  inputs[i].parentElement.append(label);
}
