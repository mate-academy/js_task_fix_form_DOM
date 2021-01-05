'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach(input => {
  input.insertAdjacentHTML('beforebegin', '<label></label>');

  input.previousElementSibling.className = 'field-label';
  input.previousElementSibling.htmlFor = input.id;
  input.previousElementSibling.textContent = input.name;

  for (const letter of input.name) {
    if (!(letter.charCodeAt() > 96)) {
      const firstWord = input.name.slice(0, input.name.indexOf(letter));

      const secondWord = input.name.slice(input.name.indexOf(letter));

      input.previousElementSibling.textContent = `${firstWord} ${secondWord}`;
    }
  }

  input.placeholder = input.name[0].toUpperCase()
  + input.name.slice(1);
});
