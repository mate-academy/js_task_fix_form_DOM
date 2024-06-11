'use strict';

const inputs = [...document.querySelectorAll('form input')];

inputs.forEach((input) => {
  const label = document.createElement('label');
  const regex = /(?=[A-Z])/;
  const textForLable = input.name
    .split(regex)
    .map((word) => word.toUpperCase())
    .join(' ');

  label.className = 'field-label';
  label.setAttribute('for', input.id);

  input.setAttribute('placeholder', textForLable);

  label.textContent = textForLable;

  input.parentElement.insertBefore(label, input);
});
