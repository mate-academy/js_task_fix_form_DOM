'use strict';

// write code here
const inputs = [...document.querySelectorAll('form input')];

inputs.forEach((input, index) => {
  const nameElement = input.getAttribute('name');
  const capitalized = nameElement.charAt(0).toUpperCase() + nameElement.slice(1);

  if (!nameElement) return;

  if (!input.id) {
    input.id = `${nameElement}-${index}`;
  }

  const label = document.createElement('label');
  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = capitalized;

  const parentElement = input.parentElement;
  parentElement.prepend(label);

  input.placeholder = capitalized;
});
