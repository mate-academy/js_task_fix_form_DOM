'use strict';

const inputsWrappers = [...document.querySelectorAll('form .field')];

function renderLabels(arrInputs) {
  arrInputs.forEach((div) => {
    const input = div.querySelector('.field-text');

    if (!input) {
      return;
    }

    const id = input.id;
    const inputName = input.name;
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.htmlFor = id;
    label.textContent = `${inputName}`;
    div.prepend(label);
  });
}

function addPlaceholder(elements) {
  elements.forEach((div) => {
    const input = div.querySelector('.field-text');
    const inputName = String(input.name);

    input.placeholder = inputName[0].toUpperCase() + inputName.slice(1);
  });
}

renderLabels(inputsWrappers);
addPlaceholder(inputsWrappers);
