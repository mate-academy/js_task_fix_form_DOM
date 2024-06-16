'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((elem) => {
  const elName = elem.id.slice(8).replace(/-/g, ' ');
  const inputName = elName[0].toUpperCase() + elName.slice(1);
  const formEl = document.createElement('label');

  formEl.classList.add('field-label');
  formEl.htmlFor = elem.id;
  formEl.innerText = inputName;

  elem.placeholder = inputName;
  elem.parentNode.insertBefore(formEl, elem);
});
