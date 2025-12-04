'use strict';

// write code here
const labelsMap = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  password: 'Password'
};

const inputs = document.querySelectorAll('form input');

inputs.forEach(input => {

  const name = input.getAttribute('name');

  if (!labelsMap[name]) {
    return;
  }

  const label = document.createElement('label');
  label.classList.add('field-label');
  label.textContent = labelsMap[name];
  label.setAttribute('for', input.id);

  input.before(label);

  input.setAttribute('placeholder', labelsMap[name]);
})
