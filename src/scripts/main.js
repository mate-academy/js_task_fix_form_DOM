'use strict';

const froms = document.querySelectorAll('form');

froms.forEach((element) => {
  const inputs = element.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.setAttribute('class', 'field-label');
    label.setAttribute('for', input);
    label.textContent = input.name;

    let inputName = input.name;

    inputName =
      inputName.charAt(0).toUpperCase() + inputName.slice(1).toLowerCase();

    input.setAttribute('placeholder', inputName);

    input.parentElement.appendChild(label);
  });
});
