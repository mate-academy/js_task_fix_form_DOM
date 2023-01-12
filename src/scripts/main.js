'use strict';

const listNodeInput = document.querySelectorAll('input');
const inputs = [...listNodeInput];
const listNodeField = document.querySelectorAll('.field');
const fields = [...listNodeField];
let count = 0;

for (const input of inputs) {
  const newLabel = document.createElement('label');
  const atribClass = document.createAttribute('class');
  const atribFor = document.createAttribute('for');

  atribClass.value = 'field-label';
  atribFor.value = input.getAttribute('id');

  newLabel.setAttributeNode(atribClass);
  newLabel.setAttributeNode(atribFor);
  newLabel.textContent = input.getAttribute('name').toUpperCase();
  fields[count].append(newLabel);
  count++;

  const atribPlaceholder = document.createAttribute('placeholder');

  atribPlaceholder.value = input.getAttribute('name');
  input.setAttributeNode(atribPlaceholder);
}
