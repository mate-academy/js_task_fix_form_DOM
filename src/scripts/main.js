'use strict';

const inputs = document.querySelectorAll('input');

let inputsArray = Array.from(inputs);

for (const input of inputsArray) {
  if (input.name === 'firstName') {
    input.name = 'First Name';
  }
  if (input.name === 'lastName') {
    input.name = 'Last Name';
  }

  input.insertAdjacentHTML(
    'beforebegin',
    `<label class = 'field-label' for = "${input.id}" > ${input.name} </label>`,
  );
  const placeholderText = `${input.name.toLocaleLowerCase()}`;

  const capitalizeLetter =
    placeholderText.charAt(0).toLocaleUpperCase() + placeholderText.slice(1);

  input.placeholder = capitalizeLetter;

  if (input.placeholder === 'First name') {
    input.placeholder = 'First Name';
  }
  if (input.placeholder === 'Last name') {
    input.placeholder = 'Last Name';
  }
}
