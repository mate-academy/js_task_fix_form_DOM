'use strict';

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];
  const parentInput = input.parentNode;
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', input.getAttribute('id'));
  label.textContent = input.getAttribute('name');

  const placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', placeholder);

  parentInput.insertBefore(label, parentInput.firstChild);
}
