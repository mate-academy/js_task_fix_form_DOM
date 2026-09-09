'use strict';

const allInputs = document.querySelectorAll('form input');

allInputs.forEach((input) => {
  const formattedName =
    input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.placeholder = formattedName;

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = formattedName;
  input.parentElement.insertBefore(label, input);
});
