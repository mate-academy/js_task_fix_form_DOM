'use strict';

const inputAll = document.querySelectorAll('form input');

inputAll.forEach((element) => {
  const newLabel = document.createElement('label');

  newLabel.classList.add('field-label');

  newLabel.setAttribute('for', element.id);

  const text = element.name.charAt(0).toUpperCase() + element.name.slice(1);

  newLabel.textContent = text;

  element.setAttribute('placeholder', text);

  const container = element.closest('.field');

  container.appendChild(newLabel);
});
