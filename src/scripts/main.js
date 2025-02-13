'use strict';

const emptyInputs = document.querySelectorAll('form input');

for (let i = 0; i < emptyInputs.length; i++) {
  const input = emptyInputs[i];
  const label = document.createElement('label');

  label.setAttribute('for', input.getAttribute('id'));

  label.textContent = input
    .getAttribute('name')
    .replace(/([A-Z])/g, ' $1')
    .trim();

  label.classList.add('field-label');

  const placeholderText = input
    .getAttribute('name')
    .replace(/([A-Z])/g, ' $1')
    .trim();

  input.setAttribute('placeholder', placeholderText);

  input.parentNode.insertBefore(label, input);
}
