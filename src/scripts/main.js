'use strict';

[...document.querySelectorAll('input')].forEach((input) => {
  input.placeholder =
    input.name.charAt(0).toUpperCase() + input.name.slice(1).toLowerCase();

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.textContent = input.getAttribute('name');
  label.htmlFor = input.getAttribute('id');

  input.insertAdjacentElement('beforebegin', label);
});
