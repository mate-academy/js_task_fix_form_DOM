'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const inputName = input.name;
  const label = document.createElement('label');

  label.className = 'field-label';

  if (!input.id) {
    input.id = inputName + '-input'; // email-input, password-input
  }
  label.htmlFor = input.id;

  const labelText = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  label.textContent = labelText;

  input.placeholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  input.parentElement.insertBefore(label, input);
}
