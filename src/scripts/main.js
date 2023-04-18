'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(input => {
  const label = document.createElement('label');
  const title = input.name.split('N').join(' N');

  label.htmlFor = input.id;
  label.classList = 'field-label';
  label.textContent = title;
  label.placeholder = title.toUpperCase();
  input.parentElement.append(label);
});