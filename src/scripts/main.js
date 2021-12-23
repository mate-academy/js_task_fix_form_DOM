'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  let textName = input.name.split(/(?=[A-Z])/gs).join(' ');

  textName = textName[0].toUpperCase() + textName.slice(1);
  input.placeholder = textName;

  input.parentElement.insertAdjacentHTML('afterbegin', `
    <label class="field-label" for="${input.id}">${textName}</label>
    `);
}
