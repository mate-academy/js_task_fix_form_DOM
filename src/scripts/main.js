'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');
  const inputName = splitWords(input.getAttribute('name'));

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = inputName.toUpperCase();

  input.placeholder = input.name[0].toUpperCase() + inputName.slice(1);

  input.parentElement.append(label);
}

function splitWords(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    if (i !== 0 && ch === ch.toUpperCase()) {
      result += ` ${ch}`;
    } else {
      result += ch;
    }

  }

  return result;
}
