'use strict';

// write code here
const inputElements = document.getElementsByTagName('input');
const inputElementsArray = Array.from(inputElements);

inputElementsArray.forEach(function(input) {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.classList.add('field-label');

  const labelText = input.name.replace(/([a-z])([A-Z])/g, '$1 $2');

  label.textContent = labelText;

  input.parentNode.insertBefore(label, input.nextSibling);

  input.placeholder = labelText.charAt(0).toUpperCase() + labelText.slice(1);
});
