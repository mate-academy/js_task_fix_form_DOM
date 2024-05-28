'use strict';

const inputsCollection = document.querySelectorAll('input');

inputsCollection.forEach((item) => {
  const newLabel = document.createElement('label');

  item.insertAdjacentElement('beforebegin', newLabel);
  newLabel.setAttribute('class', 'field-label');
  newLabel.setAttribute('for', item.id);
  newLabel.setAttribute('textContent', item.name);
  item.setAttribute('placeholder', item.name.toUpperCase());
});
