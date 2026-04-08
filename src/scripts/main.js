'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.parentNode.insertBefore(label, input);

  if (label.textContent === 'firstName') {
    label.textContent = 'First Name';
  }

  if (label.textContent === 'lastName') {
    label.textContent = 'Last Name';
  }

  let placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  if (placeholder === 'FirstName') {
    placeholder = 'First Name';
  }

  if (placeholder === 'LastName') {
    placeholder = 'Last Name';
  }

  input.setAttribute('placeholder', placeholder);
});
