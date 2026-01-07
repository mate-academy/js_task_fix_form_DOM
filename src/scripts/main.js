'use strict';

const inputsArray = [...document.querySelectorAll('input[name]')];

inputsArray.forEach((item) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = item.id;
  label.textContent = capitalizeFirstLetter(item.name);
  item.parentNode.insertBefore(label, item);
  item.placeholder = capitalizeFirstLetter(item.name);
});

function capitalizeFirstLetter(string) {
  if (string.length === 0) {
    return '';
  }

  return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}

