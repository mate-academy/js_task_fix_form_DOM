'use strict';

const allInputs = [...document.querySelectorAll('input')];

for (let i = 0; i < allInputs.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = allInputs[i].id;
  label.textContent = allInputs[i].name;

  const parentInput = allInputs[i].parentElement;

  parentInput.append(label);

  allInputs[i].placeholder = allInputs[i].name.toUpperCase();
};
