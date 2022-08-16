'use strict';

const inputs = document.querySelectorAll('input');
const inputsArray = [...inputs];

inputsArray.forEach(item => {
  const label = document.createElement('label');
  const itemName = item.name;

  const fieldName = itemName.split('').map((letter, index) => {
    if (itemName.charCodeAt(index)
      === itemName.toUpperCase().charCodeAt(index)) {
      return ' ' + letter;
    }

    return letter;
  }).join('');

  label.className = 'field-label';
  label.htmlFor = item.id;
  label.textContent = fieldName;

  item.before(label);

  item.placeholder = fieldName[0].toUpperCase() + fieldName.slice(1);
});
