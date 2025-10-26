'use strict';

const elements = document.querySelectorAll('form input');
const list = Array.from(elements);

const inputsWithLabels = list.map((element) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', element.id);
  label.textContent = element.name[0].toUpperCase() + element.name.slice(1);

  element.parentElement.prepend(label);

  return element;
});

inputsWithLabels.map((element) => {
  element.placeholder = element.name[0].toUpperCase() + element.name.slice(1);
});
