'use strict';

// write code here

const inputs = document.querySelectorAll('form .field input');

inputs.forEach((input) => {
  const inputName = input.name;

  const capitalizedText =
    inputName.charAt(0).toUpperCase() + inputName.slice(1);

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = capitalizedText;

  input.setAttribute('placeholder', capitalizedText);

  const parentDiv = input.parentElement;

  parentDiv.insertBefore(label, input);
});
