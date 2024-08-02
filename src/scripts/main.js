'use strict';

const formsArr = [...document.querySelectorAll('form')];
const inputsArr1 = [...formsArr[0].querySelectorAll('input')];
const inputsArr2 = [...formsArr[1].querySelectorAll('input')];

inputsArr1.forEach((item) => {
  const label = document.createElement('label');
  const correctLabelName = item.name
    .split(/(?=[A-Z])/)
    .map((word) => word.toUpperCase())
    .join(' ');

  const correctPlaceholderName = item.name
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  label.className = 'field-label';
  label.setAttribute('for', item.id);
  item.setAttribute('placeholder', correctPlaceholderName);
  label.textContent = `${correctLabelName}`;
  item.parentNode.insertBefore(label, item);
});

inputsArr2.forEach((item) => {
  const label = document.createElement('label');
  const correcttLabelName = item.name.toUpperCase();
  const correctPlaceholderName =
    item.name[0].toUpperCase() + item.name.slice(1).toLowerCase();

  label.className = 'field-label';
  label.textContent = correcttLabelName;
  label.setAttribute('for', item.id);
  item.setAttribute('placeholder', correctPlaceholderName);
  item.parentNode.insertBefore(label, item);
});
