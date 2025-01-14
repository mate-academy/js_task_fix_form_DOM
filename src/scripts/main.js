'use strict';

const inputFields = document.querySelectorAll('.field-text');

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

inputFields.forEach((item) => {
  const labelField = document.createElement('label');

  labelField.classList.add('field-label');
  labelField.setAttribute('for', item.id);
  labelField.textContent = item.name;

  // item.parentNode.insertBefore(labelField, item);
  item.insertAdjacentElement('beforebegin', labelField);

  item.setAttribute('placeholder', capitalize(item.name));
});
