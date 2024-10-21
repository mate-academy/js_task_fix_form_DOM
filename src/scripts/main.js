'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((item) => {
  const label = document.createElement('label');
  const nameItem = item.getAttribute('name');

  label.classList.add('field-label');
  label.setAttribute('for', item.id);
  label.textContent = nameItem;
  item.setAttribute('placeholder', capitalize(nameItem));
  item.before(label);
});

function capitalize(inputName) {
  return inputName.at(0).toUpperCase() + inputName.slice(1);
}
