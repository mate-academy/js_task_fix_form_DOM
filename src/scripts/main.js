'use strict';

const inputs = [ ...document.querySelectorAll('input') ];

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);

  let inputName = '';

  for (let i = 0; i < input.name.length; i++) {
    if (i === 0) {
      inputName += input.name[i].toUpperCase();
    } else if (input.name[i].toUpperCase() === input.name[i]) {
      inputName += ` ${input.name[i]}`;
    } else {
      inputName += input.name[i];
    };
  }

  label.textContent = inputName;

  input.parentElement.append(label);

  input.setAttribute('placeholder', inputName);
});
