'use strict';

[...document.querySelectorAll('input')]
  .forEach(input => {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = input.name.toUpperCase();

    input.placeholder = input.name[0].toUpperCase()
      + input.name.toLowerCase().substring(1);

    input.parentNode.prepend(label);
  });
