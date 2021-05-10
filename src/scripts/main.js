'use strict';

const inputs = [...document.querySelectorAll('input')];

for (let i = 0; i < inputs.length; i++) {
  const currentInput = inputs[i];

  currentInput.placeholder = currentInput.name;

  const item = document.createElement('label');

  item.setAttribute('for', currentInput.id);
  item.className = 'field-label';
  item.textContent = currentInput.name.toUpperCase();

  currentInput.parentNode.append(item);
}
