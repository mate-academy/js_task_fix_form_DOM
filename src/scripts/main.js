'use strict';

const forms = document.querySelectorAll('.field');
const inputs = document.querySelectorAll('input');

for (let i = 0; i < forms.length; i++) {
  forms[i].insertAdjacentHTML('afterbegin', `
  <label class='field-label' for='${inputs[i].id}'>${inputs[i].name}</label>
  `);

  inputs[i].placeholder = inputs[i]
    .name[0].toLocaleUpperCase() + inputs[i].name.slice(1);
};
