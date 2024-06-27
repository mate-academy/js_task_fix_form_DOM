'use strict';

const inputs = [...document.querySelectorAll('input')];

function formatName(str) {
  const formatedName = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return formatedName.charAt(0).toUpperCase() + formatedName.slice(1);
}

inputs.forEach((input) => {
  const parentElem = input.parentElement;
  const label = document.createElement('label');
  const resultName = formatName(input.name);

  label.setAttribute('for', input.id);
  input.setAttribute('placeholder', resultName);
  label.innerHTML = resultName;
  label.classList.add('field-label');

  parentElem.insertBefore(label, input);
});
