'use strict';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for=${input.id}>${input.name}</label>`,
  );
  input.setAttribute('placeholder', capitalizeFirstLetter(input.name));
}
