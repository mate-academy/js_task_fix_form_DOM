'use strict';

const listOfForms = [...document.querySelectorAll('form input')];

function ajoutLabel(list) {
  for (const element of list) {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.htmlFor = element.getAttribute('id');
    label.textContent = element.getAttribute('name');
    element.insertAdjacentElement('beforebegin', label);

    element.setAttribute(
      'placeholder',
      capitalize(element.getAttribute('name')),
    );
  }

  return list;
}

function capitalize(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
ajoutLabel(listOfForms);
