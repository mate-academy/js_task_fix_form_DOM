'use strict';

// write code here
function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

const inputElements = document.querySelectorAll('input');

inputElements.forEach(element => {
  const labelElement = document.createElement('label');

  labelElement.classList.add('field-label');
  labelElement.htmlFor = element.id;
  labelElement.textContent = element.name;

  element.parentNode.appendChild(labelElement);

  element.setAttribute('placeholder', capitalize(element.name));
});
