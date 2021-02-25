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
  label.textContent = input.name;

  input.closest('.field').append(label);

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  const rewritedName = input.placeholder
    .split('')
    .map(stringConverter)
    .join('');

  label.textContent = rewritedName;
  input.placeholder = rewritedName;
}
