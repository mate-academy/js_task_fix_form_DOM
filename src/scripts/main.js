'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((inputEl) => {
  const { name: inputName, id } = inputEl;

  const labelEl = document.createElement('label');

  labelEl.classList.add('field-label');
  labelEl.setAttribute('for', id);

  labelEl.textContent = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  inputEl.placeholder = labelEl.textContent;

  inputEl.parentElement.appendChild(labelEl);
});
