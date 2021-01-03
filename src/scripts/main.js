'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const lableElement = document.createElement('label');

  lableElement.className = 'field-label';
  lableElement.textContent = input.name;
  input.after(lableElement);

  const inputAtr = input.getAttribute('id');

  lableElement.setAttribute('for', inputAtr);

  const textPlaceholder = input.name.slice(0, 1).toUpperCase()
    + input.name.slice(1);

  input.setAttribute('placeholder', textPlaceholder);
}
