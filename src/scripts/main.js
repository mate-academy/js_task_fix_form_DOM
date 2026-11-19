'use strict';

// write code here
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  const nameIn = input.name;
  const capitalizedName = nameIn.charAt(0).toUpperCase() + nameIn.slice(1);

  input.placeholder = capitalizedName;
  input.parentElement.append(label);
});
