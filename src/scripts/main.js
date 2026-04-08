'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = correctName(input.name);
  input.setAttribute('placeholder', correctName(input.name));
  input.before(label);
});

function correctName(word) {
  let result = '';

  result += word[0].toUpperCase();

  for (let i = 1; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i]) {
      result += ' ' + word[i];
    } else {
      result += word[i];
    }
  }

  return result;
}
