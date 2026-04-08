'use strict';
/* eslint-disable */

const inputElements = document.querySelectorAll('form input');

inputElements.forEach((input) => {
  const label = document.createElement('label');
  label.classList.add('field-label');
  label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  label.setAttribute('for', input.id);

  input.setAttribute('placeholder', label.textContent);

  input.parentNode.insertBefore(label, input);
});
