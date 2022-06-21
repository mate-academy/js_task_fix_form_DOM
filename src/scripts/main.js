'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach(input => {
  const label = document.createElement('label');
  const inputNameSplited = input.name.split(/(?=[A-Z])/);

  label.htmlFor = input.id;
  label.classList.toggle('field-label');
  label.textContent = inputNameSplited.join('').toUpperCase();

  input.parentElement.append(label);

  input.placeholder = inputNameSplited
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
});
