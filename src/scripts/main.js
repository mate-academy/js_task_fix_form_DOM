'use strict';

const inputsInsideForm = document.querySelectorAll('form input');

inputsInsideForm.forEach(input => {
  const label = document.createElement('label');

  label.innerText = input.name;

  label.classList.add('field-label');

  label.setAttribute('for', input.name);

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  input.parentNode.insertBefore(label, input.nextSibling);
});
