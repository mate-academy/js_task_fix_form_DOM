'use strict';

const inputs = [...document.querySelectorAll('input')];
const capitalize = str => str[0].toUpperCase() + str.slice(1);

inputs.forEach(input => {
  const label = document.createElement('label');
  label.setAttribute('for', input.id);
  label.classList.add('field-label');
  label.textContent = capitalize(input.name);

  input.setAttribute('placeholder', capitalize(input.name));

  input.parentElement.prepend(label);
})
