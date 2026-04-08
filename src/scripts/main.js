'use strict';

const allInputs = [...document.querySelectorAll('input')];

allInputs.forEach((input) => {
  input.placeholder = getPlaceholderValue(input.name);

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = getPlaceholderValue(input.name);
  input.parentElement.prepend(label);
});

function getPlaceholderValue(str) {
  const dividedStr = str.replace(/([A-Z])/g, ' $1');

  return dividedStr[0].toUpperCase() + dividedStr.slice(1);
}
