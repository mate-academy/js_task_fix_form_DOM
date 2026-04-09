'use strict';

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

inputs.forEach((input) => {
  const { name, id } = input;

  if (!name) return;

  const label = document.createElement('label');
  label.classList.add('field-label');
  label.setAttribute('for', id);

  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  label.textContent = capitalizedName;
  input.setAttribute('placeholder', capitalizedName);

  input.parentElement.appendChild(label);
});
