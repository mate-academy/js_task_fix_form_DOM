'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach(function(input) {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', `${input.id}`);

  const labelText = label.textContent
  = input.name.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().toUpperCase();

  input.insertAdjacentElement('beforebegin', label);

  const inputName = labelText[0].toUpperCase()
  + labelText.slice(1).toLowerCase();

  input.setAttribute('placeholder', `${inputName}`);
});
