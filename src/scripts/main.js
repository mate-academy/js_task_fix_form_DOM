'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const inputLabel = document.createElement('label');

  inputLabel.className = 'field-label';
  inputLabel.setAttribute('for', input.id);
  inputLabel.textContent = input.name;

  input.parentElement.prepend(inputLabel);
}

inputs.forEach(input => {
  switch (input.name) {
    case 'firstName': {
      input.placeholder = 'First Name';
      break;
    }

    case 'lastName': {
      input.placeholder = 'Last Name';
      break;
    }

    case 'email': {
      input.placeholder = 'Email';
      break;
    }

    case 'password': {
      input.placeholder = 'Password';
      break;
    }
  }
});
