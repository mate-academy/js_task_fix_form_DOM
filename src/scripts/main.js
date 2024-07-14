'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.innerText = input.name;

  input.parentNode.insertBefore(label, input);

  if (input.name === 'firstName') {
    input.placeholder = 'FIRST NAME';
  } else if (input.name === 'lastName') {
    input.placeholder = 'LAST NAME';
  } else {
    input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  }
});
