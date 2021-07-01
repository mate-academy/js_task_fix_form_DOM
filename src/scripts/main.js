'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(input => {
  const inputParent = input.parentElement;
  const inputLabel = document.createElement('label');

  inputLabel.for = input.id;
  inputLabel.textContent = input.name.toUpperCase();
  inputLabel.className += 'field-label';

  inputParent.appendChild(inputLabel);
});

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
