'use strict';

const inputs = [...document.querySelectorAll('form input')];

inputs.forEach((input) => {
  const label = document.createElement('label');
  const capitalizedName =
    input.name[0].toUpperCase() + input.name.slice(1).toLowerCase();

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.before(label);
  input.setAttribute('placeholder', capitalizedName);
});
