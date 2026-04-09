'use strict';

// write code here
const formInputs = [...document.body.querySelectorAll('form input')];

formInputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.textContent = `${input.name}:`;
  label.classList.add('field-label');

  input.parentElement.insertBefore(label, input);

  const capitalized = input.name[0].toUpperCase() + input.name.slice(1);

  input.placeholder = capitalized;
});
