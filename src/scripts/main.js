'use strict';

const fields = document.querySelectorAll('.field');
const inputs = [...document.querySelectorAll('.field-text')];

const inputIds = inputs.map((element) => element.id);

function formatInputName(inputName) {
  const formattedName = inputName.split(/(?=[A-Z])/);

  const sentence = formattedName.join(' ').toLowerCase();
  const capitalizedSentence =
    sentence.charAt(0).toUpperCase() + sentence.slice(1);

  return capitalizedSentence;
}

fields.forEach((fieldElement, index) => {
  const label = document.createElement('label');
  const inputElement = inputs[index];

  label.className = 'field-label';
  label.setAttribute('for', inputIds[index]);
  label.textContent = formatInputName(inputElement.name);

  fieldElement.insertAdjacentElement('afterbegin', label);
});

inputs.forEach((element) => {
  const placeholderValue = formatInputName(element.name);

  element.setAttribute('placeholder', placeholderValue);
});
