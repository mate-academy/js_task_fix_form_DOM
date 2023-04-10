'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach(function(input) {
  const newLabel = document.createElement('label');

  newLabel.setAttribute('class', 'field-label');
  newLabel.setAttribute('for', `#${input.id}`);

  const labelText = newLabel.textContent = input.name === 'firstName'
    ? input.name.toUpperCase().slice(0, 5) + ' ' + input.name.slice(5)
    : input.name === 'lastName'
      ? input.name.toUpperCase().slice(0, 4) + ' ' + input.name.slice(4)
      : input.name.toUpperCase();

  input.insertAdjacentElement('beforebegin', newLabel);

  const inputName = labelText[0].toUpperCase()
  + labelText.slice(1).toLowerCase();

  input.setAttribute('placeholder', `${inputName}`);
});
