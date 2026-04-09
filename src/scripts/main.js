'use strict';

// write code here

const inputElement = document.querySelectorAll('form input');

inputElement.forEach((input) => {
  const inputName = input.name;
  const id = input.id;

  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', id);

  label.textContent = inputName;

  const placeholder = inputName[0].toUpperCase() + inputName.slice(1);

  input.placeholder = placeholder;

  const inpureParent = input.parentElement;

  inpureParent.prepend(label);
});
