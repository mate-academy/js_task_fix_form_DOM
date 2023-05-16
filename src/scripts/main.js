'use strict';

const fields = document.querySelectorAll('.field');
const inputs = document.querySelectorAll('input');
const inputsArray = [ ...inputs ];
const fieldsArray = [ ...fields ];

for (const field of fieldsArray) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = field.children[0].name;
  label.htmlFor = field.children[0].id;
  field.append(label);
}

/* const firstName = document.querySelector('label[for = sign-up-name]');
const lastName = document.querySelector('label[for = sign-up-last-name]');
const mainArray = firstName.textContent.split(''); */
// let cutPart1;
// let cutPart2;

/* for (let i = 0; i <= mainArray.length; i++) {
  if (mainArray[i] === mainArray[i].toUpperCase()) {
    cutPart1 = firstName.textContent.slice(0, i);
    cutPart2 = firstName.textContent.slice(i);
  }
} */

// firstName.textContent = `${cutFirst} ${cutName}`;
// lastName.textContent = `${cutLast} ${cutName}`;

for (const input of inputsArray) {
  const nameFull = input.name;
  const lower = nameFull.toLocaleLowerCase();
  const result = lower.charAt(0).toUpperCase() + lower.slice(1);

  input.placeholder = result;
}

const firstNameInput = document.querySelector('#sign-up-name');
const lastNameInput = document.querySelector('#sign-up-last-name');
const cutFirstPlaceholder = firstNameInput.placeholder.slice(0, 5);
const cutNamePlaceholder = firstNameInput.placeholder.slice(5);
const cutLastPlaceholder = lastNameInput.placeholder.slice(0, 4);

firstNameInput.placeholder = `${cutFirstPlaceholder} ${cutNamePlaceholder}`;
lastNameInput.placeholder = `${cutLastPlaceholder} ${cutNamePlaceholder}`;
