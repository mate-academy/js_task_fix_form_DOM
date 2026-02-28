'use strict';

const signUpForm = document.getElementsByTagName('form')[0];
const signInForm = document.getElementsByTagName('form')[1];

const signUpInputs = Array.from(signUpForm.getElementsByTagName('input'));
const signInInputs = Array.from(signInForm.getElementsByTagName('input'));

signUpInputs.forEach((input) => {
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  const label = document.createElement('label');

  label.textContent = input.name;
  label.className = 'field-label';
  label.setAttribute('for', input.id);

  input.parentNode.insertBefore(label, input);
});

signInInputs.forEach((input) => {
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  const label = document.createElement('label');

  label.textContent = input.name;
  label.className = 'field-label';
  label.setAttribute('for', input.id);

  input.parentNode.insertBefore(label, input);
});
