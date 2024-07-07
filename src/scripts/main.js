'use strict';

const inputs = document.querySelectorAll('input');
const normalizeName = (str) => {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    if (ch.toUpperCase() === ch) {
      res += ' ' + ch;
      continue;
    }

    if (i === 0) {
      res += ch.toUpperCase();
      continue;
    }

    res += ch;
  }

  return res;
};

Array.from(inputs).forEach((input) => {
  const label = document.createElement('label');
  const inputNormalizeName = normalizeName(input.name);

  label.htmlFor = input.id;
  label.classList.add('field-label');
  label.textContent = inputNormalizeName;

  input.placeholder = inputNormalizeName;
  input.insertAdjacentElement('beforebegin', label);
});
