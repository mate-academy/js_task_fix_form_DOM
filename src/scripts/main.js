'use strict';

const inputs = document.querySelectorAll('form input');

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

inputs.forEach((input) => {
  const labelText = capitalize(input.name);

  input.placeholder = labelText;

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = labelText;

  input.parentElement.append(label);
});
