'use strict';

const inputElements = document.querySelectorAll('.field-text');

inputElements.forEach((input) => {
  const label = document.createElement('label');
  const separatedName = input.name
    .split(/(?=[A-Z])/)
    .join(' ')
    .toLowerCase();

  const capitalizedInputName =
    separatedName[0].toUpperCase() + separatedName.slice(1);

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = separatedName;

  input.setAttribute('placeholder', capitalizedInputName);
  input.before(label);
});
