'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].map(input => {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.classList.add('field-label');

  label.textContent = input.name
    .replace(/([a-z])([A-Z])/g, '$1 $2');

  input.setAttribute('placeholder', label.textContent[0].toUpperCase()
  + label.textContent.slice(1));

  input.parentNode.prepend(label);
});
