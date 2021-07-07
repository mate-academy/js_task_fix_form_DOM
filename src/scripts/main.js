'use strict';

const inputElements = document.querySelectorAll('input');
const divElements = document.querySelectorAll('.field');

inputElements.forEach((element, i) => {
  const label = document.createElement('label');
  const labelText = element.getAttribute('name').toUpperCase();
  let placeholder = element.name.replace(/([A-Z])/g, ` $1`).toLowerCase();

  placeholder = placeholder[0].toUpperCase() + placeholder.slice(1);

  label.htmlFor = element.id;
  label.classList.add('field-label');
  label.innerText = labelText;

  divElements[i].firstElementChild.setAttribute('placeholder', placeholder);
  divElements[i].prepend(label);
});
