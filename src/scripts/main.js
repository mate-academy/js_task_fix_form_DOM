'use strict';

const allInputs = document.querySelectorAll('input');

for (const input of allInputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = capitalize(input.name);

  input.setAttribute('placeholder', capitalize(input.name));

  input.parentElement.append(label);
}

function capitalize(str) {
  const copy = str.split('');

  for (let i = 1; i < copy.length; i++) {
    if (copy[i] === copy[i].toUpperCase()) {
      copy.splice(i, 0, ' ');
      i++;
    }
  }

  const result = copy.join('');

  return result[0].toUpperCase() + result.slice(1);
}
