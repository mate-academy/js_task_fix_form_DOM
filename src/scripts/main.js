'use strict';

const inputElements = document.getElementsByTagName('input');

for (const input of inputElements) {
  const lableElement = document.createElement('lable');

  lableElement.className = 'field-label';
  lableElement.htmlFof = input.id;

  switch (input.name) {
    case 'firstName':
      input.placeholder = 'First name';
      break;

    case 'lastName':
      input.placeholder = 'Last Name';
      break;

    case 'email':
      input.placeholder = 'Email';
      break;

    case 'password':
      input.placeholder = 'Password';
      break;
  }

  lableElement.textContent = input.placeholder;

  input.parentElement.append(lableElement);
};
