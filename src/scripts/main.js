'use strict';

const inputs = document.querySelectorAll('input');

Array.from(inputs).forEach((input) => {
  const label = `<label class="field-label" for="${input.id}">${input.name}</label>`;

  input.insertAdjacentHTML('beforebegin', label);
  input.placeholder = input.name;
});
