'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].map(input => {
  const label = document.createElement('label');

  let inputName = input.name.split('');

  for (let i = 0; i < inputName.length; i++) {
    if (inputName[i].toUpperCase() === inputName[i]) {
      inputName[i] = ' ' + inputName[i];
    }
    inputName[0] = inputName[0].toUpperCase();
  }
  inputName = inputName.join('');

  const placeholder = inputName;

  label.innerHTML = `
    <label for='${input.id}' class='field-label'>
      ${inputName}
    </label>
  `;
  input.setAttribute('placeholder', placeholder);
  input.parentElement.append(label);
});
