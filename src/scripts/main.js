'use strict';

const forms = document.querySelectorAll('form');

for (let i = 0; i < forms.length; i++) {
  const inputs = forms[i].querySelectorAll('input');

  for (let j = 0; j < inputs.length; j++) {
    const input = inputs[j];
    const inputName = input.name;
    const inputId = input.id;
    const parentElement = input.parentElement;

    const inputLabel = document.createElement('label');

    inputLabel.classList.add('field-label');
    inputLabel.setAttribute('for', inputId);

    inputLabel.textContent =
      inputName.charAt(0).toUpperCase() + inputName.slice(1);
    input.setAttribute('placeholder', inputLabel.textContent);

    parentElement.insertBefore(inputLabel, input);
  }
}
