'use strict';

const allElemInput = document.querySelectorAll('form input');
const allElementsInput = [...allElemInput];

allElementsInput.forEach((inputEL) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  if (inputEL.id) {
    label.setAttribute('for', inputEL.id);
  }

  const labelText = inputEL.name
    ? inputEL.name[0].toUpperCase() + inputEL.name.slice(1)
    : 'Input';

  label.textContent = labelText;

  inputEL.setAttribute('placeholder', labelText);
  inputEL.before(label);
});
