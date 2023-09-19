'use strict';

// write code here
const input = document.querySelectorAll('input');
const field = document.querySelectorAll('.field');

[...field].forEach((subject, index) => {
  const createLabel = document.createElement('label');
  let correctName = [...input][`${index}`].name;

  if ([...input][`${index}`].name.includes('Name')) {
    const nameIndex = [...input][`${index}`].name.indexOf('N');
    const firstPart = correctName.slice(0, `${nameIndex}`);
    const secondPart = correctName.slice(`${nameIndex}`);

    correctName = `${firstPart.toUpperCase()} ${secondPart.toUpperCase()}`;
  }

  createLabel.className = 'field-label';
  createLabel.htmlFor = [...input][`${index}`].id;
  createLabel.textContent = correctName;

  subject.appendChild(createLabel);
});

[...input].forEach((item, index) => {
  let correctPlaceholder = [...input][`${index}`].name;

  if ([...input][`${index}`].name.includes('Name')) {
    const nameIndex = [...input][`${index}`].name.indexOf('N');
    const firstPart = correctPlaceholder.slice(0, `${nameIndex}`);
    const secondPart = correctPlaceholder.slice(`${nameIndex}`);

    correctPlaceholder = `${firstPart} ${secondPart.toLowerCase()}`;
  }

  const firstLetter = correctPlaceholder.slice(0, 1);
  const goodPart = correctPlaceholder.slice(1);

  correctPlaceholder = firstLetter.toUpperCase() + goodPart;

  item.placeholder = correctPlaceholder;
});
