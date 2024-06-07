'use strict';

const inputs = [...document.getElementsByTagName('input')];

inputs.forEach((input) => {
  const tag = document.createElement('label');
  const currentID = input.getAttribute('id');

  tag.className = 'field-label';
  tag.setAttribute('for', currentID);
  tag.textContent = input.name.toUpperCase();

  input.setAttribute(
    'placeholder',
    `${input.name[0].toUpperCase()}${input.name.slice(1)}`,
  );
  input.parentNode.insertBefore(tag, input);
});
