'use strict';

// write code here
const inputs = document.querySelectorAll('input');

const formatName = (id) => {
  switch (id) {
    case 'sign-up-name':
      return 'Name';
    case 'sign-up-last-name':
      return 'Last Name';
    case 'sign-up-email':
      return 'Email';
    case 'sign-up-password':
      return 'Password';
    case 'sign-in-email':
      return 'Email';
    case 'sign-in-password':
      return 'Password';
  }
};

inputs.forEach((input) => {
  const inputId = input.id;
  const label = document.createElement('label');

  label.htmlFor = inputId;
  label.classList.add('field-label');
  label.textContent = formatName(inputId);

  input.placeholder = formatName(inputId);

  input.parentNode.insertBefore(label, input);
});
