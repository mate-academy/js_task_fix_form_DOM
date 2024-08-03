'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const label = document.createElement('label');

  const labelName = input.name;
  const nameReplace = labelName.replace(/([A-Z])/g, ' $1');
  const firstLetter = nameReplace[0].toUpperCase();
  const formatName = firstLetter + nameReplace.slice(1);

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = formatName;

  input.insertAdjacentElement('beforebegin', label);
  input.placeholder = formatName;
});
