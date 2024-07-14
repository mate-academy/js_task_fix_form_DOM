'use strict';

const inputs = [...document.querySelectorAll('input')];

function strFormat(str) {
  let capitalize = str.charAt(0).toUpperCase() + str.slice(1);

  capitalize = capitalize.replace(/([A-Z])/g, ' $1').trim();

  return capitalize;
}

function createLabel() {
  inputs.forEach((input) => {
    const label = document.createElement('label');
    const inputId = input.getAttribute('id');
    const inputName = strFormat(input.getAttribute('name'));

    label.setAttribute('class', 'field-label');
    label.setAttribute(`for`, `${inputId}`);
    label.textContent = `${inputName}`;

    input.setAttribute(
      'placeholder',
      `${strFormat(input.getAttribute('name'))}`,
    );

    input.before(label);
  });
}

createLabel();
