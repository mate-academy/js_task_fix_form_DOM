'use strict';

const allInputs = [...document.querySelectorAll('input')];

function updateStrings(item) {
  let labelText = item[0].toUpperCase() + item.slice(1);

  for (let i = 1; i < labelText.length; i++) {
    if (labelText[i] === labelText[i].toUpperCase()) {
      labelText = labelText.slice(0, i)
        + ' '
        + labelText.slice(i).toLowerCase();
    }
  }

  return labelText;
};

for (const input of allInputs) {
  const labelElement = document.createElement('label');

  labelElement.className = 'field-label';
  labelElement.setAttribute('for', input.id);
  labelElement.textContent = updateStrings(input.name).toUpperCase();
  input.setAttribute('placeholder', updateStrings(input.name));
  input.parentElement.insertAdjacentElement('afterbegin', labelElement);
};
