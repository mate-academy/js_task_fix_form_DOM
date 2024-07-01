'use strict';

// write code here

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';

  const id = input.getAttribute('id');

  label.setAttribute('for', id);

  const text = input.getAttribute('name');

  label.textContent = text;

  input.setAttribute('placeholder', capitalize(text));

  input.insertAdjacentElement('beforebegin', label);
});

function capitalize(text) {
  let str = '';

  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      str =
        text.substring(0, i) +
        ' ' +
        text[i].toLowerCase() +
        text.substring(i + 1);

      return str;
    }
  }

  return text;
}
