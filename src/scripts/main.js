'use strict';

function fixInput(inputElement, placeholderText, labelText) {
  if (inputElement) {
    inputElement.setAttribute('placeholder', placeholderText);

    const labelElement = document.createElement('label');

    labelElement.setAttribute('for', inputElement.id);
    labelElement.textContent = labelText;
    labelElement.classList.add('field-label');

    inputElement.parentNode.insertBefore(labelElement, inputElement);
  }
}

const firstNameInput = document.getElementById('sign-up-name');
const lastNameInput = document.getElementById('sign-up-last-name');
const emailInput = document.getElementById('sign-up-email');
const passwordInput = document.getElementById('sign-up-password');
const emailSignInInput = document.getElementById('sign-in-email');
const passwordSignInInput = document.getElementById('sign-in-password');

fixInput(firstNameInput, 'First name', 'First name');
fixInput(lastNameInput, 'Last name', 'Last name');
fixInput(emailInput, 'Email', 'Email');
fixInput(passwordInput, 'Password', 'Password');
fixInput(emailSignInInput, 'Email', 'Email');
fixInput(passwordSignInInput, 'Password', 'Password');
