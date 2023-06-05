'use strict';

const inputsArr = [...document.querySelectorAll('input')];

inputsArr.map((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  label.textContent = input.name;

  input.placeholder = input.name.toUpperCase();

  input.parentElement.prepend(label);
});
