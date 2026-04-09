'use strict';

const inputs = document.querySelectorAll('form input');

for (const input of inputs) {
  const label = document.createElement('label');
  const parentEl = input.parentElement;
  const inputId = input.getAttribute('id');
  const inputName = input.getAttribute('name');

  const plchldrText = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', inputId);
  input.setAttribute('placeholder', plchldrText);
  label.textContent = inputName;

  parentEl.insertBefore(label, input);
}
