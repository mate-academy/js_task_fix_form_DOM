'use strict';

const inputElements = document.querySelectorAll('form input');

function getName(inputName) {
  const splitName = inputName.split(/(?=[A-Z])/);
  const result = splitName.join(' ');

  return result[0].toUpperCase() + result.slice(1);
}

inputElements.forEach((input) => {
  input.setAttribute('placeholder', getName(input.name));

  const label = document.createElement('label');

  if (!input.id) {
    input.id = input.name;
  }

  label.textContent = getName(input.name);
  label.htmlFor = input.id;

  label.className = 'field-label';

  input.parentNode.appendChild(label)
});
