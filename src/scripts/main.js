'use strict';

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;

  const formattedName = capitalize(input.name);

  label.textContent = formattedName;
  input.placeholder = formattedName;

  input.parentElement.append(label);
});
