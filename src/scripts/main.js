'use strict';

const fields = document.querySelectorAll('.field');
const inputs = document.querySelectorAll('input');

fields.forEach((item, i) => {
  item.insertAdjacentHTML('afterbegin', `
  <label class="field-label" for="${inputs[i].id}">${inputs[i].name}</label>
  `);

  inputs[i].placeholder = inputs[i].name[0].toUpperCase()
    + inputs[i].name.slice(1);
});
