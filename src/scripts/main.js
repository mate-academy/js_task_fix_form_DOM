'use strict';

const findSelector = document.querySelectorAll('form input');

findSelector.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  const inputID = input.id || input.name;

  input.id = inputID;
  label.setAttribute('for', inputID);

  label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.setAttribute(
    'placeholder',
    input.name.charAt(0).toUpperCase() + input.name.slice(1),
  );

  input.parentElement.insertBefore(label, input);
});
