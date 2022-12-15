'use strict';

const allInputs = document.querySelectorAll('input');

for (let i = 0; i < allInputs.length; i++) {
  const newLabel = document.createElement('label');

  const inputName = allInputs[i].getAttribute('name');

  newLabel.className = 'field-label';
  newLabel.htmlFor = allInputs[i].id;
  newLabel.textContent = inputName;
  allInputs[i].parentElement.append(newLabel);

  const toUpperLetter = inputName.charAt(0)
    .toUpperCase() + inputName.slice(1);

  allInputs[i].placeholder = toUpperLetter;
}
