'use strict';

const forms = [...document.querySelectorAll('form')];
const inputsOne = [...forms[0].querySelectorAll('input')];
const inputsTwo = [...forms[1].querySelectorAll('input')];

inputsOne.forEach((item) => {
  const label = document.createElement('label');
  const convertedLabelName = item.name
    .split(/(?=[A-Z])/)
    .map((word) => word.toUpperCase())
    .join(' ');

  const convertedPlaceholderName = item.name
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  label.className = 'field-label';
  label.setAttribute('for', item.id);
  item.setAttribute('placeholder', convertedPlaceholderName);
  label.textContent = `${convertedLabelName}`;

  item.parentNode.insertBefore(label, item);
});

inputsTwo.forEach((item) => {
  const label = document.createElement('label');
  const convertedLabelName = item.name.toUpperCase();
  const convertedPlaceholderName =
    item.name[0].toUpperCase() + item.name.slice(1).toLowerCase();

  label.className = 'field-label';
  label.textContent = convertedLabelName;
  label.setAttribute('for', item.id);
  item.setAttribute('placeholder', convertedPlaceholderName);

  item.parentNode.insertBefore(label, item);
});
