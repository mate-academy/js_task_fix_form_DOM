'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const lable = document.createElement('lable');

  lable.classList.add('field-lable');

  lable.textContent = input.name.toUpperCase();
  lable.setAttribute('for', input.id);
  input.parentElement.prepend(lable);

  const placeHolder = input.name.replace(/([A-Z])/g, ` $1`).toLowerCase();

  input.placeholder = placeHolder;
}
