'use strict';

const [...inputs] = document.querySelectorAll('input');

const stringConverter = (letter, i) => {
  if (letter === letter.toUpperCase() && i !== 0) {
    return ` ${letter}`;
  }

  return letter;
};

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  const rewritedName = input.name
    .split('')
    .map(stringConverter)
    .join('');

  label.textContent = rewritedName;
  input.placeholder = rewritedName[0].toUpperCase() + rewritedName.slice(1);

  input.closest('.field').append(label);
}
