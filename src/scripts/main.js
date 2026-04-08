/* eslint-disable max-len */
'use strict';

const froms = document.querySelectorAll('form');

froms.forEach((element) => {
  const inputs = element.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.setAttribute('class', 'field-label');
    label.setAttribute('for', input);

    if (input.name === 'firstName') {
      label.textContent = input.name.slice(0, 4) + ' ' + input.name.slice(5);
    } else if (input.name === 'lastName') {
      label.textContent = input.name.slice(0, 3) + ' ' + input.name.slice(4);
    } else {
      label.textContent = input.name;
    }

    let inputName = input.name;

    if (inputName === 'firstName') {
      inputName =
        inputName.charAt(0).toUpperCase() +
        inputName.slice(1, 5).toLowerCase() +
        ' ' +
        inputName.slice(5).toLowerCase();
    } else if (inputName === 'lastName') {
      inputName =
        inputName.charAt(0).toUpperCase() +
        inputName.slice(1, 4).toLowerCase() +
        ' ' +
        inputName.slice(4).toLowerCase();
    } else {
      inputName =
        inputName.charAt(0).toUpperCase() + inputName.slice(1).toLowerCase();
    }

    input.setAttribute('placeholder', inputName);

    input.parentElement.appendChild(label);
  });
});
