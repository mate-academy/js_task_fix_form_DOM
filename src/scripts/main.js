'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((element) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', element.getAttribute('id'));
  element.parentNode.insertBefore(label, element);

  if (element.name === 'firstName') {
    label.textContent = 'FIRST NAME';
  }

  if (element.name === 'lastName') {
    label.textContent = 'LAST NAME';
  }

  if (element.name === 'email') {
    label.textContent = 'EMAIL';
  }

  if (element.name === 'password') {
    label.textContent = 'PASSWORD';
  }
});

inputs.forEach((input) => {
  if (input.name === 'firstName') {
    input.placeholder = 'First name';
  }

  if (input.name === 'lastName') {
    input.placeholder = 'Last name';
  }

  if (input.name === 'email') {
    input.placeholder = 'Email';
  }

  if (input.name === 'password') {
    input.placeholder = 'Password';
  }
});
