'use strict';

// inputs
const inputs = document.querySelectorAll('input');

// add placeholder,label

inputs.forEach(getPlaceholder);
inputs.forEach(addLabel);

function getPlaceholder(el) {
  el.placeholder = el.getAttribute('name');
}

function addLabel(el) {
  const label = document.createElement('label');

  label.setAttribute('for', el.getAttribute('id'));
  label.setAttribute('class', 'field-label');
  label.innerText = el.getAttribute('name');
  el.before(label);
}

