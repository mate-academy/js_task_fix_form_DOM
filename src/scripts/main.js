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
  let inputName = input.getAttribute('name');
  let inputNameStyle = '';
  let temporary = '';

  atribClass.value = 'field-label';
  atribFor.value = input.getAttribute('id');

  newLabel.setAttributeNode(atribClass);
  newLabel.setAttributeNode(atribFor);

  for (let i = 0; i < inputName.length; i++) {
    if (inputName[i] === inputName[i].toUpperCase()) {
      temporary += ' ' + inputName[i];
    } else {
      temporary += inputName[i];
    }
  }

  inputName = temporary;

  newLabel.textContent = inputName.toUpperCase();

  fields[count].append(newLabel);
  count++;

  const atribPlaceholder = document.createAttribute('placeholder');

  inputNameStyle = inputName.slice(0, 1).toUpperCase();
  inputNameStyle += inputName.slice(1, inputName.length);

  atribPlaceholder.value = inputNameStyle;
  input.setAttributeNode(atribPlaceholder);
}
