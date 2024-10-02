'use strict';

const inputFields = document.getElementsByClassName('field-text');
const inputsArr = [...inputFields];

inputsArr.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  const container = input.parentNode;

  container.insertBefore(label, input);

  const placeholderText = input.name[0].toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', `${placeholderText}`);
});
