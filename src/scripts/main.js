'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach(input => {
  const label = document.createElement('label');

  label.className = ['field-label'];
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.placeholder = input.name.charAt(0).toUpperCase()
    + input.name.substring(1).toLowerCase();

  input.parentElement.append(label);
});
