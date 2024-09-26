'use strict';

const inputs = document.querySelectorAll('form input');

const inputsArray = [...inputs];

for (const input of inputsArray) {
  input.htmlFor = input.id;

  const label = document.createElement('label');

  const fullName = [];

  for (let i = 0; i < input.name.length; i++) {
    if (input.name[i] === input.name[i].toLowerCase()) {
      fullName.push(input.name[i]);
    } else {
      fullName.push(',');
      fullName.push(input.name[i]);
    }
  };

  const resultingName = fullName
    .join('')
    .split(',')
    .map(letter => letter[0].toUpperCase() + letter.substring(1))
    .join(' ');

  label.className = 'field-label';
  label.textContent = resultingName;

  input.before(label);
  input.placeholder = resultingName;
};
