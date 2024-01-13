'use strict';

// write code here
const inputElements = document.getElementsByTagName('input');
const inputElementsArray = Array.from(inputElements);

inputElementsArray.forEach(function(input) {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);

  label.classList.add('field-label');

  label.textContent = input.name;

  input.parentNode.appendChild(label);

  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
});
