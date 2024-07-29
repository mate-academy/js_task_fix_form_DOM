'use strict';

function capitalizeFirstLetter(str) {
  if (!str) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

const inputs = document.getElementsByClassName('field-text');

Array.from(inputs).forEach((x) => {
  const label = document.createElement('label');

  label.htmlFor = x.id;

  const nameAttr = x
    .getAttribute('name')
    .split(/(?=[A-Z])/)
    .join(' ');

  label.textContent = capitalizeFirstLetter(nameAttr);

  x.placeholder = capitalizeFirstLetter(nameAttr);

  x.parentNode.insertBefore(label, x);
});
