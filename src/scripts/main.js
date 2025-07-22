'use strict';

const inputEls = document.querySelectorAll('.field-text');

inputEls.forEach((el) => {
  const inputName = el.getAttribute('name');
  const inputId = el.getAttribute('id');

  const inputLabel = document.createElement('label');

  inputLabel.classList.add('field-label');
  inputLabel.setAttribute('for', inputId);

  inputLabel.textContent = inputName[0].toUpperCase() + inputName.slice(1);
  el.before(inputLabel);
  el.setAttribute('placeholder', inputName.toUpperCase());
});
