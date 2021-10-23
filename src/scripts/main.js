'use strict';

// write code here

[...document.querySelectorAll('input')].map(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.append(label);
  input.placeholder = input.name;
});
