'use strict';

const allInputs = document.body.children[0].querySelectorAll('form input');

const labelArray = [];

for (const input of allInputs) {
  const label = document.createElement('label');

  label.htmlFor = input.id;
  label.textContent = input.name;
  label.className = 'field-label';
  labelArray.push(label);

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
}

const allFieldsWithInput = document.body.querySelectorAll('.field');

for (let i = 0; i < [...allFieldsWithInput].length; i++) {
  [...allFieldsWithInput][i].append([...labelArray][i]);
}
