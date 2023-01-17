'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(element => {
  const label = document.createElement('label');
  const nameText = element.name.replace(/([A-Z])/g, ' $1');

  label.className = 'field-label';
  label.htmlFor = element.id;
  label.innerText = nameText;

  element.placeholder = nameText[0].toUpperCase() + nameText.slice(1);

  return element.insertAdjacentElement('beforebegin', label);
});
