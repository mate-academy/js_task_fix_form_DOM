'use strict';

const allInputs = document.querySelectorAll('input');

[...allInputs].forEach(input => {
  const label = document.createElement('label');
  let formName = input.name;

  label.className = 'field-label';
  label.setAttribute('for', input.id);

  if (formName === 'firstName' || formName === 'lastName') {
    const nIdx = formName.indexOf('N');

    formName = formName.substring(0, nIdx)
    + ' '
    + formName.substring(nIdx).toLowerCase();
  }

  label.textContent = formName;

  const placeholderText = formName.charAt(0).toUpperCase() + formName.slice(1);

  input.after(label);
  input.setAttribute('placeholder', placeholderText);
});
