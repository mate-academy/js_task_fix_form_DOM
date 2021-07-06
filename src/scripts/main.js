'use strict';

const inputs = document.querySelectorAll('.field-text');

const fromCamelCaseToNormalWord = (camelCase) => {
  return camelCase.replace(/([A-Z]+)*([A-Z][a-z])/g, '$1 $2');
};

for (const input of inputs) {
  const label = document.createElement('label');
  const inputName = input.name;

  label.className = 'field-label';
  label.innerText = fromCamelCaseToNormalWord(inputName).toUpperCase();
  label.htmlFor = input.id;
  input.parentElement.prepend(label);

  input.placeholder = fromCamelCaseToNormalWord(
    inputName.charAt(0).toUpperCase() + inputName.slice(1)
  ).trim();
}
