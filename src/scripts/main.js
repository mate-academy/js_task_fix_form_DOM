'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');
  const InputName = input.name;

  label.classList.add('field-label');
  label.innerText = normalizeString(InputName);
  input.insertAdjacentElement('beforebegin', label);

  input.placeholder = normalizeString(InputName);
}

function normalizeString(str) {
  const normalizedStr = str.charAt(0).toUpperCase() + str.slice(1);

  return normalizedStr.split(/(?=[A-Z])/).join(' ');
}
