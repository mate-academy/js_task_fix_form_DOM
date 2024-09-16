'use strict';

// write code here
const inputs = document.querySelectorAll('input');
const fields = document.querySelectorAll('.field');
const inputsArray = [...inputs];

[...fields].forEach((subject, index) => {
  const createLabel = document.createElement('label');
  let correctName = inputsArray[`${index}`].name;

  if (inputsArray[`${index}`].name.includes('Name')) {
    const nameIndex = inputsArray[`${index}`].name.indexOf('N');
    const firstPart = correctName.slice(0, `${nameIndex}`);
    const secondPart = correctName.slice(`${nameIndex}`);

    correctName = `${firstPart.toUpperCase()} ${secondPart.toUpperCase()}`;
  }

  createLabel.className = 'field-label';
  createLabel.htmlFor = inputsArray[`${index}`].id;
  createLabel.textContent = correctName;

  subject.appendChild(createLabel);
});

inputsArray.forEach((item, index) => {
  let correctPlaceholder = inputsArray[`${index}`].name;

  if (inputsArray[`${index}`].name.includes('Name')) {
    const nameIndex = inputsArray[`${index}`].name.indexOf('N');
    const firstPart = correctPlaceholder.slice(0, `${nameIndex}`);
    const secondPart = correctPlaceholder.slice(`${nameIndex}`);

    correctPlaceholder = `${firstPart} ${secondPart.toLowerCase()}`;
  }

  const firstLetter = correctPlaceholder.slice(0, 1);
  const goodPart = correctPlaceholder.slice(1);

  correctPlaceholder = firstLetter.toUpperCase() + goodPart;

  item.placeholder = correctPlaceholder;
});
