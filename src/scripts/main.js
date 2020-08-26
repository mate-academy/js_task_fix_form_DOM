'use strict';

const inputContainers = document.querySelectorAll('.field');

for (const inputContainer of [...inputContainers]) {
  const input = inputContainer.querySelector('input');
  let inputName = [];

  (input.name)
    .split('')
    .forEach((letter, index) => {
      if (index === 0) {
        inputName.push(letter.toUpperCase());
      } else if (letter.toUpperCase() === letter) {
        inputName.push(` ${letter}`);
      } else {
        inputName.push(letter);
      }
    });

  inputName = inputName.join('');

  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = inputName.toUpperCase();
  label.htmlFor = input.id;

  inputContainer.prepend(label);

  input.placeholder = inputName;
}
