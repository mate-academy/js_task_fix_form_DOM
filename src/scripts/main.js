'use strict';

const inputsInsideForm = document.querySelectorAll('form input');

inputsInsideForm.forEach(input => {
  const label = document.createElement('label');

  label.innerText = splitCamelCase(input.name);

  label.classList.add('field-label');

  label.setAttribute('for', input.name);

  const placeholderContent = input.name[0].toUpperCase() + input.name.slice(1);

  input.placeholder = splitCamelCase(placeholderContent);

  input.parentNode.insertBefore(label, input.nextSibling);
});

function splitCamelCase(input) {
  return input.replace(/([a-z])([A-Z])/g, '$1 $2');
}
