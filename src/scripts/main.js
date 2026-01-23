'use strict';

const pathInputs = document.querySelectorAll('form input');

pathInputs.forEach((targetInput) => {
  const labelInput = document.createElement('label');

  labelInput.textContent = targetInput.name;
  labelInput.className = 'field-label';
  labelInput.htmlFor = targetInput.id;

  targetInput.before(labelInput);

  const textPlaceholder =
    targetInput.name[0].toUpperCase() + targetInput.name.slice(1);

  targetInput.setAttribute('placeholder', textPlaceholder);
});

pathInputs.forEach((targetInput) => {});
