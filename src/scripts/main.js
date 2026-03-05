'use strict';

const inputList = Array.from(document.querySelectorAll('form input'));

inputList.forEach((input) => {
  if (!input.id) {
    input.id = input.name;
  }

  const newLabel = document.createElement('label');

  newLabel.classList.add('field-label');

  newLabel.setAttribute('for', input.id);

  newLabel.textContent = input.name;

  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.before(newLabel);
});
