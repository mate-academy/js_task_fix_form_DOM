'use strict';

const listOfInputs = document.querySelectorAll('input');
const listOfParents = document.getElementsByClassName('field');

listOfInputs.forEach((el, i) => {
  let fieldName = el.name.replace(/([A-Z])/g, ' $1');

  fieldName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);

  el.placeholder = fieldName;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = el.name.replace(/([A-Z])/g, ' $1').toUpperCase();
  label.setAttribute('for', el.id);

  listOfParents[i].insertBefore(label, el);
});
