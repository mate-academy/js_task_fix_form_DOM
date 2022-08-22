'use strict';

const inputs = [...document.getElementsByTagName('input')];

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.placeholder = input.name.charAt(0).toUpperCase()
    + input.name.slice(1).split(/(?=[A-Z])/).join(' ');

  input.parentElement.append(label);
});
