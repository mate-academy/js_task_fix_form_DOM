'use strict';

[...document.querySelectorAll('input')]
  .forEach(input => {
    const label = document.createElement('label');
    const text = input.name.replace(/name/gi, ' name');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = text.toLowerCase();

    input.placeholder = text;
    input.style = 'text-transform: capitalize;';
    input.parentNode.prepend(label);
  });
