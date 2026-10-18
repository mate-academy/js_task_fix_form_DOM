'use strict';

// write code here
const inputs = document.querySelectorAll('form input');
const fields = document.querySelectorAll('form .field');

for (let i = 0; i < fields.length; i++) {
  const newLabel = document.createElement('label');
  const id = inputs[i].getAttribute('id');
  const inputName = inputs[i].getAttribute('name');

  fields[i].append(newLabel);

  newLabel.setAttribute('class', 'field-label');
  newLabel.setAttribute('for', id);
  newLabel.textContent = inputName;
}

for (let j = 0; j < inputs.length; j++) {
  let inputName = inputs[j].getAttribute('name');

  inputName = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  inputs[j].setAttribute('placeholder', inputName);
}
