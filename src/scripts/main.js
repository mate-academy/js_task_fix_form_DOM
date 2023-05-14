'use strict';

const fields = document.querySelectorAll('.field');
const inputs = document.querySelectorAll('input');
const inputsArray = [ ...inputs ];
const fieldsArray = [ ...fields ];

for (const field of fieldsArray) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = field.children[0].name;
  label.htmlFor = field.children[0].id;
  field.append(label);
}

for (const input of inputsArray) {
  const nameFull = input.name;
  const lower = nameFull.toLocaleLowerCase();
  const result = lower.charAt(0).toUpperCase() + lower.slice(1);

  input.placeholder = result;
}
