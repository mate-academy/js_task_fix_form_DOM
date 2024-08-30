'use strict';

const fieldElements = document.querySelectorAll('.field');
const inputElements = document.querySelectorAll('input');

fieldElements.forEach((field) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', field.firstElementChild.id);

  let labelName = '';

  for (let i = 0; i < field.firstElementChild.name.length; i++) {
    if (
      field.firstElementChild.name[i] !==
      field.firstElementChild.name[i].toLowerCase()
    ) {
      labelName += ' ' + field.firstElementChild.name[i];
    } else {
      labelName += field.firstElementChild.name[i];
    }
  }
  label.textContent = labelName;
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
