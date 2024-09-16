'use strict';

const inputFields = document.querySelectorAll('input');

for (let i = 0; i < inputFields.length; i++) {
  const label = document.createElement('label');
  const dataInput = inputFields[i].name.replace(/Name/, ' Name');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', inputFields[i].id);
  label.innerText = dataInput;

  inputFields[i].setAttribute('placeholder',
    dataInput.slice(0, 1).toUpperCase() + dataInput.slice(
      1, dataInput.length));

  inputFields[i].parentNode.appendChild(label);
}
