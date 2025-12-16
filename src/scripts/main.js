'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.getAttribute('id'));
  label.textContent = input.getAttribute('name');

  input.parentNode.insertBefore(label, input);

  const inputPlaceholder =
    input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', inputPlaceholder);
});
