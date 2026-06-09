'use strict';

// write code here

const allInputs = document.querySelectorAll('form input');

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

allInputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('class');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = capitalize(input.name);

  input.placeholder = capitalize(input.name);
  input.parentElement.append(label);
});
