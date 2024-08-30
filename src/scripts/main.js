'use strict';

const fieldElements = document.querySelectorAll('.field');
const inputElements = document.querySelectorAll('input');

fieldElements.forEach((field) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', field.firstElementChild.id);
  label.textContent = field.firstElementChild.name;
  field.prepend(label);
});

inputElements.forEach((input) => {
  let placeholderName = '';

  for (let i = 0; i < input.name.length; i++) {
    if (i === 0) {
      placeholderName += input.name[i].toUpperCase();
      continue;
    }

    if (input.name[i] !== input.name[i].toLowerCase()) {
      placeholderName += ' ' + input.name[i];
    } else {
      placeholderName += input.name[i];
    }
  }
  input.placeholder = placeholderName;
});
