'use strict';

[...document.querySelectorAll('input')]
  .forEach(input => {
    const label = document.createElement('label');
    const text = input.name.replace(/([A-Z])/g, ' $1');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = text.toLowerCase();

    input.placeholder = text;
    input.style = 'text-transform: capitalize;';
    input.parentNode.prepend(label);
  });
