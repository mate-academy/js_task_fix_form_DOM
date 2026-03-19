'use strict';

// write code here
const inputElements = [...document.querySelectorAll('form input')];

function enhanceFormInputs(inputs) {
  const transformInputName = (input) => {
    const toLower = input.name.toLowerCase();
    const transformName = toLower.replace(/^./, (match) => match.toUpperCase());

    return transformName;
  };

  inputs.forEach((input) => {
    const label = document.createElement('label');
    const capitalizeName = transformInputName(input);
    const inputId = input.id;

    label.setAttribute('class', 'field-label');
    label.setAttribute('for', inputId);
    label.textContent = capitalizeName;

    input.before(label);

    input.setAttribute('placeholder', capitalizeName);
  });
}

enhanceFormInputs(inputElements);
