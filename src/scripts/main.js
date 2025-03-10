'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach((element) => {
  const elName = element.name.charAt(0).toUpperCase() + element.name.slice(1);

  element.placeholder = `${elName}`;

  const newElementLabel = document.createElement('label');

  newElementLabel.classList.add('field-label');
  newElementLabel.textContent = elName;
  newElementLabel.setAttribute('for', element.id);

  const container = element.closest('.field');

  if (container) {
    container.insertBefore(newElementLabel, element);
  }
});
