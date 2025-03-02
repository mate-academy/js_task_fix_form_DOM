'use strict';

const allInputs = document.querySelectorAll('input');

for (const elem of allInputs) {
  const newLabel = document.createElement('label');

  newLabel.classList.add('field-label');
  newLabel.setAttribute('for', elem.id);

  const nameParts = elem.name.split(' ');
  const formattedName = nameParts
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  newLabel.textContent = formattedName;

  elem.placeholder = formattedName;

  elem.parentElement.appendChild(newLabel);
}
