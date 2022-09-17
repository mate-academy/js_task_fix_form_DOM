'use strict';

// write code here
const fields = document.querySelectorAll('.field');

for (const field of fields) {
  const newLabel = document.createElement('label');

  newLabel.setAttribute('for', field.firstElementChild.id);
  newLabel.classList.add('field-label');
  newLabel.innerHTML = field.firstElementChild.name;
  field.firstElementChild.placeholder = field.firstElementChild.name;
  field.insertBefore(newLabel, field.firstElementChild);
}
