'use strict';

const inputFields = document.querySelectorAll('input');

for (let i = 0; i < inputFields.length; i++) {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', inputFields[i].id);
  label.innerText = inputFields[i].name;

  inputFields[i].setAttribute('placeholder',
    inputFields[i].name.slice(0, 1).toUpperCase() + inputFields[i].name.slice(
      1, inputFields[i].name.length).toLowerCase());

  inputFields[i].parentNode.appendChild(label);
}
