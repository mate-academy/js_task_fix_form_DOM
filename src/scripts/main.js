'use strict';

const pathInputs = document.querySelectorAll('input');

pathInputs.forEach((targetInput) => {
  const labelInput = document.createElement('label');

  labelInput.textContent = targetInput.name;
  labelInput.className = 'field-label';
  labelInput.htmlFor = targetInput.id;

  targetInput.after(labelInput);
});

pathInputs.forEach((targetInput) => {
  const textPlaceholder =
    targetInput.name[0].toUpperCase() + targetInput.name.slice(1);

  targetInput.setAttribute('placeholder', textPlaceholder);
});
