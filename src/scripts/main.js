'use strict';

const inputs = [...document.querySelectorAll('input').values()];

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

for (const input of inputs) {
  const { name: inputName, id: inputId, parentElement } = input;

  input.placeholder = capitalize(inputName);

  const label = document.createElement('label');

  label.textContent = inputName;
  label.htmlFor = inputId;
  label.classList.add('field-label');

  parentElement.append(label);
}
