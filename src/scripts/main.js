'use strict';

document.querySelectorAll('.field')
  .forEach(field => {
    const label = document.createElement('label');
    const input = field.firstElementChild;

    label.className = 'field-label';
    label.htmlFor = input.id;
    label.textContent = input.name.toUpperCase();

    field.prepend(label);

    input.setAttribute('placeholder', input.name[0].toUpperCase()
    + input.name.slice(1).replace(/([A-Z])/g, ' $1').toLowerCase());
  });
