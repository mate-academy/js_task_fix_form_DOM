'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.parentElement.prepend(label);

  if (input.name === 'firstName') {
    input.placeholder = 'First Name';
  } else if (input.name === 'lastName') {
    input.placeholder = 'Last Name';
  } else if (input.name === 'email') {
    input.placeholder = 'Email';
  } else {
    input.placeholder = 'Password';
  }
});
