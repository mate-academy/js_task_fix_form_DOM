'use strict';

const allInputs = document.querySelectorAll('form input');

for (const inputElement of allInputs) {
  const newLabel = document.createElement('label');

  newLabel.classList.add('field-label');
  newLabel.setAttribute('for', inputElement.id);

  const inputText =
    inputElement.name[0].toUpperCase() + inputElement.name.slice(1);

  newLabel.textContent = inputElement.name;

  inputElement.setAttribute('placeholder', inputText);

  inputElement.parentElement.appendChild(newLabel);
}
