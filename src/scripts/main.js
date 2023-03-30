'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = chageName(input.name);

  input.placeholder = chageName(input.name);

  input.parentElement.append(label);
}

function chageName(str) {
  const copyStr = str.split('');

  for (let i = 1; i < copyStr.length; i++) {
    if (copyStr[i] === copyStr[i].toUpperCase()) {
      copyStr[i - 1] += ' ';
    }
  }

  const result = copyStr.join('');

  return result[0].toUpperCase() + result.slice(1);
}
