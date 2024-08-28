'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');

  const result = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  if (input.name === 'firstName') {
    label.textContent = 'first name';
    input.setAttribute('placeholder', 'First name');
  } else if (input.name === 'lastName') {
    label.textContent = 'last name';
    input.setAttribute('placeholder', 'Last name');
  } else {
    label.textContent = `${input.name}`;
    input.setAttribute('placeholder', `${result}`);
  }

  input.parentNode.insertBefore(label, input);
});
