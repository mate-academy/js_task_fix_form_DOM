'use strict';

const allInputs = [...document.getElementsByTagName('input')];

const capitalize = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

allInputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  label.textContent = input.name.replace(/([A-Z])/g, ' $1').trim();

  input.placeholder = capitalize(input.name.replace(/([A-Z])/g, ' $1').trim());
  input.parentNode.insertBefore(label, input);
});
