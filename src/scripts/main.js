'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

for (const input of inputs) {
  const labelName = input.name;
  const placeholderName =
    labelName.charAt(0).toUpperCase() + labelName.slice(1);

  if (!input.id) {
    input.id = `input-${labelName}`;
  }

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = labelName.toUpperCase();

  input.placeholder = placeholderName;
  input.parentElement.insertBefore(label, input);
}
