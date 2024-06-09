'use strict';

const allInputs = document.querySelectorAll('form input');

allInputs.forEach((input) => {
  const formattedName = input.name
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, (char) => char.toUpperCase());
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.setAttribute('class', 'field-label');
  label.textContent = formattedName;
  input.parentNode.insertBefore(label, input);

  input.setAttribute('placeholder', formattedName);
});
