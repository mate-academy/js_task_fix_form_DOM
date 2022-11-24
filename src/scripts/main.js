'use strict';

const formFields = document.querySelectorAll('.field-text');

for (const textField of [...formFields]) {
  const label = document.createElement('label');

  if (textField.name === 'firstName' || `${textField.name}` === 'lastName') {
    label.textContent = textField.name.split('N').join(' N');
  } else {
    label.textContent = `${textField.name}`;
  }

  label.className = 'field-label';
  label.setAttribute('for', `${textField.id}`);
  textField.parentElement.insertBefore(label, textField);

  switch (textField.name) {
    case 'firstName':
      textField.placeholder = 'first Name'.toUpperCase();
      break;
    case 'lastName':
      textField.placeholder = 'last Name'.toUpperCase();
      break;
    case 'email':
      textField.placeholder = 'email'.toUpperCase();
      break;
    case 'password':
      textField.placeholder = 'password'.toUpperCase();
      break;
  }
}
