'use strict';

const allInputs = document.querySelectorAll('form input');

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

for (const input of allInputs) {
  const inputName = input.getAttribute('name');
  const inputId = input.getAttribute('id');
  const parentContainer = input.parentElement;

  const label = document.createElement('label');

  const formattedName = capitalize(inputName);

  label.classList.add('field-label');

  if (inputId) {
    label.setAttribute('for', inputId);
  }

  label.textContent = formattedName;

  input.setAttribute('placeholder', formattedName);

  parentContainer.append(label);
}
