'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach(input => {
  const label = document.createElement('label');

  input.setAttribute('placeholder',
    input.name.charAt(0).toUpperCase()
      + input.name.slice(1).split('N').join(' N'));

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.placeholder;

  input.before(label);
});
