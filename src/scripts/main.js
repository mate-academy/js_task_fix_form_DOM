'use strict';

const inputs = document.querySelectorAll('input');
const fields = document.querySelectorAll('.field');

for (const input of inputs) {
  // const nameToUpperCase = input.name[0].toUpperCase() + input.name.slice(1);
  const nameToUpperCase = input.name.toUpperCase();

  input.setAttribute('placeholder', nameToUpperCase);
}

for (const field of fields) {
  const labels = document.createElement('label');

  labels.className = 'field-label';
  labels.setAttribute('for', field.children[0].id);
  labels.textContent = field.children[0].name;

  field.append(labels);
};
