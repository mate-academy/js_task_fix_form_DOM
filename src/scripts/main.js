'use strict';

const getInputs = document.body.getElementsByTagName('form')[0];
const inPuts = getInputs.querySelectorAll('input');

inPuts.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  const inputName = input.name;
  const capitalizedName = inputName[0].toUpperCase() + inputName.slice(1);

  label.textContent = capitalizedName;
  input.placeholder = capitalizedName;

  input.parentElement.append(label);
});

const getInputs2 = document.body.getElementsByTagName('form')[1];
const inPuts2 = getInputs2.querySelectorAll('input');

inPuts2.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  const inputName = input.name;
  const capitalizedName = inputName[0].toUpperCase() + inputName.slice(1);

  label.textContent = capitalizedName;
  input.placeholder = capitalizedName;

  input.parentElement.append(label);
});
