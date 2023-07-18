'use strict';

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  document.createElement('label');

  const input = inputs[i];
  const parentInput = input.parentNode;
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', input.getAttribute('id'));
  label.textContent = input.getAttribute('name');

  let placeholder = label.textContent.charAt(0).toUpperCase();

  placeholder += label.textContent.slice(1);

  input.setAttribute('placeholder', placeholder);

  parentInput.insertBefore(label, parentInput.firstChild);
}
