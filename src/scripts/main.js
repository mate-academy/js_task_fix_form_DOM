'use strict';

const inputs = document.querySelectorAll('.field-text');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');
  const inputName = inputs[i].getAttribute('name');
  const placeholder = inputName[0].toUpperCase() + inputName.substring(1);

  label.setAttribute('for', inputs[i].getAttribute('id'));
  label.className = 'field-label';
  label.textContent = inputName;
  inputs[i].after(label);

  inputs[i].setAttribute('placeholder', placeholder);
}
