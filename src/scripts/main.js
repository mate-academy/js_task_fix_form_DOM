'use strict';

const inputContainers = document.querySelectorAll('.field');

for (const inputContainer of [...inputContainers]) {
  const input = inputContainer.querySelector('input');

  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = input.name;
  label.htmlFor = input.id;

  inputContainer.prepend(label);

  const formattedPlaceholder = [];

  (input.name)
    .split('')
    .forEach((letter, index) => {
      if (index === 0) {
        formattedPlaceholder.push(letter.toUpperCase());
      } else if (letter.toUpperCase() === letter) {
        formattedPlaceholder.push(` ${letter}`);
      } else {
        formattedPlaceholder.push(letter);
      }
    });

  input.placeholder = formattedPlaceholder.join('');
}
