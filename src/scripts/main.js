'use strict';

const inputs = [...document.querySelectorAll('.field-text')];

inputs.forEach((input) => {
  const label = document.createElement('label');
  const placeholderName = input.name.replace('Name', ' Name');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = placeholderName;
  input.before(label);

  input.placeholder = placeholderName
    .split(' ')
    .map((letter) => letter[0].toUpperCase() + letter.slice(1).toLowerCase())
    .join(' ');
});
