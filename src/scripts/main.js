'use strict';

const inputsInsideForm = document.querySelectorAll('form input');

inputsInsideForm.forEach(element => {
  const label = document.createElement('label');
  const elementPlaceholder = element.name[0].toUpperCase()
    + element.name.slice(1);

  label.htmlFor = element.id;
  label.classList.add('field-label');
  label.innerText = replaceToCamelCase(element.name);

  element.placeholder = replaceToCamelCase(elementPlaceholder);
  element.parentElement.prepend(label);
});

function replaceToCamelCase(inputName) {
  return inputName.replace(/([a-z])([A-Z])/g, '$1 $2');
}
