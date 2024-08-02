'use strict';

const formsArr = [...document.querySelectorAll('form')];
const inputsArr1 = [...formsArr[0].querySelectorAll('input')];
const inputsArr2 = [...formsArr[1].querySelectorAll('input')];

inputsArr1.forEach((item) => {
  const label = document.createElement('label');
  const correctName = item.name
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  label.className = 'field-label';
  label.setAttribute('for', item.id);
  item.setAttribute('placeholder', correctName);
  label.textContent = `${correctName}`;
  item.parentNode.insertBefore(label, item);
});

inputsArr2.forEach((item) => {
  const label = document.createElement('label');
  const correctPlaceholderName =
    item.name[0].toUpperCase() + item.name.slice(1).toLowerCase();

  label.className = 'field-label';
  label.textContent = item.name;
  label.setAttribute('for', item.id);
  item.setAttribute('placeholder', correctPlaceholderName);
  item.parentNode.insertBefore(label, item);
});
