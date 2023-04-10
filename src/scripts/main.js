'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach(function(input) {
  const newLabel = document.createElement('label');

  newLabel.setAttribute('class', 'field-label');
  newLabel.setAttribute('for', `#${input.id}`);

  const labelText = newLabel.textContent
  = input.name.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().toUpperCase();

  input.insertAdjacentElement('beforebegin', newLabel);

  const inputName = labelText[0].toUpperCase()
  + labelText.slice(1).toLowerCase();

  input.setAttribute('placeholder', `${inputName}`);
});
