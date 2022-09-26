'use strict';

const inputs = document.querySelectorAll('input');

const splitLabel = text => {
  let res = '';

  for (let i = 0; i < text.length; i++) {
    if (i === 0) {
      res += text[i].toUpperCase();
      continue;
    }

    if (text[i] === text[i].toUpperCase()) {
      res += ' ';
    }
    res += text[i];
  }

  return res;
};

for (const input of inputs) {
  input.insertAdjacentHTML('beforebegin', `
    <label class="field-label" for="${input.id}">
        ${splitLabel(input.name)}
    </label>
  `);
  input.placeholder = splitLabel(input.name);
}
