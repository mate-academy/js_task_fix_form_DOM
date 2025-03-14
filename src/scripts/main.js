'use strict';

const inputsArray = [...document.querySelectorAll('form input')];

for (const item of inputsArray) {
  item.setAttribute(
    'placeholder',
    capitalizeFirstLetter(item.getAttribute('name')),
  );

  const label = document.createElement('label');

  item.before(label);
  label.setAttribute('for', item.getAttribute('id'));
  label.setAttribute('class', 'field-label');
  label.textContent = item.getAttribute('name');
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
