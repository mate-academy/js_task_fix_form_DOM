'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input, index) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.id);

  label.textContent =
    input.name === 'firstName'
      ? 'first Name'
      : input.name === 'lastName'
        ? 'last Name'
        : input.name;

  input.setAttribute(
    'placeholder',
    input.name === 'firstName'
      ? 'First Name'
      : input.name === 'lastName'
        ? 'Last Name'
        : input.name,
  );

  input.parentNode.insertAdjacentElement('afterbegin', label);
});
