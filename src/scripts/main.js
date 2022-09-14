'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach(input => {
  const label = document.createElement('label');

  label.className = ['field-label'];
  label.htmlFor = input.id;
  label.textContent = input.name.replace('Name', ' Name');

  input.placeholder = input.name.charAt(0).toUpperCase()
    + input.name.substring(1).replace(/([A-Z])/g, ' $1');

  input.parentElement.append(label);
});
