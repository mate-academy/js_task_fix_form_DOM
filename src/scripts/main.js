'use strict';

const inputs = document.querySelectorAll('.field-text');

[...inputs].forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.parentElement.append(label);

  input.setAttribute('placeholder', input.name[0].toUpperCase()
  + input.name.slice(1));
});
