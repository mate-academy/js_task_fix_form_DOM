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

const firstName = document.querySelector('label[for = sign-up-name]');
const lastName = document.querySelector('label[for = sign-up-last-name]');

function separateLabel(elem) {
  const mainArray = elem.textContent.split('');
  let cutPart1;
  let cutPart2;

  for (let i = 0; i < mainArray.length; i++) {
    if (mainArray[i] === mainArray[i].toUpperCase()) {
      cutPart1 = elem.textContent.slice(0, i);
      cutPart2 = elem.textContent.slice(i);
    }
  }

  return `${cutPart1} ${cutPart2}`;
}

firstName.textContent = separateLabel(firstName);
lastName.textContent = separateLabel(lastName);

for (const input of inputsArray) {
  const nameFull = input.name;
  const lower = nameFull.toLocaleLowerCase();
  const result = lower.charAt(0).toUpperCase() + lower.slice(1);

  input.placeholder = result;
}

const firstNameInput = document.querySelector('#sign-up-name');
const lastNameInput = document.querySelector('#sign-up-last-name');

function separatePlaceholder(elem) {
  const array = elem.name.split('');

  let cutPart1;
  let cutPart2;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i].toUpperCase()) {
      cutPart1 = elem.placeholder.slice(0, i);
      cutPart2 = elem.placeholder.slice(i);
    }
  }

  return `${cutPart1} ${cutPart2}`;
}

firstNameInput.placeholder = separatePlaceholder(firstNameInput);
lastNameInput.placeholder = separatePlaceholder(lastNameInput);
