'use strict';

const inputsList = document.querySelectorAll('input');

inputsList.forEach(input => {
  const label = document.createElement('label');

  label.setAttribute('for', input.getAttribute('id'));
  label.classList.add('field-label');

  let inputName;

  input.getAttribute('name')
    ? inputName = input.getAttribute('name').replace(/N/, ' N')
    : inputName = input.getAttribute('name');
  inputName = inputName[0].toUpperCase() + inputName.slice(1);

  label.textContent = inputName;
  input.setAttribute('placeholder', inputName);

  input.before(label);
});
