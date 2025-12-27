'use strict';

const fields = document.querySelectorAll('form input');

fields.forEach((element) => {
  const nameOfInput = element.name;
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = element.id;
  label.textContent = nameOfInput;
  element.placeholder = nameOfInput[0].toUpperCase() + nameOfInput.slice(1);

  const field = element.parentElement;

  field.appendChild(label);
});
