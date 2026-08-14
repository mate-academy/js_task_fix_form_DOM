'use strict';

// write code here
const listOfInputs = document.querySelector('form').querySelectorAll('input');

listOfInputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.getAttribute('id'));
  label.textContent = input.getAttribute('name');

  input.parentElement.appendChild(label);

  const nameAttribute = input.getAttribute('name').split('');

  nameAttribute[0] = nameAttribute[0].toUpperCase();
  input.setAttribute('placeholder', nameAttribute.join(''));
});
