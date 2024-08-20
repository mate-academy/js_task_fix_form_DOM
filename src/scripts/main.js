'use strict';

function addSpacesBeforeUpperLetters(input) {
  let result = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i].toUpperCase()) {
      result += ' ';
    }

    result += input[i].toUpperCase();
  }

  return result;
}

const inputs = Array.from(document.querySelectorAll('input'));

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.textContent = addSpacesBeforeUpperLetters(input.name);
  label.style.fontWeight = 'bold';
  label.setAttribute('for', input.id);

  input.setAttribute('placeholder', addSpacesBeforeUpperLetters(input.name));

  input.parentElement.insertBefore(label, input);
});
