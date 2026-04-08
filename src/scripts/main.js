'use strict';

// write code here
const inputs = [...document.querySelectorAll('input')];
const fields = [...document.querySelectorAll('.field')];
// const eachInput = inputs[index];

fields.forEach((field, index) => {
  const eachInput = inputs[index];
  const newLabel = document.createElement('label');
  const placeholderText = eachInput.getAttribute('name');

  newLabel.className = 'field-label';
  newLabel.setAttribute('for', eachInput.getAttribute('id'));
  newLabel.textContent = `${eachInput.getAttribute('name')}`;

  eachInput.setAttribute(
    'placeholder',
    placeholderText.charAt(0).toUpperCase() + placeholderText.slice(1),
  );
  field.insertBefore(newLabel, eachInput);
});
