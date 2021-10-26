'use strict';

// write code here

[...document.querySelectorAll('input')].map(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.parentElement.prepend(label);
  input.placeholder = (input.name).toUpperCase();

  if (input.placeholder === 'FIRSTNAME') {
    input.placeholder = 'FIRST NAME';
  };

  if (input.placeholder === 'LASTNAME') {
    input.placeholder = 'LAST NAME';
  };
});
