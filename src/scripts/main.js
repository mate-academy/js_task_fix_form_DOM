'use strict';

const form = document.querySelectorAll('form');
const topInputs = form[0].querySelectorAll('input');
const bottomInputs = form[1].querySelectorAll('input');
const allInputs = [...topInputs, ...bottomInputs];

for (const input of allInputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.closest('.field').append(label);

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  const rewritedName = input.placeholder.split('').map((letter, i) => {
    if (letter === letter.toUpperCase() && i !== 0) {
      return ` ${letter}`;
    }

    return letter;
  }).join('');

  label.textContent = rewritedName;
  input.placeholder = rewritedName;
}
