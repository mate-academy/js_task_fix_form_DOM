'use strict';

const input = document.querySelectorAll('input');
const formArea = document.querySelectorAll('.field');

function unCamelize(string) {
  return string.replace(/([A-Z])/g, ' $1').trim();
}

for (let i = 0; i < formArea.length; i++) {
  formArea[i].insertAdjacentHTML('afterbegin', `
    <label class="field-label" for=${input[i].id}>
        ${unCamelize(input[i].name)}
    </label>
  `);
}

for (let i = 0; i < input.length; i++) {
  input[i].placeholder = unCamelize(input[i].name[0]
    .toUpperCase() + input[i].name
    .slice(1));
}
