'use strict';

const inputs = document.getElementsByTagName('input');

[...inputs].forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('.field-label');

  const inputName = input.name.replace(/([A-Z])/g, ' $1');

  label.textContent = inputName.toUpperCase();

  input.placeholder = `${inputName[0].toUpperCase()}${inputName.substring(1)}`;

  input.before(label);
});
