'use strict';

// inputs
const inputs = document.querySelectorAll('input');

// add placeholder,label

inputs.forEach(getPlaceholder);
inputs.forEach(addLabel);

function getPlaceholder(el) {
  const firstLetter = el.getAttribute('name').slice(0, 1).toUpperCase();
  const restLetter = el.getAttribute('name').slice(1, -1);
  const placeholderText = firstLetter + restLetter;

  el.placeholder = placeholderText;
}

function addLabel(el) {
  const label = document.createElement('label');

  label.setAttribute('for', el.getAttribute('id'));
  label.setAttribute('class', 'field-label');
  label.innerText = el.getAttribute('name');
  el.before(label);
}
