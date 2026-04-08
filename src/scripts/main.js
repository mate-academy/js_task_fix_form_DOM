'use strict';

const allInputs = document.querySelectorAll('form input');

allInputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = input.name;

  const placeholderText = input.name[0].toUpperCase() + input.name.slice(1);

  input.placeholder = placeholderText;

  // eslint-disable-next-line no-shadow
  const parent = input.parentElement;

  parent.append(label);
});
