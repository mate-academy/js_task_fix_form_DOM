'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const { id, name: inputName } = input;
  const label = document.createElement('label');

  input.parentElement.appendChild(label);
  label.classList.add('field-label');
  label.textContent = prepareText(inputName);
  label.setAttribute('for', `${id}`);

  input.setAttribute('placeholder', `${prepareText(inputName)}`);
});

function prepareText(str) {
  const letters = str.split('');
  const res = [];
  let word = '';

  letters.forEach((ch) => {
    if (ch === ch.toUpperCase()) {
      res.push(word);
      word = '';
    }

    if (!word) {
      word += ch.toUpperCase();
    } else {
      word += ch;
    }
  });

  res.push(word);

  return res.join(' ');
}
