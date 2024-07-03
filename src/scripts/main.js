'use strict';

const allInput = document.querySelectorAll('input');

for (const input of allInput) {
  const creatLabel = document.createElement('label');

  creatLabel.className = 'field-label';
  creatLabel.htmlFor = input.id;

  switch (input.id) {
    case 'sign-up-name':
      creatLabel.textContent = 'First Name';
      break;
    case 'sign-up-last-name':
      creatLabel.textContent = 'Last Name';
      break;
    case 'sign-up-email':
      creatLabel.textContent = 'Email';
      break;
    case 'sign-up-password':
      creatLabel.textContent = 'Password';
      break;
    case 'sign-in-email':
      creatLabel.textContent = 'Email';
      break;
    case 'sign-in-password':
      creatLabel.textContent = 'Password';
      break;
    default:
      creatLabel.textContent = input.name;
      break;
  }
  input.before(creatLabel);
  input.placeholder = capitalizeAndAddSpaces(input.name);
}

function capitalizeAndAddSpaces(string) {
  const spacedString = string.replace(/([A-Z])/g, ' $1').trim();

  return spacedString.charAt(0).toUpperCase() + spacedString.slice(1);
}
