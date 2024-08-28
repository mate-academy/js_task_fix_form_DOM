'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');

  if (input.name === 'firstName') {
    label.textContent = 'first name';
    input.setAttribute('placeholder', 'FIRST NAME');
  } else if (input.name === 'lastName') {
    label.textContent = 'last name';
    input.setAttribute('placeholder', 'LAST NAME');
  } else {
    label.textContent = `${input.name}`;
    input.setAttribute('placeholder', `${input.name.toLocaleUpperCase()}`);
  }

  input.parentNode.insertBefore(label, input);
});
