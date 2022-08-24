/* eslint-disable no-shadow */
'use strict';

const forms = document.querySelectorAll('form');

forms.forEach(form => {
  const inputs = document.querySelectorAll('input');

  inputs.forEach(input => {
    const { name, id } = input;

    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = id;
    label.textContent = name;

    input.setAttribute(
      `placeholder`,
      name[0].toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1').trim()
    );

    input.before(label);
  });
});
