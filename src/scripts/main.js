'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const parentDiv = input.parentElement;
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.placeholder = label.textContent;

  parentDiv.insertBefore(label, input);
});
