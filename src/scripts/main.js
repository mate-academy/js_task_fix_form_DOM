'use strict';

const inputs = document.querySelectorAll('form input');

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

const formatInputName = (str) => {
  return str
    .replace(/([A-Z])/g, ' $1')
    .split(' ')
    .map((word) => capitalize(word))
    .join(' ');
};

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = formatInputName(input.name);

  input.setAttribute('placeholder', formatInputName(input.name));

  input.parentNode.insertBefore(label, input);
});
