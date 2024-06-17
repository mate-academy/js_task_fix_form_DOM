'use strict';

const capitalize = (value) => {
  return value[0].toUpperCase() + value.slice(1);
};

const inputsSelectors = [...document.querySelectorAll('input')];

inputsSelectors.map((input) => {
  const labelText = input.getAttribute('name');

  const labelId = input.getAttribute('id');
  const labelElement = document.createElement('label');

  labelElement.textContent = labelText;
  labelElement.classList.add('field-label');

  labelElement.setAttribute('for', labelId);
  input.setAttribute('placeholder', capitalize(labelText));

  input.parentElement.append(labelElement);
});
