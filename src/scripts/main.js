'use strict';

const signUpName = document.getElementById('sign-up-name');
const signUpLastName = document.getElementById('sign-up-last-name');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const inputs = [...document.querySelectorAll('form input')];

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  input.parentNode.insertBefore(label, input);
  label.textContent = input.getAttribute('name');
});

signUpName.setAttribute('placeholder', 'FIRST NAME');
signUpLastName.setAttribute('placeholder', 'LAST NAME');
signUpEmail.setAttribute('placeholder', 'EMAIL');
signUpPassword.setAttribute('placeholder', 'PASSWORD');
signInEmail.setAttribute('placeholder', 'EMAIL');
signInPassword.setAttribute('placeholder', 'PASSWORD');
