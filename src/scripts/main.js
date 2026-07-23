'use strict';

// write code here
const inputs = document.getElementsByTagName('input');

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];
  const placeholder = input.name.toUpperCase();

  input.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for="${input.id}">${placeholder}</label>`,
  );
}
