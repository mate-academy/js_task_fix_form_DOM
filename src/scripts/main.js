'use strict';

// write code here
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');
  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = input.name;

    input.insertAdjacentElement('beforebegin', label);
    input.placeholder = capitalize(input.name);
  });
});

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
