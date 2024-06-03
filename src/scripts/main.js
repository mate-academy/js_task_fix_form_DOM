'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((element) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', element.id);

  const labelName = element.name.split(/(?=[A-Z])/).join(' ');

  label.textContent = labelName.toUpperCase();

  const placeholderText =
    labelName.split(' ')[0].charAt(0).toUpperCase() +
    labelName.slice(1).toLowerCase();

  element.placeholder = placeholderText;

  element.insertAdjacentElement('beforebegin', label);
});
