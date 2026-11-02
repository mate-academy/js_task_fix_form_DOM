'use strict';

const toLabel = (text) => text.replace(/([A-Z])/g, ' $1').toLowerCase();
const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

const inputElements = document.querySelectorAll('form input');

inputElements.forEach((inputElem) => {
  const { name: inputName, id } = inputElem;
  const formattedName = toLabel(inputName);

  inputElem.placeholder = capitalize(formattedName);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = id;
  label.textContent = formattedName;

  inputElem.parentElement.append(label);
});
