'use strict';

const input = document.querySelectorAll('input');
const formArea = document.querySelectorAll('.field');

for (let i = 0; i < formArea.length; i++) {
  formArea[i].insertAdjacentHTML('afterbegin', `
    <label class="field-label" for=${input[i].id}>
        ${input[i].name.replace(/([A-Z])/g, ' $1').trim()}
    </label>
  `);
}

for (let i = 0; i < input.length; i++) {
  input[i].placeholder = (input[i].name[0].toUpperCase() + input[i].name
    .slice(1)).replace(/([A-Z])/g, ' $1').trim();
}
