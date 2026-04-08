'use strict';

function capitalize(string) {
  return (string.slice(0, 1).toUpperCase() + string.slice(1))
    .replace(/([A-Z])/g, ' $1').trim();
}

const inputElements = document.querySelectorAll('input');

inputElements.forEach(element => {
  const labelElement = document.createElement('label');

  labelElement.classList.add('field-label');
  labelElement.htmlFor = element.id;
  labelElement.textContent = capitalize(element.name);

  element.parentNode.appendChild(labelElement);

  element.setAttribute('placeholder', capitalize(element.name));
});
