'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const label = document.createElement('label');

  label.htmlFor = input.id;
  label.className = 'field-label';

  switch (input.name) {
    case 'firstName':
      input.placeholder = 'First name';
      break;

    case 'lastName':
      input.placeholder = 'Last name';
      break;

    case 'email':
      input.placeholder = 'Email';
      break;

    case 'password':
      input.placeholder = 'Password';
      break;
  }

  label.textContent = input.placeholder;

  input.parentElement.append(label);
}
