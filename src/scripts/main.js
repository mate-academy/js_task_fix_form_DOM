'use strict';

// write code here

// const inputFirstName = document.querySelector('[name="firstName"');

// inputFirstName.setAttribute('placeholder', 'First Name');

// const labelElementFirstNameSingUp = document.createElement('label');

// inputFirstName.parentElement.append(labelElementFirstNameSingUp);

// labelElementFirstNameSingUp.className = 'field-label';
// labelElementFirstNameSingUp.innerText = 'First Name';
// labelElementFirstNameSingUp.setAttribute('for', 'sign-up-name');

// const inputLastName = document.querySelector('[name="lastName"');

// inputLastName.setAttribute('placeholder', 'Last Name');

// const labelElementLastNameSingUp = document.createElement('label');

// inputLastName.parentElement.append(labelElementLastNameSingUp);

// labelElementLastNameSingUp.className = 'field-label';
// labelElementLastNameSingUp.innerText = 'Last Name';
// labelElementLastNameSingUp.setAttribute('for', 'sign-up-last-name');

// const inputEmailSingUp = document.querySelector('[name="email"');

// inputEmailSingUp.setAttribute('placeholder', 'Email');

// const labelElementEmailSingUp = document.createElement('label');

// inputEmailSingUp.parentElement.append(labelElementEmailSingUp);

// labelElementEmailSingUp.className = 'field-label';
// labelElementEmailSingUp.innerText = 'Email';
// labelElementEmailSingUp.setAttribute('for', 'sign-up-email');

// const inputPasswordSingUp = document.querySelector('[name="password"');

// inputPasswordSingUp.setAttribute('placeholder', 'Password');

// const labelElementPasswordSingUp = document.createElement('label');

// inputPasswordSingUp.parentElement.append(labelElementPasswordSingUp);

// labelElementPasswordSingUp.className = 'field-label';
// labelElementPasswordSingUp.innerText = 'Password';
// labelElementPasswordSingUp.setAttribute('for', 'sign-up-password');

// const inputEmailSingIn = document.querySelector('#sign-in-email');

// inputEmailSingIn.setAttribute('placeholder', 'Email');

// const labelElementEmailSingIn = document.createElement('label');

// inputEmailSingIn.parentElement.append(labelElementEmailSingIn);

// labelElementEmailSingIn.className = 'field-label';
// labelElementEmailSingIn.innerText = 'Email';
// labelElementEmailSingIn.setAttribute('for', 'sign-in-email');

// const inputPasswordSingIn = document.querySelector('#sign-in-password');

// inputPasswordSingIn.setAttribute('placeholder', 'Password');

// const labelElementPasswordSingIn = document.createElement('label');

// inputPasswordSingIn.parentElement.append(labelElementPasswordSingIn);

// labelElementPasswordSingIn.className = 'field-label';
// labelElementPasswordSingIn.innerText = 'Password';
// labelElementPasswordSingIn.setAttribute('for', 'sign-in-password');

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(input => {
  const newName = input.id.split('-').slice(2);
  const camelCase = newName.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  const nameInput = camelCase.join(' ');

  const placeholderInput = document.querySelector(`#${input.id}`);

  placeholderInput.setAttribute('placeholder', `${nameInput}`);

  const createLabel = document.createElement('label');

  placeholderInput.parentElement.append(createLabel);

  createLabel.className = 'field-label';
  createLabel.innerText = `${nameInput}`;
  createLabel.setAttribute('for', `${input.id}`);
});
