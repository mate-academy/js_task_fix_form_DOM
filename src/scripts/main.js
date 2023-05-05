'use strict';

const inputs = document.querySelector('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.insertAdjacentElemet('beforebegin', label);

  const placeholderName = input.name.charAt(0).toUpperCase()
  + input.name.slice(1).split(/(?=[A-Z])/).join('');

  input.placeholde = placeholderName;

  input.before(label);
});
