'use strict';

// const inputs = document.querySelectorAll('input.field-text');

// inputs.forEach((input) => {
//   const label = document.createElement('label');

//   label.className = 'field-label';
//   label.setAttribute('for', input.id);
//   label.textContent = input.getAttribute('name');

//   const inputName = input.getAttribute('name');

//   const capitalizedName
//   = inputName.charAt(0).toUpperCase() + inputName.slice(1);

//   input.setAttribute('placeholder', capitalizedName);

//   input.parentElement.appendChild(label);
// });

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const inputs = document.querySelectorAll('input.field-text');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.getAttribute('name');

  const inputName = input.getAttribute('name');
  const capitalizedName = capitalize(inputName);

  input.setAttribute('placeholder', capitalizedName);

  input.parentElement.appendChild(label);
});
