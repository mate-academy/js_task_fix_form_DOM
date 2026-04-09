'use strict';

const getInput = [...document.querySelectorAll('input')];

function convertName(str, mode = 'upper') {
  const formattedStr = str.replace(/([A-Z])/g, ' $1').trim();

  if (mode === 'upper') {
    return formattedStr.toUpperCase();
  } else if (mode === 'capitalize') {
    return formattedStr
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }
}

getInput.map((input) => {
  input.placeholder = `${convertName(input.getAttribute('name'), 'capitalize')}`;

  const createLabel = document.createElement('label');

  createLabel.htmlFor = `${input.getAttribute('name')}`;
  createLabel.className = 'field-label';
  createLabel.textContent = `${convertName(input.getAttribute('name'), 'upper')}`;
  input.before(createLabel);
});
