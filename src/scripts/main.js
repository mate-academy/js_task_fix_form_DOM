'use strict';

const capitalizeFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const inputs = document.querySelectorAll('input');
const fields = document.querySelectorAll('.field');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');
  const nameOfInput = inputs[i].name;
  const input = inputs[i];

  label.setAttribute('for', input.id);
  label.setAttribute('class', 'field-label');
  label.textContent = nameOfInput;

  fields[i].prepend(label);

  input.setAttribute('placeholder', capitalizeFirst(nameOfInput));
}
