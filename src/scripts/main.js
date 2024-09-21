'use strict';

const inputEmail = document.getElementById('sign-in-email');
const inputPassword = document.getElementById('sign-in-password');

function createLabelAndPlaceholder(input) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  label.setAttribute('for', input.id);

  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.parentNode.insertBefore(label, input);
}

createLabelAndPlaceholder(inputEmail);
createLabelAndPlaceholder(inputPassword);
