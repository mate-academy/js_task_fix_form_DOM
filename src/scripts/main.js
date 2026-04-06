'use strict';
/**
 * @type {NodeListOf<HTMLInputElement>}
 * */

const colectionInputs = document.querySelectorAll('form input');

colectionInputs.forEach((input) => {
  const label = document.createElement('label');
  const labelText = input.name[0].toUpperCase() + input.name.slice(1);

  input.placeholder = labelText;
  label.textContent = labelText;
  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  input.parentElement.prepend(label);
});
