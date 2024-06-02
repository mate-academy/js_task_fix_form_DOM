'use strict';

const inputsForm = document.querySelectorAll('input');

inputsForm.forEach((input) => {
  const label = document.createElement('label');
  const getName = input.getAttribute('name');
  const wordSpace = getName.replace(/([A-Z])/g, ' $1').trim();

  label.classList.add('field-label');
  label.setAttribute('for', input.getAttribute('id'));
  label.textContent = getName.replace(/([A-Z])/g, ' $1').trim();
  input.before(label);

  input.setAttribute(
    'placeholder',
    wordSpace.charAt(0).toUpperCase() + wordSpace.slice(1),
  );
});
