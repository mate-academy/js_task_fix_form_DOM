'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');
  let nameElement = input.name;

  nameElement = nameElement[0].toUpperCase() + nameElement.slice(1);

  if (nameElement.includes('Name')) {
    nameElement = nameElement.replace('Name', ' Name');
  }

  label.setAttribute('for', input.id);
  label.textContent = nameElement.toUpperCase();
  label.classList.add('field-label');

  input.placeholder = nameElement;
  input.parentNode.appendChild(label);
});
