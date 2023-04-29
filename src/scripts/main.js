'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach(input => {
  const label = document.createElement('label');

  input.parentElement.append(label);

  input.placeholder = input.name[0].toUpperCase()
    + input.name.slice(1).split('N').join(' N');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;
});
