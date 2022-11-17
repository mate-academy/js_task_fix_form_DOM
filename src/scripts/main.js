'use strict';

const inputList = document.querySelectorAll('.field input');

[ ...inputList ].forEach((input) => {
  const inputIdAttr = input.id;
  const inputName = input.name;

  input.placeholder = inputName[0].toUpperCase() + inputName.slice(1);

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.for = inputIdAttr;
  label.textContent = inputName.toUpperCase();

  input.before(label);
});
