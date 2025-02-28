'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const rightPlaceholder = input.name[0].toUpperCase() + input.name.slice(1);
  const newLabel = document.createElement('label');

  newLabel.classList.add('field-label');
  newLabel.setAttribute('for', input.id);
  newLabel.textContent = input.name;

  input.setAttribute('placeholder', rightPlaceholder);
  input.parentNode.prepend(newLabel);
});


// console.log(inputs[0].attributes.id);
