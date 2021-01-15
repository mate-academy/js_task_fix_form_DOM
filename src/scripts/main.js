'use strict';

const inputElements = [...document.querySelectorAll('input')];

inputElements.forEach(e => {
  const parentElement = e.parentNode;

  const labelElement = document.createElement('label');

  labelElement.classList.add('field-label');
  labelElement.htmlFor = e.id;
  labelElement.textContent = e.name;

  e.placeholder = e.name[0].toUpperCase() + e.name.substr(1);

  parentElement.appendChild(labelElement);
});
