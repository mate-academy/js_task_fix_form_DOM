'use strict';

const fieldLabels = {
  firstName: 'First name',
  lastName: 'Last name',
  email: 'Email',
  password: 'Password',
};

const inputs = document.querySelectorAll('.field-text');

inputs.forEach((input) => {
  const labelText = fieldLabels[input.name];

  input.placeholder = labelText;

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = labelText;

  input.parentElement.append(label);
});
