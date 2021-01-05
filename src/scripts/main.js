'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.insertAdjacentHTML('beforebegin',
    `<label class="field-label" for="${input.id}">${input.name}</label>`
  );

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
});
