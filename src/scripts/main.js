'use strict';

const inputs = [...document.querySelectorAll('.field-text')];
const labelTextMap = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  password: 'Password',
};

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.htmlFor = input.id;
  label.className = 'field-label';

  input.insertAdjacentElement('beforebegin', label);

  if (input.name in labelTextMap) {
    label.textContent = labelTextMap[input.name];
  }

  if (input.name in labelTextMap) {
    input.placeholder = label.textContent = labelTextMap[input.name];
  }
});
