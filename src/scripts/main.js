'use strict';

const inputs = document.querySelectorAll('input');

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

inputs.forEach(input => {
  input.setAttribute('placeholder', capitalize(input.name));

  input.insertAdjacentHTML('beforebegin',
    `<label for="${input.id}" class="field-label">${input.name}</label>`);
});
