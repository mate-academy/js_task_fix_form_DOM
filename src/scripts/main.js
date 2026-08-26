'use strict';

const formInput = document.querySelectorAll('form input');

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

for (const input of formInput) {
  const inputName = input.name;
  const inputId = input.id;

  input.placeholder = capitalize(inputName);

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = inputId;
  label.textContent = inputName;

  input.before(label);
}
