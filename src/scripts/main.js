'use strict';

const bodyElement = document.body;
const fields = bodyElement.querySelectorAll('.field');
const inputs = bodyElement.querySelectorAll('.field-text');

fields.forEach((elem, index) => {
  const label = document.createElement('label');
  const input = inputs[index];
  const inputName = inputs[index].getAttribute('name');
  const inputId = inputs[index].getAttribute('id');

  label.classList.add('field-label');
  label.setAttribute('for', inputId);
  label.textContent = inputName;

  elem.prepend(label);

  input.placeholder = inputName.slice(0, 1).toUpperCase() + inputName.slice(1);
});
// write code here
