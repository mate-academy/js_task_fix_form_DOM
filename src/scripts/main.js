'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
  input.outerHTML = `<label for="${input.id}" class="field-label">${input.name}</label>${input.outerHTML}`;
});
