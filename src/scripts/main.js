'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach(input => {
  input.insertAdjacentHTML('beforebegin', '<label></label>');

  input.previousElementSibling.className = 'field-label';
  input.previousElementSibling.htmlFor = input.id;
  input.previousElementSibling.textContent = input.name;

  input.placeholder = input.name[0].toUpperCase()
  + input.name.slice(1);
});
