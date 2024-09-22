'use strict';

const allInputs = document.querySelectorAll('input');

allInputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);

  if (input.name === 'firstName') {
    label.textContent = 'First Name';
  } else if (input.name === 'lastName') {
    label.textContent = 'Last Name';
  } else {
    label.textContent =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);
  }

  input.placeholder = input.name
    .split(/(?=[A-Z])/)
    .join(' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  input.parentNode.insertBefore(label, input);
});
