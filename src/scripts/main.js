'use strict';

const firstName = document.getElementById('sign-up-name');
const lastName = document.getElementById('sign-up-last-name');
const email = document.querySelectorAll('input[name="email"]');
const password = document.querySelectorAll('input[name="password"]');

// added first name label
const firstNameLabel = document.createElement('label');

firstNameLabel.innerHTML = 'First Name';
firstNameLabel.classList.add('field-label');
firstName.placeholder = 'First Name';
firstNameLabel.setAttribute('for', 'sign-up-name');
firstName.parentNode.insertBefore(firstNameLabel, firstName);

// added last name label
const lastNameLabel = document.createElement('label');

lastNameLabel.innerHTML = 'Last Name';
lastNameLabel.classList.add('field-label');
lastName.placeholder = 'Last Name';
lastNameLabel.setAttribute('for', 'sign-up-last-name');
lastName.parentNode.insertBefore(lastNameLabel, lastName);

// added email label
email.forEach((input) => {
  const emailLabel = document.createElement('label');

  emailLabel.innerHTML = 'Email';
  emailLabel.classList.add('field-label');
  input.placeholder = 'Email';
  emailLabel.setAttribute('for', input.id);
  input.parentNode.insertBefore(emailLabel, input);
});

// added password label
password.forEach((input) => {
  const passwordLabel = document.createElement('label');

  passwordLabel.innerHTML = 'Password';
  passwordLabel.classList.add('field-label');
  input.placeholder = 'Password';
  passwordLabel.setAttribute('for', input.id);
  input.parentNode.insertBefore(passwordLabel, input);
});
