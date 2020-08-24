'use strict';

document.querySelectorAll('.field')
  .forEach(field => {
    const lab = document.createElement('label');
    const input = field.firstElementChild;

    lab.className = 'field-label';
    lab.htmlFor = input.id;
    lab.textContent = input.name.toUpperCase();

    field.prepend(lab);

    input.setAttribute('placeholder', input.name[0].toUpperCase()
    + input.name.slice(1));
  });
