'use strict';

const allInputs = document.querySelectorAll('input');

allInputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.for = input.id;

  let placeholderName = '';

  for (let i = 0; i < input.name.length; i++) {
    if (input.name[i] !== input.name[i].toLocaleLowerCase()) {
      placeholderName += ' ' + input.name[i].toLocaleLowerCase();
    } else {
      placeholderName += input.name[i];
    }
  }

  label.textContent = placeholderName.toLocaleUpperCase();

  input.placeholder = placeholderName.charAt(0).toLocaleUpperCase()
    + placeholderName.slice(1);

  input.parentElement.insertAdjacentElement('afterbegin', label);
});
