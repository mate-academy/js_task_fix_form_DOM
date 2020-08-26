'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  let getName = `${input.name[0].toUpperCase()}`
  + `${input.name.slice(1).toLowerCase()}`;

  for (let i = 0; i < input.name.length; i++) {
    if (input.name[i] === input.name[i].toUpperCase()) {
      getName = `${input.name[0].toUpperCase()}`
        + `${input.name.slice(1, i)} `
        + `${input.name.slice(i)}`;
    }
  }
  input.setAttribute('placeholder', getName);

  const newLabel = document.createElement('label');

  newLabel.classList.add('field-label');
  newLabel.setAttribute('for', `${input.getAttribute('id')}`);
  newLabel.textContent = getName;
  input.before(newLabel);
});
