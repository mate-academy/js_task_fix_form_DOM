'use strict';

// write code here
const lablesMap = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  password: 'Password'
};

const inputs = document.querySelectorAll('form input');

inputs.forEach(input => {

  const name = input.getAttribute('name');

  if (!lablesMap[name]) {
    return;
  }

  const lable = document.createElement('lable');
  lable.classList.add('field-label');
  lable.textContent = lablesMap[name];
  lable.setAttribute('for', name);

  input.before(lable);

  input.setAttribute('placeholder', lablesMap[name]);
})





