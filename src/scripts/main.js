'use strict';

const inputs = Array.from(document.querySelectorAll('input'));

function addLabelToInputs(arrayOfInputs) {
  arrayOfInputs.forEach((input) => {
    const parentElement = input.parentNode;
    const labelElement = document.createElement('label');

    labelElement.classList.add('field-label');
    labelElement.textContent = input.name;
    labelElement.setAttribute('for', `${input.id}`);
    parentElement.prepend(labelElement);

    input.setAttribute(
      'placeholder',
      `${input.name[0].toUpperCase() + input.name.slice(1)}`,
    );
  });
}

addLabelToInputs(inputs);
