'use strict';

const inputList = [...document.querySelectorAll('input')];

window.console.log(inputList);

const createLabel = (input) => {
  input.insertAdjacentHTML('beforebegin', `
    <label for=${input.id} class="field-label">
      ${input.name}
    </label>
  `);
};

const createPlaceholder = (input) => {
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
};

inputList.forEach(createLabel);
inputList.forEach(createPlaceholder);
