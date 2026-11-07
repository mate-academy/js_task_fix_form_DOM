'use strict';

// write code here
const forms = document.querySelectorAll('form');

function capitalize(inputName) {
  return inputName.charAt(0).toUpperCase() + inputName.slice(1);
}

forms.forEach((form) => {
  const inputs = Array.from(form.querySelectorAll('input'));

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    input.placeholder = capitalize(input.name);
    label.textContent = capitalize(input.name);
    input.parentElement.append(label);
  });
});
