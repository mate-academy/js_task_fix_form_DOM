'use strict';

const input = document.querySelectorAll('form input');

input.forEach((item) => {
  const createLabel = document.createElement('label');

  createLabel.classList.add('field-label');
  createLabel.setAttribute('for', item.id);
  createLabel.textContent = item.name;

  item.placeholder = item.name[0].toUpperCase() + item.name.slice(1);

  item.parentElement.appendChild(createLabel);
});
