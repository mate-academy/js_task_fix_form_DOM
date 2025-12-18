'use strict';

const inputs = document.querySelectorAll('form input');

for (const input of inputs) {
  let inputName = input.getAttribute('name');
  const inputId = input.getAttribute('id');
  const label = document.createElement('label');

  label.textContent = inputName;
  label.classList.add('field-label');
  label.setAttribute('for', inputId);

  input.parentElement.append(label);

  inputName = inputName[0].toUpperCase() + inputName.slice(1);
  input.setAttribute('placeholder', inputName);
}

// write code here
