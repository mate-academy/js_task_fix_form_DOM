'use strict';

const input = document.querySelectorAll('input');

for (let i = 0; i < input.length; i++) {
  const text = input[i].name;

  input[i].insertAdjacentHTML('beforebegin',
    `<label class="field-label"
    for="${input[i].id}">${text.toUpperCase()}</label>`);

  input[i].setAttribute('placeholder',
    `${text[0].toUpperCase() + text.slice(1)}`);
}
