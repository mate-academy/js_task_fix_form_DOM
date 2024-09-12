'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const labelElement = document.createElement('label');

  labelElement.className = 'field-label';
  labelElement.textContent = input.name.replace(/Name/, ' Name');
  input.after(labelElement);

  const inputAtr = input.getAttribute('id');

  labelElement.setAttribute('for', inputAtr);

  const textPlaceholder = input.name.slice(0, 1).toUpperCase()
    + input.name.slice(1).replace(/Name/, ' Name');

  input.setAttribute('placeholder', textPlaceholder);
}
