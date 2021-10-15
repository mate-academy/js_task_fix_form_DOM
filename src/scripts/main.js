'use strict';

// write code here
const input = document.querySelectorAll('input');

for (let i = 0; i < input.length; i++) {
  let text = input[i].name;

  for (let j = text.length - 1; j >= 0; j--) {
    if (text[j] === text[j].toUpperCase()) {
      text = text.slice(0, j) + ' ' + text.slice(j);
    }
  }

  input[i].insertAdjacentHTML('beforebegin',
    `<label class="field-label"
    for="${input[i].id}">${text.toUpperCase()}</label>`);

  input[i].setAttribute('placeholder',
    `${text[0].toUpperCase() + text.slice(1)}`);
}
