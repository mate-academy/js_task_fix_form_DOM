'use strict';

const inputElements = [...document.querySelectorAll('input')];

inputElements.forEach((el) => {
  const newLabel = document.createElement('label');

  newLabel.classList.add('field-label');
  newLabel.setAttribute('for', el.id);
  newLabel.textContent = el.getAttribute('name');

  el.setAttribute('placeholder', el.name.toUpperCase());

  el.parentElement.appendChild(newLabel);
});
